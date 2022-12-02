import React, { useEffect, useState } from "react";
import { FormGroup, Input, Label, Button } from "reactstrap";

//components
import Login from "../../../login/login";

//actions
import { postUser } from "../../../commons/api/user-api";

//others
import wallpaper from "../../../assets/register_page.jpg";
import NavigationBar from "../../navigation-bar-admin";
import "./add-user.css";

const AddUser = () => {
  const [checkboxAdmin, setCheckboxAdmin] = useState(false);
  const [checkboxUser, setCheckboxUser] = useState(false);
  const [role_user, setRole_user] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    role_user: "",
  });

  useEffect(() => {
    if (checkboxAdmin === true) {
      setRole_user("admin");
    }
    if (checkboxUser === true) {
      setRole_user("user");
    }
  }, [checkboxUser, checkboxAdmin]);

  useEffect(() => {
    setUser({ name, surname, role_user, email, password });
  }, [role_user, name, surname, email, password]);

  const onChangeHandler = (event) => {
    if (event.target.name === "Name") {
      setName(event.target.value);
    }
    if (event.target.name === "Surname") {
      setSurname(event.target.value);
    }
    if (event.target.name === "Email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "Password") {
      setPassword(event.target.value);
    }
  };

  const addUserHandler = () => {
    console.log(user);
    return postUser(user, (result, status, err) => {
      if (result !== null && (status === 200 || status === 201)) {
        window.location.href = "/admin/users-table";
      } else {
        alert(
          "Error trying to add user. Please check all the fields to be completed."
        );
        console.log("error");
      }
    });
  };

  return (
    <div
      style={{ backgroundImage: `url(${wallpaper})` }}
      className="wallpaperImage"
    >
      <NavigationBar />
      <FormGroup className="formadd">
        <h4 className="titlecreate">Create user</h4>
        <Label className="labelform">Name</Label>
        <Input
          name="Name"
          type="text"
          placeholder={"Name"}
          onChange={onChangeHandler}
          style={{ height: "25px" }}
        />
        <Label className="labelform" for="passwordField">
          Surname
        </Label>
        <Input
          name="Surname"
          type="text"
          placeholder={"Surname"}
          onChange={onChangeHandler}
          style={{ height: "25px" }}
        />
        <Label className="labelform">Email</Label>
        <Input
          name="Email"
          type="text"
          placeholder={"Email"}
          onChange={onChangeHandler}
          style={{ height: "25px" }}
        />
        <Label className="labelform" for="passwordField">
          Password
        </Label>
        <Input
          name="Password"
          type="text"
          placeholder={"Password"}
          onChange={onChangeHandler}
          style={{ height: "25px" }}
        />

        <div className="checkbox">
          <Input
            id="checkboxAdmin"
            className="checkbox"
            type="checkbox"
            onChange={(e) => {
              document.getElementById("checkboxUser").checked = false;
              setCheckboxUser(false);
              setCheckboxAdmin(e.target.checked);
            }}
          />
          <Label className="labelCheckBox" for="passwordField">
            Admin
          </Label>
        </div>
        <div className="checkbox">
          <Input
            id="checkboxUser"
            type="checkbox"
            onChange={(e) => {
              document.getElementById("checkboxAdmin").checked = false;
              setCheckboxAdmin(false);
              setCheckboxUser(e.target.checked);
            }}
          />
          <Label className="labelCheckBox" for="passwordField">
            User
          </Label>
        </div>

        <Button color="info" className="adduserbtn" onClick={addUserHandler}>
          Add User
        </Button>
      </FormGroup>
    </div>
  );
};

export default sessionStorage?.getItem("sessionToken")?.includes("9999999")
  ? AddUser
  : Login;
