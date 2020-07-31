import json
from flask import request, jsonify, Blueprint, abort, session
from flask.views import MethodView
from src import db, app
from src.users.models import User


class LoginView(MethodView):

    def post(self):
        payload = request.get_json(force=True)
        email = payload['email']
        password = payload['password']

        user = User.query.filter_by(email=email, password=password).first()
        if not user:
            return {"error": "Usuario ou senha invalido"}


        json = jsonify({user.id: {
            'name': user.name,
            'email': str(user.email),
            'password': str(user.password),
        }})
        return json


login_view = LoginView.as_view('login_view')