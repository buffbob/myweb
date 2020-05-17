import folium
from flask import render_template, Blueprint, flash, redirect, url_for, current_app
from myweb.forms import SendMeAnEmail
from myweb.email import send_email
from flask_mail import Mail, Message
from myweb import mail

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

@users.route("/fol1")
def fol1():
    start_coords = [39.7042, -105.3346]
    map1 = folium.Map(location=start_coords, zoom_start=11)
    return map1._repr_html_()



@users.route("/fol2")
def fol2():
    start_coords = [39.7042, -105.3346]
    map1 = folium.Map(location=start_coords, zoom_start=11)
    string_map =  map1._repr_html_()
    return render_template("fol2.html", data=string_map)



@users.route("/home2")
def home2():
    return render_template("home2.html")

@users.route("/booger")
def boogers():
    return render_template('booger.html')

@users.route("/bubbles")
def bubbles():
    return render_template('jspages/canvas2.html')

@users.route("/simple_calc")
def calc():
    return render_template('jspages/simple_calc.html')

@users.route("/jsapps")
def jsapps():
    return render_template('jspages/jsapps.html')


@users.route('/ranch_web')
def ranch_web_gallery():
    return render_template("users/ranch_web.html")

@users.route("/maps")
def maps():
    return render_template("users/maps.html")

@users.route("/send_an_email", methods=["GET", "POST"])
def send_me_an_email():
    form = SendMeAnEmail()
    if form.validate_on_submit():
        em = form.email.data # sender
        msg = form.msg.data
        title = "EMAIL FROM BUFFBOB.COM"

        print(em)
        print(msg)
        newmsg = Message(title, sender="lastgulch@gmail.com", recipients=["nuckerts@gmail.com"])
        newmsg.body = msg
        mail.send(newmsg)
        print('success?')
        flash("thanks I will be in touch!", "success")
        return render_template('users/home.html',title="boogs")

        #send_email(title, sender=em, recipients=current_app.config["ADMINS"], text_body=msg)
        #send_email(title, sender=em, recipients=['nuckerts@gmail.com'], text_body=msg)

                   # text_body=render_template("users/email_sent.txt", msg=msg))

        # html_body=render_template("users/email_sent.html", msg=msg))





    return render_template("users/send_an_email.html", form=form)
