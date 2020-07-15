/** @jsx jsx */

import React from "react";
import {css, jsx} from "@emotion/core";
import { Link } from 'react-router-dom'

function SidebarItem({ to, icon, text, isSelected, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      css={css`
        height: 48px;
        display: flex;
        align-items: center;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        margin-bottom: 10px;
        color: inherit;
        text-decoration: none;
        cursor: pointer;
        ${isSelected && `background-color: #999B9E`}
      `}
    >
      <div
        css={css`
          height: 26px;
          width: 26px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 14px;
          margin-left: 20px;
        `}
      >
        {icon}
      </div>
      {text}
    </Link>
  );
}

export default SidebarItem;
