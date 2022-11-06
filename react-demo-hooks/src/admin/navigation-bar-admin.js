import React from "react";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";

import logo from "../assets/logo.png";

const textStyle = {
  color: "white",
  textDecoration: "none",
};

const logoutHandler = () => {
  window.location.href = "/login";
};

function NavigationBar() {
  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/admin">
          <img alt="logo" src={logo} width={"50"} height={"35"} />
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle style={textStyle} nav caret>
              Actions
            </DropdownToggle>
            <DropdownMenu left="true">
              <DropdownItem>
                <NavLink href="/admin/add-user">Add user</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/admin/add-device">Add device</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/admin/users-table">Show user</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/admin/show-device">Show device</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/admin/add-device-user">Add device for user</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>

        <Button onClick={logoutHandler}>Log out</Button>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
