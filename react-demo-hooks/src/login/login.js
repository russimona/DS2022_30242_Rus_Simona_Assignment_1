import React, { useEffect, useState } from "react";
import { FormGroup, Input, Label, Button } from "reactstrap";

//others
import wallpaper from "../assets/register_page.jpg";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  const loginHandler = () => {
    validateInput();
   // window.location.href = "/";
  };

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };


  const validateInput = () => {
    if (email.length < 10 || password.length < 5) {
      setIsAlert(true);
      setAlertMessage("Please enter a correct username and password. ");
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
      <FormGroup className="formlogin">
        <h1 className="title">Login</h1>
        <Label className="labelloginform" for="emailField">
          Email
        </Label>
        <Input
          name="email"
          type="text"
          placeholder={"Email"}
          onChange={handleChange}
        />
        <Label className="labelloginform" for="passwordField">
          Password
        </Label>
        <Input
          name="password"
          type="text"
          placeholder={"Password"}
          onChange={handleChange}
        />
        <Button color="info" className="submitbutton" onClick={loginHandler}>
          Login
        </Button>
      </FormGroup>
    </div>
  );
};

export default Login;
