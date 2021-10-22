import React from "react";
import { useState, useEffect } from "react";
import {
  Form,
  FormTitle,
  InputLabel,
  DefaultInputField,
  ThingsILoveInputField,
  DescriptionInputField,
  BottomRowWrapper,
  DeleteAccountLink,
  SaveButton,
  ChangeAvatarButton,
  ImageUpload,
} from "./UserEditProfileStyled";

const UserEditProfile = (props) => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [thingsILove, setThingsILove] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "username":
        setUsername(event.target.value);
        break;
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "location":
        setLocation(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      case "thingsILove":
        setThingsILove(event.target.value);
        break;
      case "description":
        setDescription(event.target.value);
        break;

      default:
        console.log("default");
    }
  };

  const handleSubmit = (event) => {
    console.log("submitting");
    event.preventDefault();
    const url = "https://luna-dhmp.propulsion-learn.ch/backend/api/me/";
    const token = localStorage.getItem("luna-auth-token");
    const headers = new Headers({
      Authorization: `Bearer ${token}`,
    });
    const formData = new FormData();
    if (username) {
      formData.append("username", username);
    }
    if (firstName) {
      formData.append("first_name", firstName);
    }
    if (lastName) {
      formData.append("last_name", lastName);
    }
    if (email) {
      formData.append("email", email);
    }
    if (location) {
      formData.append("location", location);
    }
    if (phone) {
      formData.append("phone", phone);
    }
    if (thingsILove) {
      formData.append("things_user_likes", thingsILove.split(","));
    }
    if (description) {
      formData.append("description", description);
    }
    if (image) {
      formData.append("profile_picture", image);
    }
    const method = "PATCH";
    const config = {
      method,
      headers,
      body: formData,
    };
    console.log(config);
    fetch(url, config).then((res) => {
      console.log("response from backend/api/me/:", res);

      try {
        if (res.status === 200) {
          console.log("User altered");
          alert("User info updated!");
        } else {
          alert("Invalid input.");
        }
      } catch (error) {
        console.log(error);
        alert("Invalid input.");
      }
    });
  };

  const handleImage = (event) => {
    console.log("HANDLING IMAGE", event.target.files[0]);
    setImage(event.target.files[0]);
  };

  const deleteAccount = (event) => {
    const url = "https://luna-dhmp.propulsion-learn.ch/backend/api/me/";
    const token = localStorage.getItem("luna-auth-token");
    const headers = new Headers({
      Authorization: `Bearer ${token}`,
    });
    const method = "DELETE";
    const config = {
      method,
      headers,
    };
    fetch(url, config).then((res) => {
      console.log("response from backend/api/me/: DELETE", res);

      try {
        if (res.status === 204) {
          console.log("User DELETED");
          alert("User DELETED!");
        } else {
          alert("Invalid input.");
        }
      } catch (error) {
        console.log(error);
        alert("Invalid input.");
      }
    });
  };

  const populateFields = () => {
    setUsername(props.username);
    setFirstName(props.firstName);
    setLastName(props.lastName);
    setEmail(props.email);
    setLocation(props.location);
    setPhone(props.phone);
    setThingsILove(props.thingsILove.join(","));
    setDescription(props.description);
  };

  useEffect(populateFields, []);

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>EDIT USERPROFILE</FormTitle>
      <InputLabel>
        Username
        <DefaultInputField
          type="text"
          value={username}
          name="username"
          onChange={handleChange}
        />
      </InputLabel>
      <InputLabel>
        First name
        <DefaultInputField
          type="text"
          value={firstName}
          name="firstName"
          onChange={handleChange}
        />
      </InputLabel>
      <InputLabel>
        Last name
        <DefaultInputField
          type="text"
          value={lastName}
          name="lastName"
          onChange={handleChange}
        />
      </InputLabel>
      <InputLabel>
        E-mail
        <DefaultInputField
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </InputLabel>
      <InputLabel>
        Location
        <DefaultInputField
          type="text"
          value={location}
          name="location"
          onChange={handleChange}
        />
      </InputLabel>
      <InputLabel>
        Phone
        <DefaultInputField
          type="number"
          value={phone}
          name="phone"
          onChange={handleChange}
        />
      </InputLabel>
      <InputLabel>
        Things I love
        <ThingsILoveInputField
          type="text"
          value={thingsILove}
          name="thingsILove"
          onChange={handleChange}
        />
      </InputLabel>
      <InputLabel>
        Description
        <DescriptionInputField
          type="text"
          value={description}
          name="description"
          onChange={handleChange}
        />
      </InputLabel>
      <label>
        <ChangeAvatarButton>Upload Profile Picture</ChangeAvatarButton>
        <ImageUpload type="file" name="image" onChange={handleImage} />
      </label>
      <BottomRowWrapper>
        <SaveButton>Save</SaveButton>
        <DeleteAccountLink onClick={() => deleteAccount()}>
          Delete account
        </DeleteAccountLink>
      </BottomRowWrapper>
    </Form>
  );
};

export default UserEditProfile;
