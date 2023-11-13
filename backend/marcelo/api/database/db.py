from pathlib import Path
from tinydb import TinyDB, Query

class AppDatabaseClass():

    def __init__(self, path) -> None:
        self.db = TinyDB(path)
        self.food_table = self.db.table('foods')
        self.drink_table = self.db.table('drinks')
        self.dessert_table = self.db.table('desserts')

    def get_foods(self):
        return self.food_table.all()

    def get_drinks(self):
        return self.drink_table.all()

    def get_desserts(self):
        return self.dessert_table.all()

    def get_by_id(self, table, id):
        if table == 'foods':
            return self.food_table.get(doc_id=id)
        elif table == 'drinks':
            return self.drink_table.get(doc_id=id)
        elif table == 'desserts':
            return self.dessert_table.get(doc_id=id)

path = Path(__file__).parent / 'db.json'
AppDatabase = AppDatabaseClass(path)