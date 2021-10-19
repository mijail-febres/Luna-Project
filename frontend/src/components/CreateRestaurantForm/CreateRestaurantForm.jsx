import React from "react";
import {
    Form,
    FormTitle,
    UnderLineTitle,
    InputFields,
    Box1,
    Title,
    Tags,
    TagColumn1,
    TagColumn2,
    TagColumn3,
    Inputs,
    InputColumn1,
    InputColumn2,
    InputColumn3,
    FieldReq,
    FieldReqColumn1,
    FieldReqColumn2,
    FieldReqColumn3,
    Box2,
    Box3,
    Box4,
    SelectPrice,
    ImageButton,
    SubmitButton
} from "../CreateRestaurantForm/CreateRestaurantFormStyled";

// import { Link } from "react-router-dom";

const NewRestoForm = () => {

  return (
    <Form>
        <FormTitle>CREATE NEW RESTAURANT</FormTitle>
        <UnderLineTitle/>
        <InputFields>
            <Box1>
                <Title>Basic</Title>
                <Tags>
                    <TagColumn1>
                        <p>Name *</p>
                    </TagColumn1>
                    <TagColumn2>
                        <p>Category *</p>
                    </TagColumn2>
                    <TagColumn3>
                        <p>Country *</p>
                    </TagColumn3>
                </Tags>    
                <Inputs>
                    <InputColumn1/>
                    <InputColumn2/>
                    <InputColumn3/>
                </Inputs>
                <FieldReq>
                    <FieldReqColumn1>
                        <p>This field is required</p>
                    </FieldReqColumn1>
                    <FieldReqColumn2>
                        <p>This field is required</p>
                    </FieldReqColumn2>
                    <FieldReqColumn3>
                        <p>This field is required</p>
                    </FieldReqColumn3>
                </FieldReq>
            </Box1>
            <Box2>
                <Title>Address</Title>
                <Tags>
                    <TagColumn1>
                            <p>Street *</p>
                        </TagColumn1>
                        <TagColumn2>
                            <p>City *</p>
                        </TagColumn2>
                        <TagColumn3>
                            <p>Zip</p>
                        </TagColumn3>
                </Tags>
                <Inputs>
                    <InputColumn1/>
                    <InputColumn2/>
                    <InputColumn3/>
                </Inputs>
                <FieldReq>
                    <FieldReqColumn1>
                        <p>This field is required</p>
                    </FieldReqColumn1>
                    <FieldReqColumn2>
                        <p>This field is required</p>
                    </FieldReqColumn2>
                </FieldReq>
            </Box2>
            <Box3>
                <Title>Contact</Title>
                <Tags>
                    <TagColumn1>
                            <p>Website</p>
                        </TagColumn1>
                        <TagColumn2>
                            <p>Phone *</p>
                        </TagColumn2>
                        <TagColumn3>
                            <p>Email *</p>
                        </TagColumn3>
                </Tags>
                <Inputs>
                    <InputColumn1/>
                    <InputColumn2/>
                    <InputColumn3/>
                </Inputs>
                <FieldReq>
                    <FieldReqColumn2>
                        <p>This field is required</p>
                    </FieldReqColumn2>
                    <FieldReqColumn3>
                        <p>This field is required</p>
                    </FieldReqColumn3>
                </FieldReq>
            </Box3>
            <Box4>
                <Title>Details</Title>
                <Tags>
                        <TagColumn1>
                            <p>Opening Hours *</p>
                        </TagColumn1>
                        <TagColumn2>
                            <p>Price Level</p>
                        </TagColumn2>
                        <TagColumn3>
                            <p>Image</p>
                        </TagColumn3>
                </Tags>
                <Inputs>
                    <InputColumn1/>
                    <SelectPrice>
                            <select>
                                <option value="1">Select a value...</option>
                                <option value="1">$</option>
                                <option value="2">$$</option>
                                <option value="3">$$$</option>
                                <option value="4">$$$$</option>
                                <option value="5">$$$$$</option>
                            </select> 
                    </SelectPrice>
                    <ImageButton>CHOOSE A FILE...</ImageButton>
                </Inputs>
                <FieldReq>
                    <FieldReqColumn1>
                        <p>This field is required</p>
                    </FieldReqColumn1>
                </FieldReq>
            </Box4>
        </InputFields>
        <SubmitButton>SUBMIT</SubmitButton>
    </Form>
  );
};

export default NewRestoForm;