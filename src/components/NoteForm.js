/** @jsx jsx */

import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

import { NoteContainer, NoteBody, NoteTitle } from "./Note";
import ColorPicker from "./ColorPicker";

const NoteFormContainer = styled(NoteContainer)`
  min-height: auto;
`;

const inputStyles = css`
  background: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`;

const NoteFormTitleInput = styled(NoteTitle)`
  ${inputStyles}
`;

const NoteFormBodyInput = styled(NoteBody)`
  ${inputStyles}
`;

const FormActions = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const FormSubmit = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

function NoteForm({ className, onSubmit }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [color, setColor] = useState("white");

  function createEventHandler(setter) {
    return (event) => setter(event.target.value);
  }

  return (
    <NoteFormContainer
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(title, body, color);
        setTitle("");
        setBody("");
        setColor("white");
      }}
      as="form"
      className={className}
      color={color}
    >
      <NoteFormTitleInput
        value={title}
        onChange={createEventHandler(setTitle)}
        as="input"
        placeholder="Title"
      />
      <NoteFormBodyInput
        value={body}
        onChange={createEventHandler(setBody)}
        as="textarea"
        placeholder="Take a note..."
      />
      <FormActions>
        <ColorPicker onColorSelect={(color) => setColor(color)} />
        <FormSubmit>Keep it!</FormSubmit>
      </FormActions>
    </NoteFormContainer>
  );
}

export default NoteForm;
