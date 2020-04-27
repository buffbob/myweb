import os
import json
from flask import Flask
from myweb.config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

# db = SQLAlchemy()
# bcrypt = Bcrypt()
# login_manager = LoginManager()
#login_manager.login_view = "booger"

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    if test_config is None:
        app.config.from_object(Config)
    else:
        app.config.from_mapping(test_config)

    # db.init_app(app)
    # bcrypt.init_app(app)
    # login_manager.init_app(app)

    from myweb.users.routes import users
    from myweb.errors.handlers import errors
    from myweb.play.routes import play

    app.register_blueprint(users)
    app.register_blueprint(errors)
    app.register_blueprint(play)

    return app