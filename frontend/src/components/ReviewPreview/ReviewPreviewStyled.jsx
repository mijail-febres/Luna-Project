import styled from "styled-components";

const ReviewPreviewContainer = styled.div`
    width: 270px; 
    height: 410px;
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
        #reviewInfo{
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
        align-items: center; 
        box-sizing: border-box;
        padding: 8px 8px 0px 8px;
        #restaurant_name {
            width: 100%;
            height: 35px;
            color: #E47D31;
            font-size: 20px;
        }
        #review {
            width: 100%;
            height: 80px;
            color: #4C4C4C;
            font-size: 14px;
            font-weight: 700;
            resize: none;
            overflow: hidden;
            background-color: white;

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
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        #buttons_footer{
            width: 100%;
            height: 66px;
            display: flex;
            justify-content: center;
            align-items: center;

            #icon_like {
                height: 65%;
                padding: 0px 10px 0px 0px;
            }
        }
        #latest_comments {
            width: 100%;
            height: 122px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            #label_comments {
                font-weight: 300;
                font-size: 20px;
            }
            .comments{
                width: 100%;
                height: 36px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                .comment_author {
                    color: #E47D31;
                    font-family: Helvetica;
                    font-weight: 700;
                    font-size: 14px;
                }
                .comment_content {
                    color: #000000;
                    font-family: Helvetica;
                    font-weight: 300;
                    font-size: 14px;
                }
            }
        }
    }
        
`

export default ReviewPreviewContainer