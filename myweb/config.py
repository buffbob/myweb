import os
import json

filepath = "/etc/web_app_configs/config.myweb.json" # todo:

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
    temp8 = config_dic.get('MAIL_USE_TLS') == "True"
    temp9 = config_dic.get('MAIL_USE_SSL') == "True"
    temp10 = ['nuckerts@gmail.com'] # ADMINS

else:
    temp1 = "one1"
    temp2 = "run.py"
    temp3 = "development"
    temp4 = "email@gmail.com"
    temp5 = "CastorPastor"
    temp6 = None
    temp7 = 25
    temp8 = False
    temp9 = False
    temp10 = ['nuckerts@gmail.com']


class Config:
    SECRET_KEY = temp1
    FLASK_APP = temp2
    FLASK_ENV = temp3
    MAIL_USERNAME = temp4
    MAIL_PASSWORD = temp5
    MAIL_SERVER = temp6
    MAIL_PORT = temp7
    MAIL_USE_TLS = False #temp8
    MAIL_USE_SSL = True #temp9
    # ADMINS = temp10

