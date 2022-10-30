import React, { useEffect, useState } from "react";
import { FormGroup, Input, Label, Button } from "reactstrap";

//others
import wallpaper from "../../../assets/register_page.jpg";
import NavigationBar from "../../navigation-bar-admin";
import "./add-user.css";
// import "./add-user.css";

const AddUser = () => {
  const [checkboxAdmin, setCheckboxAdmin] = useState(false);
  const [checkboxUser, setCheckboxUser] = useState(false);

  useEffect(() => {
    if (checkboxAdmin === true) {
      document.getElementById("checkboxUser").checked = false;
      setCheckboxUser(false);
    }
  }, [checkboxAdmin]);

  useEffect(() => {
    if (checkboxUser === true) {
      document.getElementById("checkboxAdmin").checked = false;
      setCheckboxAdmin(false);
    }
  }, [checkboxUser]);

  return (
    <div
      style={{ backgroundImage: `url(${wallpaper})` }}
      className="wallpaperImage"
    >
      <NavigationBar />

      <FormGroup className="formadd">
        <h3 className="titlecreate">Create user</h3>
        <Label className="labelform" for="emailField">
          Name
        </Label>
        <Input name="Name" type="text" placeholder={"Email"} />
        <Label className="labelform" for="passwordField">
          Surname
        </Label>
        <Input name="Surname" type="text" placeholder={"Surname"} />
        <Label className="labelform" for="emailField">
          Email
        </Label>
        <Input name="Name" type="text" placeholder={"Email"} />
        <Label className="labelform" for="passwordField">
          Password
        </Label>
        <Input name="Surname" type="text" placeholder={"Password"} />

        <div className="checkbox">
          <Input
            id="checkboxAdmin"
            className="checkbox"
            type="checkbox"
            onChange={(e) => setCheckboxAdmin(e.target.checked)}
          />
          <Label className="labelCheckBox" for="passwordField">
            Admin
          </Label>
        </div>
        <div className="checkbox">
          <Input
            id="checkboxUser"
            type="checkbox"
            onChange={(e) => setCheckboxUser(e.target.checked)}
          />
          <Label className="labelCheckBox" for="passwordField">
            User
          </Label>
        </div>

        <Button color="info" className="adduserbtn">
          Add User
        </Button>
      </FormGroup>
    </div>
  );
};

export default AddUser;
