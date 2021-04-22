from sqlalchemy import Column, ForeignKey, Integer, String
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
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
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    is_public = db.Column(db.Boolean(), unique=False, nullable=False)

    title = db.Column( db.String(100), nullable=True)
    authors = db.Column( db.String(200), nullable=False)
    publisher = db.Column( db.String(100), nullable=False)
    publishedDate = db.Column( db.String(16), nullable=False)
    pageCount = db.Column( db.String(10), nullable=False)
    printType = db.Column( db.String(20), nullable=False)
    categories = db.Column( db.String(100), nullable=False)
    averageRating = db.Column( db.String(10), nullable=False)
    description = db.Column( db.String(300), nullable=False)
    smallThumbnail = db.Column( db.String(200), nullable=False)
    thumbnail = db.Column( db.String(200), nullable=False)
    textSnippet = db.Column( db.String(300), nullable=False)
    

    def __repr__(self):
        return '<id %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "is_public": self.is_public,
            "title": self.title,
            "authors": self.authors,
            "publisher": self.publisher,
            "publishedDate": self.publishedDate,
            "pageCount": self.pageCount,
            "printType": self.printType,
            "categories": self.categories,
            "averageRating": self.averageRating,
            "description": self.description,
            "smallThumbnail": self.smallThumbnail,
            "thumbnail": self.thumbnail,
            "textSnippet": self.textSnippet

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