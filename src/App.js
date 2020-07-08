/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import CSSReset from "./components/CSSReset";
import { Header, Sidebar, Layout, Main } from "./components/layout";

function App() {
  return (
    <div>
      <CSSReset />
      <Layout>
        <Header>Header</Header>
        <Sidebar>Sidebar</Sidebar>
        <Main>Main</Main>
      </Layout>
    </div>
  );
}

export default App;
