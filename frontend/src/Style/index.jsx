import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-size: 16px;
    }
`;

export const themeDefault = {
  //font sizes
  fontTiny: "10px",
  fontSmall: "14px",
  fontDefault: "16px",
  fontBig: "22px",
  fontLarge: "24px",
  fontExtraLarge: "40px",

  //border radius
  borderRadiusDefault: "28px",
};
