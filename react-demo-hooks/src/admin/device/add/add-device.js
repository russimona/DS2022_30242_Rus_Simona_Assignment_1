import React  from "react";
import { FormGroup, Input, Label, Button } from "reactstrap";

//others
import wallpaper from "../../../assets/register_page.jpg";
import NavigationBar from "../../navigation-bar-admin";
import "./add-device.css";
// import "./add-user.css";

const AddDevice = () => {

  return (
    <div
      style={{ backgroundImage: `url(${wallpaper})` }}
      className="wallpaperImage"
    >
      <NavigationBar />

      <FormGroup className="formadd">
        <h3 className="titlecreate">Create device</h3>
        <Label className="labelform" for="emailField">
          Name
        </Label>
        <Input name="Name" type="text" placeholder={"Email"} />
        <Label className="labelform" for="passwordField">
          Manufacturer
        </Label>
        <Input name="Manufacturer" type="text" placeholder={"Manufacturer"} />
        <Label className="labelform" for="emailField">
          Year of manufacture
        </Label>
        <Input name="Name" type="number" placeholder={"Year of manufacture"} />
        <Button color="info" className="adddevicebtn">
          Add Device
        </Button>
      </FormGroup>
    </div>
  );
};

export default AddDevice