from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from backend.marcelo.api.database.db import AppDatabase



app = FastAPI()

app.mount("/images", StaticFiles(directory="./backend/res/imgs/app_imgs/"), name="images")

@app.get("/foods")
def get_foods(request : Request):
    if request.query_params.get('id'):
        return AppDatabase.get_by_id('foods', request.query_params.get('id'))
    return AppDatabase.get_foods() 

@app.get("/drinks")
def get_drinks(request : Request):
    if request.query_params.get('id'):
        return AppDatabase.get_by_id('drinks', request.query_params.get('id'))
    return AppDatabase.get_drinks()

@app.get("/desserts")
def get_desserts(request : Request):
    if request.query_params.get('id'):
        return AppDatabase.get_by_id('desserts', request.query_params.get('id'))
    return AppDatabase.get_desserts()