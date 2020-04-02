import datetime
import pickle
import json
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from api.settings import BASE_DIR

from custom_code import image_converter

@api_view(['GET'])
def __index__function(request):
    start_time = datetime.datetime.now()
    elapsed_time = datetime.datetime.now() - start_time
    elapsed_time_ms = (elapsed_time.days * 86400000) + (elapsed_time.seconds * 1000) + (elapsed_time.microseconds / 1000)
    return_data = {
        "error" : "0",
        "message" : "Successful",
        "restime" : elapsed_time_ms
    }
    return HttpResponse(json.dumps(return_data), content_type='application/json; charset=utf-8')

@api_view(['POST','GET'])
def predict_plant_disease(request):
    try:
        if request.method == "GET" :
            return_data = {
                "error" : "0",
                "message" : "Plant Disease Recognition Successful"
            }
        else:
            if request.body:
                request_data = request.data["plant_image"]
                header, image_data = request_data.split(';base64,')
                image_array, err_msg = image_converter.convert_image(image_data)
                if err_msg == None :
                    model_file = f"{BASE_DIR}/ml_files/cnn_model.pkl"
                    saved_classifier_model = pickle.load(open(model_file,'rb'))
                    prediction = saved_classifier_model.predict(image_array) 
                    label_binarizer = pickle.load(open(f"{BASE_DIR}/ml_files/label_transform.pkl",'rb'))
                    return_data = {
                        "error" : "0",
                        "data" : f"{label_binarizer.inverse_transform(prediction)[0]}"
                    }
                else :
                    return_data = {
                        "error" : "4",
                        "message" : f"Error : {err_msg}"
                    }
            else :
                return_data = {
                    "error" : "1",
                    "message" : "Request Body is empty",
                }
    except Exception as e:
        return_data = {
            "error" : "3",
            "message" : f"Error : {str(e)}",
        }
    return HttpResponse(json.dumps(return_data), content_type='application/json; charset=utf-8')
