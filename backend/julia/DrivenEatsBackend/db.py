import json

def get_desserts_id (id):
    with open("./backend/julia/API/db.json", "r") as file :
        data = json.load(file)
    
    return data["desserts"][id]

def get_foods_id (id):
    with open("./backend/julia/API/db.json", "r") as file :
        data = json.load(file)
    
    return data["foods"][id]

def get_drinks_id (id):
    with open("./backend/julia/API/db.json", "r") as file :
        data = json.load(file)
    
    return data["drinks"][id]