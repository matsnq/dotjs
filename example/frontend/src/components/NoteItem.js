import { defineComponent, h, hFragment } from "frontend-framework";

export default defineComponent({
    props: {
        key: null,
        note: {},
        onUpdate: () => {},
        onDelete: () => {},
        onReuse: () => {},
    },

    state() {
        return {
            elementStatus: "",
            error: null,
        }
    },

    handleDone() {
        this.props.note.status = "DONE"
        this.emit("done", this.props.note)
        this.updateState({ elementStatus: "completed" })
    },

    handleUpdate() {
        this.updateState({ elementStatus: "update"});
        this.props.onUpdate();
    },

    handleSave(e) {
        const note = this.props.note;
        const newContent = e.target.noteInput.value;
        if (newContent.length < 1) {
            this.updateState({ error: "Note is too short" });
            return;
        }

        const updatedNote = note.content !== newContent ? (note.content = newContent, note) : null;
        this.props.onUpdate(updatedNote);
        this.resetElStatus();
    },

    handleDiscard() {
        this.props.onUpdate();
        this.resetElStatus();
    },

    resetElStatus() {
        this.updateState({ elementStatus: "", error: null });
    },

    render() {
        const { note, onDelete, onReuse } = this.props;
        const { elementStatus, error } = this.state;

        // Update screen
        if (elementStatus === "update") {
            return h("div", { id: note.id, class: `note-item ${elementStatus}` },[
                h("form", { on: { submit: (e) => this.handleSave(e) }}, [
                    h("input", {
                        id: "noteInput",
                        type: "text",
                        value: note.content,
                        autofocus: true,
                    }),
                    h("button", {
                        class: "done save",
                        type: "submit",
                    }, ["✅"]),
                    h("button", {
                        class: "remove",
                        on: { click: () => this.handleDiscard() }
                    }, ["❌"]),
                    error && h("h3", { class: "error" }, [error]),
                ])
            ])
        }

        // Means that History page is loaded
        if (onReuse) {
            return h("div", { id: note.id, class: `note-item ${elementStatus}` },[
            h("li", { class: "note" }, [note.content]),
            h("div", { class: "note-actions" }, [
                h("button", {
                    class: "reuse",
                    on: { click: () => onReuse(note) },
                }, ["♻️"]),
                h("button", {
                    class: "remove",
                    on: { click: () => onDelete(note) }
                },["🗑️"])
            ])
            
        ])
        }

        return h("div", { id: note.id, class: `note-item ${elementStatus}` },[
            h("li", { class: "note" }, [note.content]),
            h("div", { class: "note-actions" }, [
                h("button", {
                class: "done",
                    on: { click: () => this.handleDone() }
                }, [""]),
                h("button", {
                    class: "edit",
                    on: { click: () => this.handleUpdate() },
                    disabled: elementStatus === "completed",
                }, ["✏️"]),
                h("button", {
                    class: "remove",
                    on: { click: () => onDelete(note) }
                },["🗑️"])
            ])
            
        ])
    }
})