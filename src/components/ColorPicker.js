/** @jsx jsx */

import React, { useEffect, useState } from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { COLORS } from "../constants";
import { ReactComponent as ColorPickerIcon } from "../images/icons/color-picker.svg";

function ColorPalette({ className, onColorClick }) {
  return (
    <div
      className={className}
      css={css`
        background-color: white;
        border-radius: 8px;
        padding: 5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        display: inline-grid;
        grid-template-columns: repeat(5, 25px);
        grid-template-rows: repeat(2, 25px);
        grid-gap: 5px;
      `}
    >
      {Object.entries(COLORS).map(([colorName, colorValue]) => (
        <button
          onClick={() => onColorClick(colorName)}
          css={css`
            background-color: ${colorValue};
            border-radius: 100%;
            cursor: pointer;
            ${colorName === "white"
              ? "border: 1px solid #999b9e;"
              : "border: none"}
          `}
        />
      ))}
    </div>
  );
}

function ColorPicker({ onColorSelect }) {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <React.Fragment>
      {showPicker && (
        <ColorPalette
          css={css`
            position: absolute;
            top: -70px;
          `}
          onColorClick={(color) => {
            setShowPicker(false);
            onColorSelect(color);
          }}
        />
      )}
      <ColorPickerIcon
        css={css`
          z-index: 2;
        `}
        onClick={() => setShowPicker(!showPicker)}
      />
    </React.Fragment>
  );
}

export default ColorPicker;
