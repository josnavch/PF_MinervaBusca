"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json
from api.models import db, User, MyBooks
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity, create_refresh_token
import smtplib, ssl
from email.message import EmailMessage
import datetime
import random
import string
from datetime import date
from sqlalchemy import func

api = Blueprint('api', __name__)


# Handle/serialize errors like a JSON object
@api.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@api.route('/')
def sitemap():
    return generate_sitemap(app)

#configuraciones de correo
port = 587  # For starttls
smtp_server = "smtp.gmail.com"
sender_email = "minervabuscamail@gmail.com"
password = "4geeks2021"


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/hash', methods=['POST', 'GET'])
def handle_hash():
    expiration = datetime.timedelta(minutes = 45)
    access_token = create_access_token(identity='josnavch@gmail.com',expires_delta=expiration)
    refresh_token = create_refresh_token(identity='josnavch@gmail.com',expires_delta=expiration)
    response_token = {
        "users": "josnavch",
        "token": access_token,
        "refresh_token": refresh_token,
    }

    return jsonify(response_token), 200

@api.route('/login', methods=['POST'])

def handle_login():

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if not email:
        return jsonify ({"msg":"Debe ingresar el correo electrónico.",
        "status": 400}), 400

    if not password:
        return jsonify ({"msg":"Debe ingresar la contraseña.",
        "status": 400}), 400
    
    user = User.query.filter_by(email=email).first()    


    if not user:
        return jsonify({"msg": "El correo ingresado no ha sido registrado", 
        "status": 401
        }), 401

    if not check_password_hash(user.password, password):
        return jsonify({"msg": "La contraseña ingresada es incorrecta.",
        "status": 401
        }), 400

    expiration = datetime.timedelta(minutes = 45)
    access_token = create_access_token(identity=user.email, expires_delta=expiration)
    refresh_token = create_refresh_token(identity=user.email, expires_delta=expiration)

    data = {
        "user": user.serialize(),
        "token": access_token,
        "refresh_token": refresh_token,
        "expires": expiration.total_seconds(),
        "userId": user.id,
    #    "pass": generate_password_hash(password),
        "email": user.email,
        "status": 200,
        "msg": "Ha ingresado correctamente."   
        }

    return jsonify(data), 200


@api.route('/changePassword', methods=['POST'])
def handle_changePassword():
    email = request.json.get("email", None)
    nuevaContrasena = request.json.get("nuevaContrasena", None)

    if not email:
        return jsonify ({"message":"El correo es requerido.","status": 400}), 400

    if not nuevaContrasena:
        return jsonify ({"message":"La nueva contraseña es requerida.","status": 400}), 400

    user = User.query.filter_by(email=email).first()    
    
    if not user:
        return jsonify({"message": "El correo ingresado es incorrecto.", 
        "status": 401
        }), 401

    user.email = email
    user.is_active = True
    user.password = generate_password_hash(nuevaContrasena)
    db.session.commit()

    data = {
        "status": 200,
        "message": "Se ha registrado correctamente su nueva contraseña.", 
    }

    return jsonify (data), 200 

@api.route('/sendRestoreEmail', methods=['POST'])
def handle_sendEmail():
    email = request.json.get("email", None)
    url = request.json.get("url", None)
    if not email:
        return jsonify ({"message":"No se logro obtener la identidad del correo.","status": 400}), 400

    if not email:
        return jsonify ({"message":"El correo ingresado es incorrecto.","status": 400}), 400

    user = User.query.filter_by(email=email).first()    
    
    if not user:
        return jsonify({"message": "El correo ingresado es incorrecto.", 
        "status": 401
        }), 401

    expiration = datetime.timedelta(minutes = 5)
    access_token = create_access_token(identity=user.email, expires_delta=expiration)  

    
    bodyMessage = "Ha restablecido su costrasena, para registrar una nueva debe ingresar al siguiente link: \n" + url+"/restablecer/token?"+access_token
    # message = """\
    # Restablecimiento de contrasena

    # ."""+bodyMessage
    msg = EmailMessage()
    msg.set_content(bodyMessage)

    msg['Subject'] = 'Restablecimiento de contrasena'
    msg['From'] = sender_email
    msg['To'] = email
    context = ssl.create_default_context()
    with smtplib.SMTP(smtp_server, port) as server:
        server.ehlo()  # Can be omitted
        server.starttls(context=context)
        server.ehlo()  # Can be omitted
        server.login(sender_email, password)
        #server.sendmail(sender_email, receiver_email, message)
        server.send_message(msg)
    data = {
        "status": 200,
        "message": "Se ha enviado el correo correctamente.", 
    }
    return jsonify(data), 200 


def randompassword():
  chars = string.ascii_uppercase + string.ascii_lowercase + string.digits
  size = random.randint(8, 12)
  return ''.join(random.choice(chars) for x in range(size))

@api.route('/registro', methods=['POST'])
def create_user():
    req = request.get_json()
    contrasena= generate_password_hash(req["password"])
    user = User(email = req["email"], password=contrasena, name=req["name"], id_number=req["id_number"], phone=req["phone"], is_active= True)
    getemail= User.query.filter_by(email = user.email).first()
    if getemail is None:
        db.session.add(user)
        db.session.commit()
        return jsonify({"msg":"El usuario ha sido registrado de manera satisfactoria","status": 200}),200
    else:
        return jsonify({"msg":"Parece que este usurio ya esta registrado", "status": 400}),400


@api.route('/addMybooks', methods=['POST'])
def handle_add_MyBooks():
  
    if request.is_json:
        data = request.get_json()
        today = date.today()
        fecha = today.strftime("%Y-%b-%d")
        Mydata = MyBooks(
            book_id = data['book_id'],
            user_id = data['user_id'],
            is_public = False,
            title = data['title'],
            authors = data['authors'],
            publisher = data['publisher'],
            publishedDate = data['publishedDate'],
            pageCount = data['pageCount'],
            isbn = data['isbn'],
            categories = data['categories'],
            description = data['description'],
            fechacompra = fecha
        )

        query = MyBooks.query.filter_by(            
            book_id=Mydata.book_id,
            user_id=Mydata.user_id
        ).first()

        if not query:
            db.session.add(Mydata)
            db.session.commit()
            return jsonify({"message": f"El libro {Mydata.title} se ha incluido en mi librería.",  "status": 200}), 200
        else:
            return jsonify({"message": f"El libro {Mydata.title} ya se encuentra en mi librería.",  "status": 401}), 400
    else:
        return jsonify({"error": "The request payload is not in JSON format",  "status": 401}), 400


@api.route('/getMybooks/<int:paramid>', methods=['GET'])
def getAllMyBooks(paramid):
    query= User.query.get(paramid)
    if query is None:
        return("El usuario no se encontró"),400
    else:
        result= MyBooks.query.filter_by(user_id = query.id)
        lista = list(map(lambda x: x.serialize(), result))
        return jsonify(lista),200

@api.route('/getMyPrivateBooks/<int:paramid>', methods=['GET'])
def getMyPrivateBooks(paramid):
    query= User.query.get(paramid)
    if query is None:
        return("El usuario no se encontró"),400
    else:
        result= MyBooks.query.filter_by(user_id= query.id, is_public = False)
        lista = list(map(lambda x: x.serialize(), result))
        return jsonify(lista),200

@api.route('/getMyPublicBooks/<int:paramid>', methods=['GET'])
def getMyPublicBooks(paramid):
    query= User.query.get(paramid)
    if query is None:
        return("El usuario no se encontró"),400
    else:
        result= MyBooks.query.filter_by(user_id= query.id, is_public = True)
        lista = list(map(lambda x: x.serialize(), result))
        return jsonify(lista),200

@api.route('/getInfoMyBook/<int:paramid>/<string:bookid>', methods=['GET'])
def getInfoMyBook(paramid, bookid):
    query= User.query.get(paramid)
    if query is None:
        return("El usuario no se encontró"),400
    else:
        result= MyBooks.query.filter_by(user_id= query.id, book_id= bookid).first()
        lista= result.serialize()
        return jsonify(lista),200
   
@api.route('/publicbook', methods=['POST'])
def handle_publicbook():

    if request.is_json:
        userid= request.json.get("userid", None)
        bookid= request.json.get("bookid", None)
        query = MyBooks.query.filter_by( 
                user_id = userid, 
                id = bookid 
                
            ).first()
        
        #return jsonify(query.is_public)
        if query.is_public:
            query.is_public = False
            db.session.commit()
            return jsonify({"message": f"El Libro {query.title} se ha hecho privado.",  "status": 200}), 200
        
        else:
            query.is_public = True
            db.session.commit()
            return jsonify({"message": f"El Libro {query.title} se ha hecho público.",  "status": 200}), 200

    else:
        return jsonify({"error": "The request payload is not in JSON format",  "status": 401}), 400

@api.route('/deletebook', methods=['DELETE'])
def handle_deletebook():

    if request.is_json:
        userid= request.json.get("userid", None)
        bookid= request.json.get("bookid", None)
        query = MyBooks.query.filter_by( 
                user_id = userid, 
                id = bookid 
                
            ).first()
        
        if query:
            db.session.delete(query)
            db.session.commit()
            return jsonify({"message": f"El Libro {query.title} se ha eliminado de la biblioteca",  "status": 200}), 200
        
        else:
            return jsonify({"message": f"El Libro {query.title} no se ha encontrado en la biblioteca",  "status": 201}), 200

    else:
        return jsonify({"error": "The request payload is not in JSON format",  "status": 401}), 400

@api.route('/searchmybook', methods=['POST'])
def handle_searchmybook():
    if request.is_json:
        userid= request.json.get("userid", None)
        searchbook= request.json.get("booksearch", None)
        query = MyBooks.query.filter(MyBooks.user_id == userid).filter(func.upper(MyBooks.title).like('%'+func.upper(searchbook)+'%')).all()

    if query:
        lista = list(map(lambda x: x.serialize(), query))
        return jsonify(lista),200
    else:
        return jsonify(lista),201
       # return jsonify({"message": f" No se encontraron libros en su biblioteca con esos criterios: {searchbook}",  "status": 201}), 200

@api.route('/searchmybook_public', methods=['POST'])
def handle_searchmybook_public():
    if request.is_json:
        userid= request.json.get("userid", None)
        searchbook= request.json.get("booksearch", None)
        query = MyBooks.query.filter_by(user_id = userid, is_public = True ).filter(func.upper(MyBooks.title).like('%'+func.upper(searchbook)+'%')).all()

    if query:
        lista = list(map(lambda x: x.serialize(), query))
        return jsonify(lista),200
    else:
        return jsonify(lista),201
        #return jsonify({"message": f" No se encontraron libros en su biblioteca con esos criterios: {searchbook}",  "status": 201}), 200

@api.route('/searchmybook_private', methods=['POST'])
def handle_searchmybook_private():
    if request.is_json:
        userid= request.json.get("userid", None)
        searchbook= request.json.get("booksearch", None)
        query = MyBooks.query.filter_by(user_id = userid, is_public = False ).filter(func.upper(MyBooks.title).like('%'+func.upper(searchbook)+'%')).all()

    if query:
        lista = list(map(lambda x: x.serialize(), query))
        return jsonify(lista),200
    else:
        return jsonify(lista),201
        #return jsonify({"message": f" No se encontraron libros en su biblioteca con esos criterios: {searchbook}",  "status": 201}), 200