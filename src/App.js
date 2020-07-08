/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { ReactComponent as CodeIcon } from "./images/icons/code.svg";
import { ReactComponent as TrashIcon } from "./images/icons/trash.svg";
import logoImage from "./images/logo.png";
import CSSReset from "./components/CSSReset";
import { Header, Sidebar, Layout, Main, Logo } from "./components/layout";
import SidebarItem from "./components/SidebarItem";

const SidebarTrashIcon = styled(TrashIcon)`
  path {
    fill: white;
  }
`;

function App() {
  return (
    <div>
      <CSSReset />
      <Layout>
        <Logo src={logoImage} />
        <Header>Welcome to {"{keepable}"}</Header>
        <Sidebar>
          <SidebarItem isSelected={true} icon={<SidebarTrashIcon />} text="Notes" />
          <SidebarItem icon={<CodeIcon />} text="Trash" />
        </Sidebar>
        <Main>Main</Main>
      </Layout>
    </div>
  );
}

export default App;
