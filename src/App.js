/** @jsx jsx */

import React, { useEffect, useState } from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { ReactComponent as CodeIcon } from "./images/icons/code.svg";
import { ReactComponent as TrashIcon } from "./images/icons/trash.svg";
import logoImage from "./images/logo.png";
import CSSReset from "./components/CSSReset";
import { Header, Sidebar, Layout, Main, Logo } from "./components/layout";
import SidebarItem from "./components/SidebarItem";
import Note from "./components/Note";
import NoteForm from "./components/NoteForm";

const SidebarTrashIcon = styled(TrashIcon)`
  path {
    fill: white;
  }
`;

const NotesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 260px);
  justify-content: center;
  grid-gap: 20px;
`;

async function getNotes() {
  const response = await fetch("http://localhost:3000/notes");
  const data = await response.json();
  return data;
}

async function createNote(note) {
  const response = await fetch("http://localhost:3000/notes", {
    method: "POST",
    body: JSON.stringify(note),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

async function deleteNote(id) {
  await fetch(`http://localhost:3000/notes/${id}`, {
    method: "DELETE",
  });
}

function App() {
  const [notes, setNotes] = useState([]);
  const [trashSelected, setTrashSelected] = useState(false);

  useEffect(() => {
    getNotes().then((notes) => setNotes(notes));
  }, []);

  async function handleNoteSubmit(title, body) {
    const newNote = await createNote({ title, body, color: "white" });
    const notesCopy = notes.slice();
    notesCopy.unshift(newNote);
    setNotes(notesCopy);
  }

  async function handleDelete(deletedNote) {
    await deleteNote(deletedNote.id);

    let newNotes;
    if (deletedNote.deleted_at) {
      newNotes = notes.filter((note) => note.id !== deletedNote.id);
    } else {
      newNotes = notes.map((note) => {
        if (deletedNote.id === note.id) {
          return {
            ...note,
            deleted_at: true,
          };
        } else {
          return note;
        }
      });
    }

    setNotes(newNotes);
  }

  const filteredNotes = notes.filter((note) =>
    trashSelected ? note.deleted_at : !note.deleted_at
  );

  return (
    <div>
      <CSSReset />
      <Layout>
        <Logo src={logoImage} />
        <Header>Welcome to {"{keepable}"}</Header>
        <Sidebar>
          <SidebarItem
            isSelected={!trashSelected}
            icon={<SidebarTrashIcon />}
            text="Notes"
            onClick={() => setTrashSelected(false)}
          />
          <SidebarItem
            onClick={() => setTrashSelected(true)}
            isSelected={trashSelected}
            icon={<CodeIcon />}
            text="Trash"
          />
        </Sidebar>
        <Main>
          {!trashSelected && (
            <NoteForm
              onSubmit={handleNoteSubmit}
              css={{ width: 600, margin: "0 auto 60px auto" }}
            />
          )}
          <NotesContainer>
            {filteredNotes.map((note) => (
              <Note
                key={note.id}
                title={note.title}
                color={note.color}
                body={note.body}
                isDeleted={!!note.deleted_at}
                onDelete={() => handleDelete(note)}
              />
            ))}
          </NotesContainer>
        </Main>
      </Layout>
    </div>
  );
}

export default App;
