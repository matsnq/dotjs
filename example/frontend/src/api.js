const BASE_URL = "http://localhost:8000";

async function request(method, path, data) {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
    };

    if (data) {
        path = path + "?" + new URLSearchParams(data).toString();
    }

    const response = await fetch(`${BASE_URL}${path}`, options);

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Request failed ${method} ${path} ${response.status}`);
    }

    return await response.json();
}

export const api = {
    getNotes: async (status) => {
        const response = await request("GET", `/notes?status=${status}`);
        const mapped = response.map(([id, content, status]) => ({ id, content, status }));
        return mapped;
    },
    createNote: (note) => request("POST", "/notes", note),
    updateNote: (note) => request("PUT", `/notes/${note.id}`, note),
    deleteNote: (id) => request("DELETE", `/notes/${id}`)
}