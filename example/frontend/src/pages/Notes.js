import { defineComponent, h } from "frontend-framework";
import { api } from "../api";
import AddNote from "../components/AddNote";
import NoteList from "../components/NoteList";
import { router } from "../router";

export default defineComponent({
    state() {
        return {
            notes: [],
            isLoading: true,
            isAddingDisabled: false,
        }
    },

    async onMounted() {
        return this.updateState({ notes: await fetchNotes("NEW"), isLoading: false });
    },

    async handleAdd(note) {
        try {
            await api.createNote(note);
            this.updateState({ notes: await fetchNotes("NEW") });
        } catch (err) {
            console.error(err, note);
        }
    },

    async handleUpdate(note) {
        if (!note) {
            this.updateState({ isAddingDisabled: !this.state.isAddingDisabled });
            return;
        }
        try {
            await api.updateNote(note);
            this.updateState({ isAddingDisabled: !this.state.isAddingDisabled });
            this.updateState();
        } catch (err) {
            console.error(err, note)
        }
    },

    async handleDelete(note) {
        await deleteNote(note);
        this.updateState({ notes: filterList(this.state.notes, note)})
    },

    async handleDone(note) {
        try {
            await api.updateNote(note);
            setTimeout(() => {
                if (this.isMounted) {
                    this.updateState({ notes: filterList(this.state.notes, note)})
                }
            }, 1000)
        } catch (err) {
            console.error(err, note)
        }
    },

    render() {
        const { notes, isLoading, isAddingDisabled } = this.state;
        
        if (isLoading) {
            return h("h1", {}, ["Loading..."]);
        }

        return h("div", { class: "notes-container" }, [
            h("h1", {}, ["Notes"]),
            h("button", { 
                class: "navigate-btn input",
                on: {
                    click: () => router.navigateTo("/history")
                }
            }, ["History"]),
            h(AddNote, {
                onAdd: (note) => this.handleAdd(note),
                isAddingDisabled: isAddingDisabled,
            }),

            notes.length === 0 
                ? h("h1", {}, ["No notes"])
                : h(NoteList, { 
                    notes: notes,
                    on: {
                        done: (note) => this.handleDone(note),
                    },
                    onUpdate: (note) => this.handleUpdate(note),
                    onDelete: (note) => this.handleDelete(note),
                    }
                )
        ]) 
    },
});

export async function fetchNotes(status) {
    try {
        return await api.getNotes(status);
    } catch (err) {
        console.error("Failed fetching notes:", err);
    }
}

export async function deleteNote(note) {
    try {
        await api.deleteNote(note.id);
    } catch (err) {
        console.error(err, note)
    }
}

export function filterList(notes, note) {
    return notes.filter(item => item !== note);
}