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

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes().then((notes) => setNotes(notes));
  }, []);

  return (
    <div>
      <CSSReset />
      <Layout>
        <Logo src={logoImage} />
        <Header>Welcome to {"{keepable}"}</Header>
        <Sidebar>
          <SidebarItem
            isSelected={true}
            icon={<SidebarTrashIcon />}
            text="Notes"
          />
          <SidebarItem icon={<CodeIcon />} text="Trash" />
        </Sidebar>
        <Main>
          <NoteForm css={{ width: 600, margin: "0 auto 60px auto" }} />
          <NotesContainer>
            {notes.map((note) => (
              <Note
                key={note.id}
                title={note.title}
                color={note.color}
                body={note.body}
              />
            ))}
          </NotesContainer>
        </Main>
      </Layout>
    </div>
  );
}

export default App;
