import os

class Config:
    SECRET_KEY=os.environ.get("SECRET_KEY")
    # SQLALCHEMY_DATABASE_URI = os.getenv("SQLALCHEMY_DATABASE_URI")
    # SQLALCHEMY_ECHO = True
    FLASK_APP=os.environ.get("FLASK_APP")
    FLASK_ENV=os.environ.get("FLASK_ENV")
    #Later when moveing to production will use the included json file for variables such as these


