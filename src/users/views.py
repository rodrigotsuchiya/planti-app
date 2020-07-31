import json
from flask import request, jsonify, Blueprint, abort, session
from flask.views import MethodView
from src import db, app
from src.users.models import User

# user_routes = Blueprint('user_catalog', __name__)


# @user_routes.route('/')
# @user_routes.route('/home')
# def home():
#     return "Bem vindo ao Clima API."


class UserView(MethodView):

    def get(self, id=None, page=1):
        if not id:
            users = User.query.paginate(page, 10).items
            res = {}
            for user in users:
                res[user.id] = {
                    'name': user.name,
                    'email': str(user.email),
                    'password': str(user.password),
                }
        else:
            user = User.query.filter_by(id=id).first()
            if not user:
                abort(404)
            res = {
                'name': user.name,
                'email': str(user.email),
                'password': str(user.password),
            }
        return jsonify(res)

    def post(self):
        payload = request.get_json(force=True)
        print(f"request: {payload}")
        name = payload['name']
        email = payload['email']
        password = payload['password']

        user = User(name, email, password)
        db.session.add(user)
        db.session.commit()
        json = jsonify({user.id: {
            'name': user.name,
            'email': str(user.email),
            'password': str(user.password),
        }})
        return json

    def put(self, id):
        # Update the record for the provided id
        # with the details provided.
        return

    def delete(self, id):
        # Delete the record for the provided id.
        return


user_view = UserView.as_view('user_view')
