export async function getNotes(options) {
  const response = await fetch("http://localhost:3000/notes", options);
  return await response.json();
}

export async function createNote(note) {
  const response = await fetch("http://localhost:3000/notes", {
    method: "POST",
    body: JSON.stringify(note),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export async function deleteNote(id) {
  await fetch(`http://localhost:3000/notes/${id}`, {
    method: "DELETE",
  });
}

export async function patchNote(id, updates) {
  const response = await fetch(`http://localhost:3000/notes/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updates),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
