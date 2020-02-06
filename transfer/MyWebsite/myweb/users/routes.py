
from flask import render_template, Blueprint

users = Blueprint("users", __name__)

@users.route("/")
@users.route("/home")
def home():
    return render_template('users/home.html')


@users.route("/about")
def about():
    return render_template('users/about.html', title='About')

@users.route("/map")
def map():
    return render_template('users/map.html')


@users.route("/home2")
def home2():
    return render_template("home2.html")

@users.route("/booger")
def boogers():
    return render_template('booger.html')


