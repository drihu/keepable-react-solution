/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import logoImage from "./images/logo.png"
import CSSReset from "./components/CSSReset";
import {Header, Sidebar, Layout, Main, Logo} from "./components/layout";

function App() {
  return (
    <div>
      <CSSReset />
      <Layout>
        <Logo src={logoImage} />
        <Header>Welcome to {"{keepable}"}</Header>
        <Sidebar>Sidebar</Sidebar>
        <Main>Main</Main>
      </Layout>
    </div>
  );
}

export default App;
