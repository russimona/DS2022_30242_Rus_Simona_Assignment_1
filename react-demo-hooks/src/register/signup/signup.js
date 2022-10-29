import React, { useState } from "react";
import { FormGroup, Input, Label, Button } from "reactstrap";

//others
import wallpaper from "../../assets/register_page.jpg";
import "./signup.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlert, setIsAlert] = useState(false);

  const signupHandler = () => {
    validateInput();
   // window.location.href = "/login";
  };

  const handleChange = (event) => {
    if (event.target.name === "firstname") {
      setFirstName(event.target.value);
    }
    if (event.target.name === "lastname") {
      setLastName(event.target.value);
    }
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password1") {
      setPassword1(event.target.value);
    }
    if (event.target.name === "password2") {
      setPassword2(event.target.value);
    }

  };

  const validateInput = () => {
    if (firstName.length < 2) {
      setIsAlert(true);
      setAlertMessage("Please enter a valid first name");
    } else {
      setIsAlert(false);
      setAlertMessage("");
    }
    if (lastName.length < 2) {
      setIsAlert(true);
      setAlertMessage("Please enter a valid last name");
    } else {
      setIsAlert(false);
      setAlertMessage("");
    }
    if (email.length < 10) {
      setIsAlert(true);
      setAlertMessage("Please enter a valid email");
    } else {
      setIsAlert(false);
      setAlertMessage("");
    }
    if (password1 !== password2 && password1.length < 5) {
      setIsAlert(true);
      setAlertMessage("Passwords do not match");
    } else {
      setIsAlert(false);
      setAlertMessage("");
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${wallpaper})` }}
      className="wallpaperImage"
    >
      {isAlert && <div className="alertText">{alertMessage}</div>}
      <FormGroup className="formsignup">
        <h2 className="title">Create an account</h2>
        <Label className="labelsignupform" for="emailField">
          First name
        </Label>
        <Input
          name="firstname"
          type="text"
          placeholder={"First name"}
          onChange={handleChange}
        />
        <Label className="labelsignupform" for="emailField">
          Last name
        </Label>
        <Input
          name="lastname"
          type="text"
          placeholder={"Last name"}
          onChange={handleChange}
        />
        <Label className="labelsignupform" for="emailField">
          Email
        </Label>
        <Input
          name="email"
          type="text"
          placeholder={"Email"}
          onChange={handleChange}
        />
        <Label className="labelsignupform" for="passwordField">
          Password
        </Label>
        <Input
          name="password1"
          type="text"
          placeholder={"Password"}
          onChange={handleChange}
        />
        <Label className="labelsignupform" for="passwordField">
          Repeat password
        </Label>
        <Input
          name="password2"
          type="text"
          placeholder={" Repeat password"}
          onChange={handleChange}
        />
        <Button color="info" className="submitbutton" onClick={signupHandler}>
          Sign up
        </Button>
      </FormGroup>
    </div>
  );
};

export default SignUp;
