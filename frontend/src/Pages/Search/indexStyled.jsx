import styled from "styled-components";

const SearchContainer = styled.div`
    width: 100vw; 
    height: 100vh;
    display: flex; 
    flex-direction: column; 
    overflow: hidden; 
    box-sizing: content-box;
    #main_header {
      height: 71px; 
      width: 100%; 
      overflow: hidden;
    }
    #searchHeader{
      height: 50px; 
      width: 100%; 
      overflow: hidden;
    }
    #navigationSubheader{
      height: 56px; 
      width: 100%; 
    }
    #separator{
      width:100%;
      height: 3px;
    }
    #restaurant {
      height: calc(100vh - 71px - 50px - 58px - 3px - 92px); 
      width: 100%; 
      overflow-Y: auto; 
      overflow-X: hidden;
      box-sizing: content-box;
    }
    #reviews {
      height: calc(100vh - 71px - 50px - 58px - 3px - 92px); 
      width: 100%; 
      overflow-Y: auto; 
      overflow-X: hidden;
      box-sizing: content-box;
    }
    #users {
      height: calc(100vh - 71px - 50px - 58px - 3px - 92px); 
      width: 100%; 
      overflow-Y: auto; 
      overflow-X: hidden;
      box-sizing: content-box;
    }
    #footer {
      height: 92px; 
      width: 100%; 
      overflow: hidden;
    }
`;

export default SearchContainer;