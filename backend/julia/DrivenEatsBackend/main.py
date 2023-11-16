from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI
from .db import  get_desserts_id, get_foods_id, get_drinks_id

app = FastAPI()

app.mount("/images", StaticFiles(directory="./backend/res/imgs/"), name="images")

@app.get("/desserts/{id}")
def get_desserts_api_id(id):
    return get_desserts_id(id)

@app.get("/foods/{id}")
def get_foods_api_id(id):
    return get_foods_id(id)

@app.get("/drinks/{id}")
def get_drinks_api_id(id):
    return get_drinks_id(id)

