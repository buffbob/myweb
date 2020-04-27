from flask import render_template, Blueprint

play = Blueprint("play", __name__)

@play.route("/scoop")
def play1():
    return render_template("play/play1.html")


@play.route("/scoop2")
def play2():
    return render_template("play/play2.html")


@play.route("/scoop3")
def play3():
    return render_template("play/play3.html")

@play.route("/scoop4")
def play4():
    return render_template("play/play4.html")

@play.route("/scoop5")
def play5():
    return render_template("play/play5.html")

@play.route("/scoop6")
def play6():
    return render_template("play/play6.html")

@play.route("/scoop7")
def play7():
    return render_template("play/play7.html")

@play.route("/scoop8")
def play8():
    return render_template("play/play8.html")

@play.route("/scoop9")
def play9():
    return render_template("play/play9.html")