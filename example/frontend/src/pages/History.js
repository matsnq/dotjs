import { defineComponent, h } from "frontend-framework";
import NoteList from "../components/NoteList";
import { api } from "../api";
import { router } from "../router";
import { fetchNotes, deleteNote, filterList } from "./Notes";

export default defineComponent({

    state() {
        return {
            notes: [],
            isLoading: true,
        }
    },

    async onMounted() {
        return this.updateState({ notes: await fetchNotes("DONE"), isLoading: false });
    },

    async handleReuse(note) {
        try {
            note.status = "NEW";
            api.updateNote(note);
            this.updateState({ notes: filterList(this.state.notes, note) })
        } catch (err) {
            console.error(err, note)
        }
    },

    async handleDelete(note) {
        await deleteNote(note);
        this.updateState({ notes: filterList(this.state.notes, note)});
    },

    render() {
        const { notes, isLoading } = this.state;

        if (isLoading) {
            return h("h1", {}, ["Loading..."]);
        }

        return h("div", { class: "history-container "}, [
            h("h1", {}, ["History"]),
            h("button", { 
                class: "navigate-btn input",
                    on: { click: () => router.navigateTo("/") }
            }, ["Notes"]),

            notes.length === 0 
                ? h("h1", {}, ["No history"])
                : h(NoteList, { 
                    notes: notes,
                    onReuse: (note) => this.handleReuse(note),
                    onDelete: (note) => this.handleDelete(note),
                  })
        ]) 
    }
})