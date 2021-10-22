import styled from "styled-components";

const UsersBodyContainer = styled.div`
    width: 100vw;
    box-sizing: content-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #f2f2f2;
    overflow: auto;
    #userContainer{
        margin: 20px;
        height: 200px;
        overflow: hidden;
    }
`;

export default UsersBodyContainer;