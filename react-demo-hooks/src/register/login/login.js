import React from "react";
import { FormGroup, Input, Label, Button } from "reactstrap";

//others
import wallpaper from "../../assets/register_page.jpg";
import "./login.css";

const Login = () => {

const loginHandler =({String: email, String: password})=>{
    window.location.href = '/';
}

  return (
    <div
      style={{ backgroundImage: `url(${wallpaper})` }}
      className="wallpaperImage"
    >
     
      <FormGroup className='formlogin'>
      <h1 className="title">Login</h1>
        <Label className='labelloginform' for="emailField"> Email </Label>
        <Input  name="username" type="text" placeholder={"Email"} />
        <Label  className='labelloginform'  for="passwordField" > Password </Label>
        <Input name="username" type="text" placeholder={"Password"} />
        <a href='/signup' className="neddAccount">Need an account? SIGN UP</a>
        <Button className="submitbutton" onClick={loginHandler}>
            Login
        </Button>
      </FormGroup>
    </div>
  );
};

export default Login;
