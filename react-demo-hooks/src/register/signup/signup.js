import React from "react";
import { FormGroup, Input, Label, Button } from "reactstrap";

//others
import wallpaper from "../../assets/register_page.jpg";
import "./signup.css";

const SignUp = () => {
  const signupHandler = ({ String: email, String: password }) => {
    window.location.href = "/login";
  };

  return (
    <div
      style={{ backgroundImage: `url(${wallpaper})` }}
      className="wallpaperImage"
    >
      <FormGroup className="formsignup">
        <h2 className="title">Create an account</h2>
        <Label className="labelsignupform" for="emailField">
          {" "}
          First name{" "}
        </Label>
        <Input name="username" type="text" placeholder={"First name"} />
        <Label className="labelsignupform" for="emailField">
          {" "}
          Last name{" "}
        </Label>
        <Input name="username" type="text" placeholder={"Last name"} />
        <Label className="labelsignupform" for="emailField">
          {" "}
          Email{" "}
        </Label>
        <Input name="username" type="text" placeholder={"Email"} />
        <Label className="labelsignupform" for="passwordField">
          {" "}
          Password{" "}
        </Label>
        <Input name="username" type="text" placeholder={"Password"} />
        <Label className="labelsignupform" for="passwordField">
          {" "}
          Repeat password{" "}
        </Label>
        <Input name="username" type="text" placeholder={" Repeat password"} />
        <Button className="submitbutton" onClick={signupHandler}>
          Sign up
        </Button>
      </FormGroup>
    </div>
  );
};

export default SignUp;
