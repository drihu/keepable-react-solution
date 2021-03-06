
import React  from "react";
import { ReactComponent as TrashIcon } from "../images/icons/trash.svg";
import { ReactComponent as RestoreIcon } from "../images/icons/restore.svg";
import styled from "@emotion/styled";
import { COLORS } from "../constants";
import ColorPicker from "./ColorPicker";

export const NoteContainer = styled.div`
  box-shadow: 5px 5px 15px rgba(153, 155, 158, 0.85);
  border-radius: 8px;
  padding: 20px 20px 0 20px;
  color: black;
  min-height: 260px;
  display: flex;
  flex-direction: column;

  background: ${(props) => COLORS[props.color]};
`;

export const NoteContent = styled.div({ flexGrow: 1 });

export const NoteTitle = styled.h3`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const NoteBody = styled.p`
  font-size: 18px;
`;

const NoteIcons = styled.footer`
  display: flex;
  padding-bottom: 2px;
`;

export const NoteIcon = styled.div`
  height: 36px;
  width: 36px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 100px;
  margin-right: 9px;
  cursor: pointer;
`;

function Note({
  title,
  body,
  color,
  isDeleted,
  onDelete,
  onRestore,
  onColorChange,
}) {
  return (
    <NoteContainer color={color}>
      <NoteContent>
        <NoteTitle>{title}</NoteTitle>
        <NoteBody>{body}</NoteBody>
      </NoteContent>
      <NoteIcons>
        {isDeleted ? (
          <NoteIcon onClick={onDelete}>
            <TrashIcon />
          </NoteIcon>
        ) : (
          <ColorPicker onColorSelect={onColorChange} />
        )}

        {isDeleted ? (
          <NoteIcon onClick={onRestore}>
            <RestoreIcon />
          </NoteIcon>
        ) : (
          <NoteIcon onClick={onDelete}>
            <TrashIcon />
          </NoteIcon>
        )}
      </NoteIcons>
    </NoteContainer>
  );
}

export default Note;
