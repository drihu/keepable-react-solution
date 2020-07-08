import styled from "@emotion/styled";

export const Layout = styled.div`
  background-color: #000000;
  min-height: 100vh;
  color: white;
  font-family: "Roboto", sans-serif;
  display: grid;
  grid-template-columns: 280px auto;
  grid-template-rows: 70px auto;
  grid-template-areas:
    "header header"
    "sidebar main";
`;

export const Header = styled.header`
  grid-area: header;
`;

export const Sidebar = styled.aside`
  grid-area: sidebar;
`;

export const Main = styled.main`
  grid-area: main;
`;
