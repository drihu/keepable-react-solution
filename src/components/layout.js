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
    "logo header"
    "sidebar main";
`;

export const Logo = styled.img`
  align-self: center;
  padding-left: 30px;
  width: 138px;
  grid-area: logo;
`;

export const Header = styled.header`
  align-self: center;
  font-weight: bold;
  font-size: 14px;
  grid-area: header;
`;

const separationBorder = "solid 1px #D1D1D1";

export const Sidebar = styled.aside`
  padding-top: 10px;
  grid-area: sidebar;
  border-top: ${separationBorder};
`;

export const Main = styled.main`
  padding: 20px 0;
  grid-area: main;
  border-top: ${separationBorder};
  border-left: ${separationBorder};
`;
