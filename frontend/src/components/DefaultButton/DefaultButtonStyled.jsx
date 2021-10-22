import styled from "styled-components";

//button for login, search, save, submit, create restaurant, register
export const StandardButton = styled.button`
width: 200px;
height: 57px;
border-radius: 28px;
text-align: center;
letter-spacing: 1px;
background: #e47d31;
color: #ffffff;
line-height: 14px;
border: none;
cursor: pointer;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
`;

export const RegistrationButton = styled(StandardButton)`
width: 259px;
height: 56px;
`

export const ChooseFileButton = styled(StandardButton)`
width: 216px;
height: 38px;
font-size: 16px;
`

//button for 'write review' and 'edit data'
export const SmallerButton = styled(StandardButton)`
width: 200px;
height: 39px;
font-size: 16px;
`

export const FilterButton = styled(StandardButton)`
width: 120px;
height: 40px;
font-size: 16px;
`

export const PostButton = styled(StandardButton)`
width: 120px;
height: 31px;
font-size: 16px;
`
export const LikeButton = styled.button`
    width: 124px;
    height: 33px;
    font-size: 16px;
    font-weight: 300;
    border: none;
    font-family: Helvetica;
    background-color: rgba(145,145,145,0.6);
    vertical-align: middle;
    color: #FFFFFF;
`

export const LikeButtonLeft = styled(LikeButton)`
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0px 1px 0px 0px;
`

export const LikeButtonRight = styled(LikeButton)`
    border-top-right-radius: 28px;
    border-bottom-right-radius: 28px;
    margin: 0px 0px 0px 1px;
`;

export const RestaurantInfoGenericButton = styled(StandardButton)`
width: 200px;
height: 39px;
font-size: 16px;
`;

export const SignUpButtonLeft = styled(LikeButton)`
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;
    margin: 0px 1px 0px 0px;
    background: #e47d31;
    color: #ffffff;
    width: 100px;
    height: 41px;
`

export const SignUpButtonRight = styled(LikeButton)`
    border-top-right-radius: 28px;
    border-bottom-right-radius: 28px;
    margin: 0px 0px 0px 1px;
    background: #e47d31;
    color: #ffffff;
    width: 100px;
    height: 41px;
`;