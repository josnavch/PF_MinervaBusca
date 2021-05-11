from sqlalchemy import Column, ForeignKey, Integer, String, Text, Boolean
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    id_number = db.Column(db.String(20), unique=False, nullable=False)
    phone = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "id_number": self.id_number,
            "phone": self.phone

            # do not serialize the password, its a security breach
        }

class MyBooks(db.Model):
    __tablename__ = 'mybooks'
    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column( db.String(100), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    is_public = db.Column(db.Boolean(), unique=False, nullable=False)

    title = db.Column( db.String(100), nullable=True)
    authors = db.Column( db.String(200), nullable=False)
    publisher = db.Column( db.String(100), nullable=False)
    publishedDate = db.Column( db.String(50), nullable=False)
    pageCount = db.Column( db.String(50), nullable=False)
    isbn = db.Column( db.String(200), nullable=False)
    categories = db.Column( db.String(200), nullable=False)
    description = db.Column( db.Text, nullable=False)
    fechacompra = db.Column( db.String(20), nullable=False)
    

    def __repr__(self):
        return '<id %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "book_id": self.book_id,
            "user_id": self.user_id,
            "is_public": self.is_public,
            "title": self.title,
            "authors": self.authors,
            "publisher": self.publisher,
            "publishedDate": self.publishedDate,
            "pageCount": self.pageCount,
            "isbn": self.isbn,
            "categories": self.categories,
            "description": self.description,
            #"thumbnail": self.thumbnail
            "fechacompra": self.fechacompra
        }

class SessionID(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    session_token = db.Column(db.String(150), unique=True, nullable=True)
    duedate = db.Column(db.String(18), nullable=False)

    def __repr__(self):
        return '<id %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "session_token": self.session_token,
            "duedate": self.duedate
        }


class PublicBooks(db.Model):
    __tablename__ = 'publicbooks'
    cod_id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column( db.Integer, nullable=True)
    publicdate = db.Column( db.String(100), nullable=True)
    
    def __repr__(self):
        return '<cod_id %r>' % self.cod_id

    def serialize(self):
        return {
            "cod_id": self.cod_id,
            "book_id": self.book_id,
            "publicdate": self.publicdate
        }