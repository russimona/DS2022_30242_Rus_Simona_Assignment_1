import React, { useEffect, useState } from "react";
import { FormGroup, Input, Label, Button } from "reactstrap";
//actions
import { getDevicesById, editDevice } from "../../../commons/api/device-api";

//others
import wallpaper from "../../../assets/blue.png";
import NavigationBar from "../../navigation-bar-admin";
const UpdateDevice = () => {
  const [editUid, setEditUid] = useState("");
  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [year_manufacture, setYear_manufacture] = useState(0);
  const [id_consumption, setId_consumption] = useState(0)

  useEffect(() => {
    if (sessionStorage.getItem("sessionToken")) {
      const uid = sessionStorage.getItem("sessionToken");
      if (!uid.includes("9999999")) {
        window.location.href = "/";
      }
    }
  }, []);

  const onChangeHandler = (event) => {
    if (event.target.name === "mame") {
      setName(event.target.value);
    }
    if (event.target.name === "manufacturer") {
      setManufacturer(event.target.value);
    }
    if (event.target.name === "year_manufacture") {
      setYear_manufacture(event.target.value);
    }
    if(event.target.name=== 'id_consumption'){
      setId_consumption(event.target.value);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("editUId")) {
      setEditUid(sessionStorage.getItem("editUId"));
    }
  }, []);

  function fetchDevices() {
    getDevicesById(editUid, (result, status, err) => {
      if (result !== null && status === 200) {
        //console.log(result);
        setName(result.name);
        setManufacturer(result.manufacturer);
        setYear_manufacture(result.year_manufacture);
        setId_consumption(result.consumption);
      } else {
        alert("Could not fetch data.");
      }
    });
  }

  useEffect(() => {
    if (editUid !== "") {
      console.log(editUid);
      fetchDevices();
    }
    //eslint-disable-next-line
  }, [editUid]);

  const editDeviceHandler = () => {
   
    return editDevice(
      {
        id: editUid,
        name: name,
        manufacturer: manufacturer,
        year_manufacture: year_manufacture,
        id_consumption: id_consumption,
      },
      (result, status, err) => {
        if (result !== null && (status === 200 || status === 201)) {
          sessionStorage.removeItem("editUId")
          window.location.href = "/admin/show-device";

        } else {
          alert("Error trying to edit device.");
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
        <h3 className="titlecreate">Edit Device</h3>
        <Label className="labelform" for="emailField">
          Name
        </Label>
        <Input
          name="Name"
          type="text"
          placeholder={"Name"}
          onChange={onChangeHandler}
          value={name}
        />
        <Label className="labelform" for="passwordField">
          Manufacturer
        </Label>
        <Input
          name="manufacturer"
          type="text"
          placeholder={"manufacturer"}
          onChange={onChangeHandler}
          value={manufacturer}
        />
        <Label className="labelform" for="emailField">
          Year of Manufacture
        </Label>
        <Input
          name="year_manufacture"
          type="text"
          placeholder={"year_manufacture"}
          onChange={onChangeHandler}
          value={year_manufacture}
        />
        <Label className="labelform" for="passwordField">
          Id consumption
        </Label>
        <Input
          name="id_consumption"
          type="text"
          placeholder={"Password"}
          onChange={onChangeHandler}
          value={id_consumption}
        />

        <Button color="info" className="adduserbtn" onClick={editDeviceHandler}>
          Confirm changes
        </Button>
      </FormGroup>
    </div>
  );
};

export default UpdateDevice;
