import os
import json

filepath = "/etc/web_app_configs/config.myweb.json)"

if os.path.isfile(filepath):
    with open(filepath) as f:
        config_dic = json.load(f)
    temp1 = config_dic["SECRET_KEY"]
    temp2 = config_dic["FLASK_APP"]
    temp3 = config_dic["FLASK_ENV"]
    temp4 = config_dic["MAIL_USERNAME"]
    temp5 = config_dic["MAIL_PASS"]
    temp6 = config_dic['MAIL_SERVER']
    temp7 = int(config_dic['MAIL_PORT']) or 25
    temp8 = config_dic['MAIL_USE_TLS'] is not None
    temp9 = ['lastgulch@gmail.com']
else:
    temp1 = "4050bb6b29daf80386437237c2a7e364"
    temp2 = "run.py"
    temp3 = "production"
    temp4 = "email@gmail.com"
    temp5 = "CastorPastor"
    temp6 = None
    temp7 = None
    temp8 = None
    temp9 = None



class Config:
    SECRET_KEY = temp1
    FLASK_APP = temp2
    FLASK_ENV = temp3
    MAIL_USERNAME = temp4
    MAIL_PASSWORD = temp5
    MAIL_SERVER = temp6
    MAIL_PORT = temp7
    MAIL_USE_TLS = temp8
    ADMINS = temp9


