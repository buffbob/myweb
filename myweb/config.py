import os
import json

filepath = "/etc/web_app_configs/config.myweb.json)"
if os.path.isfile(filepath):
    with open(filepath) as f:
        config_dic = json.load(f)
    temp1 = config_dic["SECRET_KEY"]
    temp2 = config_dic["FLASK_APP"]
    temp3 = config_dic["FLASK_ENV"]
    temp4 = config_dic["USER_EMAIL"]
    temp5 = config_dic["EMAIL_PASS"]
else:
    temp1 = "4050bb6b29daf80386437237c2a7e364"
    temp2 = "run.py"
    temp3 = "development"
    temp4 = "lastgulch@gmail.com"
    temp5 = "1SweetPastor"



class Config:
    SECRET_KEY = temp1
    FLASK_APP = temp2
    FLASK_ENV = temp3
    USER_EMAIL = temp4
    EMAIL_PASS = temp5


