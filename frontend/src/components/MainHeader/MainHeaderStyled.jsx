import styled from "styled-components";


//Header to always show on top of website
export const MenuBar = styled.div`
  height: 71px;
  width: 100vw;
  display: flex;
  position: absolute;
  top: 0%;
  background: #FFFFFF;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 50vw;
`;

//left side of header: Luna logo
export const LunaLogo = styled.img`
  display: flex;
  position: absolute;
  height: 25px;
  left: 3%;
  cursor: pointer;
`;

//right side of header
export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50vw;
`;

//Home link
export const Home = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: #4A4A4A;
  cursor: pointer;
  :hover {
      border-bottom: black solid 2px;
      height: 100%;
  }
`;

//Search link
export const Search = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  font-size: 20px;
  color: #4A4A4A;
  :hover {
      border-bottom: black solid 2px;
      height: 100%;
  }
`;

//Profile link
export const Profile = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  font-size: 20px;
  color: #4A4A4A;
  :hover {
      border-bottom: black solid 2px;
      height: 100%;
  }
`;

//Button section: 2 buttons
export const Buttons = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;
`;

//Signup button
export const SignUp = styled.div`
  display:flex;
  cursor: pointer;
  color: #FFFFFF;
  background-color: #E47D31;
  align-items: center;
  justify-content: center;
  width:100px;
  height: 35px;
  border-bottom-left-radius: 40%;
  border-top-left-radius: 40%;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 3px;
  height:40.57px;
  border: 1px solid #FFFFFF;
`

//Login button
export const Login = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #FFFFFF;
  background-color: #E47D31;
  width:100px;
  height: 35px;
  border-bottom-right-radius: 40%;
  border-top-right-radius: 40%;
  cursor: pointer;
`;

export const LineUnderHeader = styled.img`
  width: 100vw;
  top: 71px;
  position: absolute;
`;
