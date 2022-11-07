import React, {  useState } from "react";
import { FormGroup, Input, Label, Button } from "reactstrap";

//others
import wallpaper from "../assets/register_page.jpg";
import "./login.css";
import {loginUser} from "../commons/api/user-api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  const loginHandler = () => {

    validateInput();

    loginUser(email, password, (result, status, err) => {
        if (result !== null && (status === 200 || status === 201)) {
          console.log(result.id)
          if(result.id.includes("admin")){
            const uid = result.id.replace("admin", "9999999")
            sessionStorage.setItem('sessionToken', uid)
            window.location.href = '/admin';
          }else{
            window.location.href='/consumption';
            sessionStorage.setItem('sessionToken', result.id)
          }
        } else {
          setIsAlert(true);
          setAlertMessage(
              "Error trying to login. Invalid credentials."
          );
          console.log("error");
        }
    });


    };


  const handleChange = (event) => {
    if (event.target.name === "email") {

      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      const email = sessionStorage.getItem('email');
      console.log(email);
      setPassword(event.target.value);
    }
  };


  const validateInput = () => {
    if (email.length < 10 || password.length < 5) {
      setIsAlert(true);
      setAlertMessage("Please enter a valid username and password. ");
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
        <h3 className="title">Login to Your Account</h3>
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
          type="password"
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
