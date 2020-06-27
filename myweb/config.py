import os
import json

filepath = "/etc/web_app_configs/config.myweb.json" # todo:

if os.path.isfile(filepath):
    with open(filepath) as f:
        config_dic = json.load(f)
    temp1 = config_dic["SECRET_KEY"]
    temp2 = config_dic["MAIL_USERNAME"]
    temp3 = config_dic["MAIL_PASSWORD"]
    temp4 = config_dic["MAIL_SERVER"]
    temp5 = int(config_dic['MAIL_PORT']) or 25
    temp6 = config_dic.get('MAIL_USE_TLS') == "True"
    temp7 = config_dic.get('MAIL_USE_SSL') == "True"
else:
    temp1 = "mysecretkey"
    temp2 = "lastgulch@gmail.com"
    temp3 = "mastercastor"
    temp4 = "smtp::gmail.com"
    temp5 = 25
    temp6 = False
    temp7 = True


class Config:
    SECRET_KEY = temp1
    MAIL_USERNAME = temp2
    MAIL_PASSWORD = temp3
    MAIL_SERVER = temp4
    MAIL_PORT = temp5
    MAIL_USE_TLS = False
    MAIL_USE_SSL = True
