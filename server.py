import os
from src import app, db
from src.users.views import user_view
from src.login.views import login_view
port = int( os.getenv( 'PORT', 8000 ) )
# app.register_blueprint(user_routes)

app.add_url_rule(
    '/user', view_func=user_view, methods=['GET', 'POST']
)
app.add_url_rule(
    '/user/<int:id>', view_func=user_view, methods=['GET']
)

app.add_url_rule(
    '/login', view_func=login_view, methods=['POST']
)

db.create_all()
#app.run(debug=True)
app.run( host='0.0.0.0', port=port, debug=True)