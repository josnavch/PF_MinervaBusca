"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json
from api.models import db, User
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity, create_refresh_token
import datetime

api = Blueprint('api', __name__)




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
        return jsonify ({"msg":"Email required"}), 400

    if not password:
        return jsonify ({"msg":"Password required"}), 400
    
    user = User.query.filter_by(email=email).first()    
    print (user)

    if not user:
        return jsonify({"msg": "The email is not correct", 
        "status": 401
        }), 401

    if not check_password_hash(user.password, password):
        return jsonify({"msg": "The password is not correct",
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
        "msg": "Login successfully"   
        }

    return jsonify(data), 200



@api.route('/sendRestoreEmail', methods=['POST'])

def handle_sendRestoreEmail():

    email = request.json.get("email", None)

    if not email:
        return jsonify ({"msg":"Email required"}), 400

    user = User.query.filter_by(email=email).first()    
    print (user)

    if not user:
        return jsonify({"msg": "The email is not correct", 
        "status": 401
        }), 401


    expiration = datetime.timedelta(minutes = 10)
    access_token = create_access_token(identity=user.email, expires_delta=expiration)
    user = User.query.filter_by(email=email).first()    

    user.email = email
    user.is_active = False
    user.password = generate_password_hash(randompassword)
    db.session.commit()

    data = {
        "user": user.serialize(),
        "token": access_token,
        "expires": expiration.total_seconds(),
        "userId": user.id,
    #    "pass": generate_password_hash(password),
        "email": user.email   
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
        return jsonify({"msg:":"Registro realizado correctmente"}),200
    else:
        return jsonify({"msg:":"Este usurio ya esta registrado"}),400
