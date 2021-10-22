import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-size: 16px;
    }
`;

export const themeDefault = {
  linerGradientColor:
    "linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);",
  //font sizes
  fontTiny: "10px",
  fontSmall: "14px",
  fontDefault: "16px",
  fontMenu: "20px",
  fontLarge: "24px",
  fontExtraLarge: "40px",

  //border radius
  borderRadiusDefault: "28px",

  fontFamilyHeader: "Helvetica",
};
