import React, { useState } from "react";
import { FormGroup, Input, Label, Button } from "reactstrap";

//components
import Login from "../../../login/login";

//others
import wallpaper from "../../../assets/register_page.jpg";
import { postDevice } from "../../../commons/api/device-api";
import NavigationBar from "../../navigation-bar-admin";
import "./add-device.css";

const AddDevice = () => {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [year_manufacture, setYear_manufacture] = useState(0);
  const [id_consumption] = useState(new Date().getMilliseconds());

  const onChangeHandler = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    }
    if (event.target.name === "manufacturer") {
      setManufacturer(event.target.value);
    }
    if (event.target.name === "year_manufacture") {
      setYear_manufacture(event.target.value);
    }
  };

  const addDeviceHandler = () => {

    return postDevice(
      {
        name: name,
        manufacturer: manufacturer,
        year_manufacture: year_manufacture,
        id_consumption: id_consumption,
      },
      (result, status, err) => {
        if (result !== null && (status === 200 || status === 201)) {
          window.location.href = "/admin/show-device";
        } else {
          alert(
            "Error trying to add device. Please check all the fields to be completed."
          );
          console.log("error");
        }
      }
    );
  };

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
        <Input
          id="name"
          name="name"
          type="text"
          placeholder={"Name"}
          onChange={onChangeHandler}
        />
        <Label className="labelform" for="passwordField">
          Manufacturer
        </Label>
        <Input
          id="manufacturer"
          name="manufacturer"
          type="text"
          placeholder={"Manufacturer"}
          onChange={onChangeHandler}
        />
        <Label className="labelform" for="emailField">
          Year of manufacture
        </Label>
        <Input
          id="year_manufacture"
          name="year_manufacture"
          type="number"
          placeholder={"Year of manufacture"}
          onChange={onChangeHandler}
        />
        <Button
          color="info"
          className="adddevicebtn"
          onClick={addDeviceHandler}
        >
          Add Device
        </Button>
      </FormGroup>
    </div>
  );
};

export default sessionStorage?.getItem("sessionToken")?.includes("9999999")
  ? AddDevice
  : Login;
