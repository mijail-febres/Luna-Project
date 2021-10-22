import styled from "styled-components";

const UserPreviewContainer = styled.div`
    width: 270px; 
    height: 192px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: #E47D31 5px solid;
    font-family: Helvetica;
    font-weight: 700;
    background-color: #FFFFFF;

    #header{
        width: 100%;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        #picture{
            width: 25%;
            height: 100%;
            display: flex;
            background-image: ${({image}) =>`url(${image})`};
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        #userInfo{
            width: 75%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 0px 0px 0px 10px;
            box-sizing: content-box;
            #name {
                color: #E47D31;
                font-size: 20px;
            }
            #reviews{
                color: #4C4C4C;
                font-size: 14px;
            }
        }
    }
    #body{
        width: 100%;
        height: 117px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        box-sizing: content-box;
        font-family: Helvetica;
        font-weight: 700;
        font-size: 14px;
        color: #4C4C4C;
        #description{
            width: 100%;
            height: 80px;
            font-family: Helvetica;
            font-weight: 700;
            font-size: 14px;
            color: #4C4C4C;
            #link {
                color: #E47D31;
                text-decoration: none;
                align-content: flex-end;
                text-align: right;
                align-self: flex-end;
                :hover{
                    cursor: pointer;
                }
            }
        }
    }
        
`

export default UserPreviewContainer
