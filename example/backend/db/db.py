import sqlite3

class DB:
    def __init__(self, db_path=':memory:', debug=False):
        self.db_path = db_path
        self.connection = None
        self.cursor = None
        self._init_db(debug)

    def _open_connection(self):
        if not self.connection:
            self.connection = sqlite3.connect(self.db_path)
            self.cursor = self.connection.cursor()

    def _close_connection(self):
        if self.connection:
            self.connection.close()
            self.connection, self.cursor = None, None

    def _create_tables(self):
        self.cursor.execute("""
            CREATE TABLE IF NOT EXISTS notes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                content TEXT NOT NULL,
                status TEXT NOT NULL DEFAULT 'NEW'
            )
        """)
        self.connection.commit()

    def _debug_populate(self):
        self.cursor.executemany(
            "INSERT INTO notes (content, status) VALUES (?, ?)",
            [("Hello world", "NEW"), ("Another note", "DONE")]
        )
        self.connection.commit()

    def _init_db(self, debug):
        self._open_connection()
        self._create_tables()
        if debug:
            self._debug_populate()
        self._close_connection()

    def fetch_all(self, query, params=None):
        try:
            self._open_connection()
            self.cursor.execute(query, params or ())
            return self.cursor.fetchall()
        finally:
            self._close_connection()

    def execute(self, query, params=None):
        try:
            self._open_connection()
            self.cursor.execute(query, params or ())
            self.connection.commit()
            return self.cursor.lastrowid
        except sqlite3.Error as e:
            self.connection.rollback()
            return f"Error: {e}"
        finally:
            self._close_connection()
