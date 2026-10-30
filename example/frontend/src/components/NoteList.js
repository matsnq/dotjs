import { defineComponent, h } from "frontend-framework";
import NoteItem from "./NoteItem";

export default defineComponent({
    props: {
        notes: [],
        onUpdate: () => {},
        onDelete: () => {},    
        onReuse: () => {},
    }, 

    render() {
        const { notes, onUpdate, onDelete, onReuse } = this.props;

        return h("ul", { class: "note-list" }, [
            ...notes.map((note) =>
                h(NoteItem, { 
                    on: {
                        done: (note) => this.emit("done", note),
                    },
                    key: note.id,
                    note: note,
                    onUpdate: onUpdate,
                    onDelete: onDelete,
                    onReuse: onReuse,
                }
            )
            )
        ])
    }
})