import { useState } from "react";
import {
  FormDivWrapper,
  SignInFormWrapper,
  SignInTitle,
  InputsCombinedWrapper,
  InputWrapper,
  Input,
  InputSmall,
  InputWrapperTwoPerLine,
  Button,
} from "./RegistrationFormStyled";
import { useHistory } from "react-router-dom";

const RegistrationForm = (props) => {
  const [email, setEmail] = useState("");
  const [stage, setStage] = useState(0);
  const [verificationCode, setVerificationCode] = useState("");
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const history = useHistory();
  console.log(props);
  const handleChange = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "verificationCode":
        setVerificationCode(event.target.value);
        break;
      case "username":
        setUsername(event.target.value);
        break;
      case "location":
        setLocation(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "passwordRepeat":
        setPasswordRepeat(event.target.value);
        break;

      default:
        console.log("default");
    }

    let state = {
      email: email,
      verificationCode: verificationCode,
      username: username,
      location: location,
      password: password,
      passwordRepeat: passwordRepeat,
    };
    console.log("state in on handleChange function", state);
  };

  const handleFirstContinueClick = (event) => {
    event.preventDefault();

    console.log("clicked first continue. stage:", stage);
    if (email) {
      console.log("email:", email);
      const url =
        "https://luna-dhmp.propulsion-learn.ch/backend/api/auth/registration/";
      const headers = new Headers({
        "Content-Type": "application/json",
      });
      const bodyRaw = {
        email: email,
      };
      const method = "POST";
      const config = {
        method,
        headers,
        body: JSON.stringify(bodyRaw),
      };
      console.log(config);
      fetch(url, config).then((res) => {
        console.log("response from /registration:", res);
        try {
          if (res.status === 200) {
            setStage(stage + 1);
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

  const handleSecondContinueClick = (event) => {
    event.preventDefault();
    console.log("clicked second continue. stage:", stage);
    setStage(stage + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked complete. stage:", stage);
    if (email) {
      console.log("email:", email);
      const url =
        "https://luna-dhmp.propulsion-learn.ch/backend/api/auth/registration/validation/";
      const headers = new Headers({
        "Content-Type": "application/json",
      });
      const bodyRaw = {
        email: email,
        code: verificationCode,
        username: username,
        password: password,
        password_repeat: passwordRepeat,
        location: location,
      };
      const method = "POST";
      const config = {
        method,
        headers,
        body: JSON.stringify(bodyRaw),
      };
      console.log(config);
      fetch(url, config).then((res) => {
        console.log("response from /validation:", res);

        try {
          if (res.status === 200) {
            history.push("/");
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
    <div>
      {stage === 0 && (
        <FormDivWrapper>
          <SignInFormWrapper>
            <SignInTitle>Registration</SignInTitle>
            <InputsCombinedWrapper>
              <InputWrapper>
                <Input
                  type="email"
                  placeholder="E-mail address"
                  value={email}
                  name="email"
                  onChange={handleChange}
                />
              </InputWrapper>
            </InputsCombinedWrapper>
            <Button onClick={handleFirstContinueClick}> Register </Button>
          </SignInFormWrapper>
        </FormDivWrapper>
      )}
      {/* confirmation step */}
      {stage === 1 && (
        <FormDivWrapper>
          <SignInFormWrapper>
            <SignInTitle>Congratulations!</SignInTitle>
            <div>
              Thanks for your registration. Our hard working monkeys are
              preparing a digital message called E-Mail that will be sent to you
              soon. Since monkeys arent good in writing the message could end up
              in you junk folder. Our apologies for any inconvienience.{" "}
            </div>
            <Button onClick={handleSecondContinueClick}> Continue </Button>
          </SignInFormWrapper>
        </FormDivWrapper>
      )}
      {/* verification step */}

      {/* email, verificaiton
    username, location
    password, password repeat */}

      {stage === 2 && (
        <FormDivWrapper onSubmit={handleSubmit}>
          <SignInFormWrapper>
            <SignInTitle>Verification</SignInTitle>
            <InputsCombinedWrapper>
              <InputWrapperTwoPerLine>
                <InputSmall
                  type="email"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={handleChange}
                />
                <InputSmall
                  type="text"
                  placeholder="Verification code"
                  value={verificationCode}
                  name="verificationCode"
                  onChange={handleChange}
                />
              </InputWrapperTwoPerLine>

              <InputWrapperTwoPerLine>
                <InputSmall
                  type="text"
                  placeholder="Username"
                  value={username}
                  name="username"
                  onChange={handleChange}
                />
                <InputSmall
                  type="text"
                  placeholder="Location"
                  value={location}
                  name="location"
                  onChange={handleChange}
                />
              </InputWrapperTwoPerLine>
              <InputWrapperTwoPerLine>
                <InputSmall
                  type="password"
                  placeholder="Password"
                  value={password}
                  name="password"
                  onChange={handleChange}
                />
                <InputSmall
                  type="password"
                  placeholder="Password repeat"
                  value={passwordRepeat}
                  name="passwordRepeat"
                  onChange={handleChange}
                />
              </InputWrapperTwoPerLine>
            </InputsCombinedWrapper>
            <Button title="complete"> Finish Registration </Button>
          </SignInFormWrapper>
        </FormDivWrapper>
      )}
    </div>
  );
};

export default RegistrationForm;
