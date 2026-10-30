import json

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from util import notes

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

notes = notes.Notes()


@app.get("/notes")
def get_notes(status: str = None):
    return notes.get_notes(status)


@app.post("/notes")
def create_note(content: str, status: str = 'NEW'):
    return notes.add_note(content, status)


@app.put("/notes/{note_id}")
def update_note(note_id: int, content: str = None, status: str = None):
    if status and content:
        return notes.update_note(note_id, content, status)
    else:
        return {"error": "Please provide both content and status to update the note."}


@app.delete("/notes/{note_id}")
def delete_note(note_id: int):
    return notes.delete_note(note_id)
