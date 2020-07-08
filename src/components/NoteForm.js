/** @jsx jsx */

import React, { useEffect, useState } from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

import { ReactComponent as ColorPickerIcon } from "../images/icons/color-picker.svg";
import { NoteContainer, NoteBody, NoteTitle, NoteIcon } from "./Note";

const NoteFormContainer = styled(NoteContainer)`
  min-height: auto;
`;

const inputStyles = `border: none;
  &:focus {
    outline: none;
  }`;

const NoteFormTitleInput = styled(NoteTitle)`
  border: none;
  &:focus {
    outline: none;
  }
`;

const NoteFormBodyInput = styled(NoteBody)`
  border: none;
  &:focus {
    outline: none;
  }
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

function NoteForm({ className }) {
  return (
    <NoteFormContainer as="form" className={className} color="white">
      <NoteFormTitleInput as="input" placeholder="Title" />
      <NoteFormBodyInput as="textarea" placeholder="Take a note..." />
      <FormActions>
        <NoteIcon>
          <ColorPickerIcon />
        </NoteIcon>
        <FormSubmit>Keep it!</FormSubmit>
      </FormActions>
    </NoteFormContainer>
  );
}

export default NoteForm;
