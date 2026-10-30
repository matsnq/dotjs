import { defineComponent, h } from "frontend-framework";

export default defineComponent({
    props: {
        onAdd: () => {},
        isAddingDisabled: false,
    },

    handleAddNote(e) {
        const content = e.target.noteInput.value.trim();
        if (content.length < 1) return;

        const note = {
            content: content,
            status: "NEW",
        };
        this.props.onAdd(note);
        e.target.noteInput.value = "";
    },
    
    render() {
        const { isAddingDisabled } = this.props;

        return h("form", { on: { submit: (e) => this.handleAddNote(e)}}, [
            h("input", {
                id: "noteInput",
                class: isAddingDisabled ? "disabled" : "",
                type: "text",
                placeholder: "Add a new note...",
                disabled: isAddingDisabled,
                autofocus: true,
            }),
            h("button", {
                class: `input ${isAddingDisabled ? "disabled" : ""}`,
                type: "submit",
                disabled: isAddingDisabled,
                on: {
                    submit: (e) => this.handleAddNote(e),
                }
            }, ["Add"]),
        ])
    }
})