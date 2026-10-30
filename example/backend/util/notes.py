import os

import dotenv
from db import db

dotenv.load_dotenv()


class Notes:
    def __init__(self, debug=False):
        db_path = os.getenv("DB_PATH")
        self.database = db.DB(db_path, debug)

    def get_notes(self, status):
        query = "SELECT * FROM notes WHERE status = ?" if status else "SELECT * FROM notes"
        print(query)
        return self.database.execute_query(query, (status,)) if status else self.database.execute_query(query)

    def add_note(self, content, status='NEW'):  # only change status for debug, otherwise do not specify it
        query = "INSERT INTO notes (content, status) VALUES (?, ?)"
        return self.database.execute_query(query, (content, status))

    def update_note(self, note_id, content, status):
        query = "UPDATE notes SET content = ?, status = ? WHERE id = ?"
        return self.database.execute_query(query, (content, status, note_id))

    def delete_note(self, note_id):
        query = "DELETE FROM notes WHERE id = ?"
        return self.database.execute_query(query, (note_id,))
