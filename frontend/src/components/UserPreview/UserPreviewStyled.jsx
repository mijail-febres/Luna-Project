import styled from "styled-components";
import user_picture from "../../assets/userPicture.png"

const UserPreviewContainer = styled.div`
    width: 270px; 
    height: 410px;
    box-sizing: content-box;
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
            background-image: ${`url(${user_picture})`};
            background-repeat: no-repeat;
            background-size: cover;
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
        height: 146px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        box-sizing: content-box;
        #restaurant_name {
            width: 100%;
            height: 43.5px;
            color: #E47D31;
            font-size: 20px;
        }
        #review {
            width: 100%;
            max-width: 98%;
            height: 80px;
            color: #4C4C4C;
            font-size: 14px;
            font-weight: 700;
            resize: none;
            overflow: hidden;
            border: none;
            background-color: white;
        }
        #read_more {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: baseline;

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
    #footer {
        width: 100%;
        height: 189px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

    }
        
`

export default UserPreviewContainer