import React from "react";
import { useState } from "react";
// import { useHistory } from "react-router-dom";

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
  ImageBox,
  ImageUpload,
  Fakefile,
  ImageButton,
  SubmitButton,
} from "../CreateRestaurantForm/CreateRestaurantFormStyled";

// import { Link } from "react-router-dom";

const NewRestoForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [opening_hours, setOpening_hours] = useState("");
  const [price_level, setPrice_level] = useState("");
  const [image, setImage] = useState("");

  //   const history = useHistory();

  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "category":
        setCategory(event.target.value);
        break;
      case "country":
        setCountry(event.target.value);
        break;
      case "city":
        setCity(event.target.value);
        break;
      case "street":
        setStreet(event.target.value);
        break;
      case "zip":
        setZip(event.target.value);
        break;
      case "website":
        setWebsite(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "opening_hours":
        setOpening_hours(event.target.value);
        break;
      case "price_level":
        setPrice_level(event.target.value);
        break;

      default:
        console.log("default");
    }

    let state = {
      name: name,
      category: category,
      country: country,
      street: street,
      city: city,
      zip: zip,
      website: website,
      phone: phone,
      email: email,
      opening_hours: opening_hours,
      price_level: price_level,
      image: image,
    };
    console.log("state in on handleChange function", state);
  };

  const handleImage = (event) => {
    console.log("handling image", event.target.files[0]);
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    console.log("submitting");
    event.preventDefault();
    if (
      name &&
      category &&
      country &&
      street &&
      city &&
      phone &&
      email &&
      opening_hours
    ) {
      const url =
        "https://luna-dhmp.propulsion-learn.ch/backend/api/restaurants/new/";

      const token = localStorage.getItem("luna-auth-token");

      const headers = new Headers({
        Authorization: `Bearer ${token}`,
      });

      // const headers = new Headers({
      //   "Content-Type": "application/json",
      // });
      // headers.append("Authorization", `Bearer ${token}`);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("country", country);
      formData.append("city", city);
      formData.append("street", street);
      formData.append("zip", zip);
      formData.append("website", website);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("opening_hours", opening_hours);
      formData.append("price_level", price_level);
      formData.append("image", image);
      
      const method = "POST";
      const config = {
        method,
        headers,
        body: formData,
      };
      console.log(config);
      fetch(url, config).then((res) => {
        console.log("response from /restaurants/new:", res);

        try {
          if (res.status === 201) {
            console.log("restaurant created");
            alert("Restaurant successfully created!");
            // history.push("/");
          } else {
            alert("Invalid input.");
          }
        } catch (error) {
          console.log(error);
          alert("Invalid input.");
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Form>
        <FormTitle>CREATE NEW RESTAURANT</FormTitle>
        <UnderLineTitle />
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
              <InputColumn1
                type="text"
                placeholder=""
                value={name}
                name="name"
                onChange={handleChange}
              />
              <InputColumn2
                type="text"
                placeholder=""
                value={category}
                name="category"
                onChange={handleChange}
              />
              <InputColumn3
                type="text"
                placeholder=""
                value={country}
                name="country"
                onChange={handleChange}
              />
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
              <InputColumn1
                type="text"
                placeholder=""
                value={street}
                name="street"
                onChange={handleChange}
              />
              <InputColumn2
                type="text"
                placeholder=""
                value={city}
                name="city"
                onChange={handleChange}
              />
              <InputColumn3
                type="text"
                placeholder=""
                value={zip}
                name="zip"
                onChange={handleChange}
              />
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
              <InputColumn1
                type="text"
                placeholder=""
                value={website}
                name="website"
                onChange={handleChange}
              />
              <InputColumn2
                type="text"
                placeholder=""
                value={phone}
                name="phone"
                onChange={handleChange}
              />
              <InputColumn3
                type="text"
                placeholder=""
                value={email}
                name="email"
                onChange={handleChange}
              />
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
              <InputColumn1
                type="text"
                placeholder=""
                value={opening_hours}
                name="opening_hours"
                onChange={handleChange}
              />
              <SelectPrice>
                <select
                  type="text"
                  placeholder=""
                  value={price_level}
                  name="price_level"
                  onChange={handleChange}
                >
                  <option value="1">Select a value...</option>
                  <option value="1">$</option>
                  <option value="2">$$</option>
                  <option value="3">$$$</option>
                  <option value="4">$$$$</option>
                  <option value="5">$$$$$</option>
                </select>
              </SelectPrice>
              <ImageBox>
                <ImageUpload>
                  <ImageButton
                    type="file"
                    name="image"
                    onChange={handleImage}
                  />
                  <Fakefile>CHOOSE A FILE...</Fakefile>
                </ImageUpload>
              </ImageBox>
            </Inputs>
            <FieldReq>
              <FieldReqColumn1>
                <p>This field is required</p>
              </FieldReqColumn1>
            </FieldReq>
          </Box4>
        </InputFields>
        <SubmitButton title="complete">SUBMIT</SubmitButton>
      </Form>
    </form>
  );
};

export default NewRestoForm;