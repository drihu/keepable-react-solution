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

export const UserFormContainer = styled.div`
  border-top: 1px solid #d1d1d1;
  grid-area: 2 / 1 / 3 / 3;
`;

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 5px 5px 15px rgba(153, 155, 158, 0.85);
  border-radius: 8px;
`;

export const UserFormTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #FFFFFF;
`;

export const UserFormGroup = styled.div`
  margin-bottom: 15px;
`;

export const UserFormLabel = styled.label`
  display: block;
  padding: 5px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #000000;
`;

export const UserFormInput = styled.input`
  display: block;
  margin-bottom: 5px;
  padding: 5px;
  border: 0;
  outline: 0;
  font-weight: normal;
  font-family: "Roboto";
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: #7B8493;
`;

export const UserFormSubmit = styled.button`
  margin-left: auto;
  background: transparent;
  border: 0;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.25px;
  color: #000000;
`;
