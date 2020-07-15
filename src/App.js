/** @jsx jsx */

import React, { useEffect, useState } from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Route, Redirect } from "react-router-dom";
import { ReactComponent as CodeIcon } from "./images/icons/code.svg";
import { ReactComponent as TrashIcon } from "./images/icons/trash.svg";
import logoImage from "./images/logo.png";
import CSSReset from "./components/CSSReset";
import { Header, Sidebar, Layout, Main, Logo } from "./components/layout";
import SidebarItem from "./components/SidebarItem";
import Note from "./components/Note";
import NoteForm from "./components/NoteForm";
import { getNotes, deleteNote, createNote, patchNote } from "./api";
import { useUser } from './contexts/user'
import Login from "./components/Login";
import SignUp from "./components/SignUp";

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

function App() {
  const [notes, setNotes] = useState([]);
  const [trashSelected, setTrashSelected] = useState(false);
  const { user, setUser } = useUser();

  useEffect(() => {
    if (!user) return;

    getNotes({
      headers: { Authorization: `Token token="${user.token}"` },
    })
      .then((notes) => setNotes(notes));
  }, [user]);

  function updateNote(id, updates) {
    setNotes(
      notes.map((note) => {
        if (id === note.id) {
          return {
            ...note,
            ...updates,
          };
        } else {
          return note;
        }
      })
    );
  }

  async function handleNoteSubmit(title, body, color) {
    const newNote = await createNote({ title, body, color });
    setNotes([newNote, ...notes]);
  }

  async function handleDelete(deletedNote) {
    await deleteNote(deletedNote.id);

    if (deletedNote.deleted_at) {
      setNotes(notes.filter((note) => note.id !== deletedNote.id));
    } else {
      updateNote(deletedNote.id, { deleted_at: true });
    }
  }

  async function handleRestore(id) {
    await patchNote(id, { deleted_at: null });
    updateNote(id, { deleted_at: null });
  }

  async function handleColorChange(id, color) {
    await patchNote(id, { color });
    updateNote(id, { color });
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

        <Route path="/login" component={() => <Login />} />
        <Route path="/sign-up" component={() => <SignUp />} />

        <Route path={["/notes", "/trash"]}>
          {!user && <Redirect to="/login" />}
          <Sidebar>
            <SidebarItem
              to="/notes"
              isSelected={!trashSelected}
              icon={<SidebarTrashIcon />}
              text="Notes"
              onClick={() => setTrashSelected(false)}
            />
            <SidebarItem
              to="/trash"
              onClick={() => setTrashSelected(true)}
              isSelected={trashSelected}
              icon={<CodeIcon />}
              text="Trash"
            />
            <SidebarItem
              to="/login"
              isSelected={trashSelected}
              icon={<CodeIcon />}
              text="Login"
            />
            <SidebarItem
              to="/sign-up"
              isSelected={trashSelected}
              icon={<CodeIcon />}
              text="Sign Up"
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
                  onRestore={() => handleRestore(note.id)}
                  onColorChange={(color) => handleColorChange(note.id, color)}
                />
              ))}
            </NotesContainer>
          </Main>
        </Route>
      </Layout>
    </div>
  );
}

export default App;
