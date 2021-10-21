import styled from "styled-components";

const NavigationSubheaderContainer = styled.div`
    height: 56px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 20px;
    font-weight: 700;
    font-family: Helvetica;
    color: #4C4C4C;
    box-sizing: content-box;
    #navigator{
        width: 630px;
        height: 47px;
        display: flex;
        .label {
            height: 100%;
            width: 210px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: content-box;
            :hover {
                cursor: pointer;
            }
        }
    }    
`
export default NavigationSubheaderContainer;