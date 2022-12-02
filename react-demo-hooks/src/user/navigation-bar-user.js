import React from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
} from "reactstrap";

import logo from "../assets/logo.png";


const logoutHandler = () => {
  if (sessionStorage.getItem("sessionToken"))
    sessionStorage.removeItem("sessionToken");
  window.location.href = "/";
};

const NavigationBarUser = () => {
  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/admin">
          <img alt="logo" src={logo} width={"50"} height={"35"} />
        </NavbarBrand>
       
      
       <Button style={{marginLeft: '88vw'}} onClick={logoutHandler}>Log out</Button>

       
      </Navbar>
    </div>
  );
}

export default NavigationBarUser;
