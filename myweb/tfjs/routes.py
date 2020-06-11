from flask import render_template, Blueprint, request, flash

tfjs = Blueprint("tfjs", __name__)

@tfjs.route("/server_iris", methods=['GET', 'POST'])
def classify_iris():
    if (request.method =="POST"):
        irisfeatures = []
        # validate
        if request.form["seplen"] and request.form["sepwid"] and request.form["petlen"] and request.form["petwid"]:
            irisfeatures = [request.form["seplen"], request.form["sepwid"], request.form["petlen"], request.form["sepwid"]]
            return render_template("tfjs/iris.html", title="Iris", hm=irisfeatures)
        else:
            flash("fill in all the fields", "warning")
            return render_template("tfjs/iris.html", title="Iris", hm="boogshit")
    else: return render_template("tfjs/iris.html", title="Iris", hm="boogshit")


@tfjs.route("/iris")
def iris():
    return render_template("tfjs/iris2.html")

@tfjs.route("/iris3")
def iris3():
    return render_template("tfjs/iris3.html")
