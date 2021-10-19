import styled from "styled-components";
import {StandardButton} from "../DefaultButton/DefaultButtonStyled"

export const Form = styled.div`
    width: 100vw;
    z-index: 0;
    display:flex;
    flex-direction: column;
    align-items: center;
    position:absolute;
    top: 71px;
    bottom:91px;
    background: #F2F2F2;
`;

export const FormTitle = styled.div`
    display:flex;
    position: absolute;
    top: 3%;
    font-weight: bold;
    color: #4C4C4C;
    font-size: ${props => props.theme.fontLarge};
    margin-bottom: 10px;
`;

export const UnderLineTitle = styled.img`
    display:flex;
    position: absolute;
    top: 9%;
    width: 13.89%;
  //position: relative;
    border: 2px solid #E47D31;
`;

export const InputFields = styled.div`
    display:flex;
    position: absolute;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    top: 11%;
    width:100vw;
    height: 60vh;
`;

export const Box1 = styled.div`
    display:flex;
    position:relative;
    flex-direction: column;
    height: 22%;
    width: 75%;
`;

export const Title = styled.div`
    display:flex;
    height:20%;
    color: #4C4C4C;
    //import font-family Karla later
    font-weight: bold;
    font-size: ${props => props.theme.fontMenu};
`;

export const Tags = styled.div`
    display:flex;
    height:25%;
    color: #979797;
    font-weight: bold;
    font-size: ${props => props.theme.fontMenu};
`;

export const TagColumn1 = styled.div`
    width:30%;
    position: absolute;
    left: 0%;
`
export const TagColumn2 = styled(TagColumn1)`
    left: 35%;
`
export const TagColumn3 = styled(TagColumn1)`
    left: 70%;
`

export const Inputs = styled.div`
    display:flex;
    align-items:center;
    height:45%;
`;

export const InputColumn1 = styled.input`
    width: 30%;
    height: 35%;
    position: absolute;
    left: 0%;
    border:none;
    background: white;
`
export const InputColumn2 = styled(InputColumn1)`
    left: 35%;
`
export const InputColumn3 = styled(InputColumn1)`
    left: 70%;
`

export const FieldReq = styled.div`
    display:flex;
    height:10%;
    color: #B00000;
    font-size: ${props => props.theme.fontTiny};
`;

export const FieldReqColumn1 = styled.div`
    width:30%;
    position: absolute;
    left: 0%;
`
export const FieldReqColumn2 = styled(FieldReqColumn1)`
    left: 35%;
`
export const FieldReqColumn3 = styled(FieldReqColumn1)`
    left: 70%;
`

export const Box2 = styled(Box1)`
`;

export const Box3 = styled(Box1)` 
`;

export const Box4 = styled(Box1)` 
`;

export const SelectPrice = styled.div`
    width:30%;
    position:absolute;
    left:35%;
`

export const ImageButton = styled.button`
  display:flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width:30%;
  left:70%;
  border: 2px solid #E47D31; //add button here later
`;

export const SubmitButton = styled(StandardButton)`
  display:flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2%;
`;