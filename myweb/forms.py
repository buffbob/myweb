from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, BooleanField, TextAreaField
from wtforms.validators import DataRequired, Email

class SendMeAnEmail(FlaskForm):
    email = StringField("your email", validators=[DataRequired()])
    msg = TextAreaField("Your message to me", validators=[DataRequired()])
    submit = SubmitField("Send")