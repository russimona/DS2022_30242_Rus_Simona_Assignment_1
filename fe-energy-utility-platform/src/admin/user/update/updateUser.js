import React, { useEffect, useState } from "react";
import { FormGroup, Input, Label, Button } from "reactstrap";

//components
import Login from "../../../login/login";

//actions
import { getUsersById, editUser } from "../../../commons/api/user-api";

//others
import wallpaper from "../../../assets/blue.png";
import NavigationBar from "../../navigation-bar-admin";
const UpdateUser = () => {
  const [editUid, setEditUid] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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


  useEffect(() => {
    if (sessionStorage.getItem("editUId")) {
      setEditUid(sessionStorage.getItem("editUId"));
    }
  }, []);

  function fetchPersons() {
    getUsersById(editUid, (result, status, err) => {
      if (result !== null && status === 200) {
        //console.log(result);
        setName(result.name);
        setEmail(result.email);
        setPassword(result.password);
        setSurname(result.surname);
      } else {
        alert("Could not fetch data.");
      }
    });
  }

  useEffect(() => {
    if (editUid !== "") {
      console.log(editUid);
      fetchPersons();
    }
    //eslint-disable-next-line
  }, [editUid]);

  const editUserHandler = () => {
    console.log({
      name: name,
      email: email,
      password: password,
      surname: surname,
    });
    return editUser(
      {
        id: editUid,
        name: name,
        email: email,
        password: password,
        surname: surname,
      },
      (result, status, err) => {
        if (result !== null && (status === 200 || status === 201)) {
          window.location.href = "/admin/users-table";
          sessionStorage.removeItem("editUId")
        } else {
          alert("Error trying to edit user.");
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
        <h3 className="titlecreate">Edit user</h3>
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
          Surname
        </Label>
        <Input
          name="Surname"
          type="text"
          placeholder={"Surname"}
          onChange={onChangeHandler}
          value={surname}
        />
        <Label className="labelform" for="emailField">
          Email
        </Label>
        <Input
          name="Email"
          type="text"
          placeholder={"Email"}
          onChange={onChangeHandler}
          value={email}
        />
        <Label className="labelform" for="passwordField">
          Password
        </Label>
        <Input
          name="Password"
          type="text"
          placeholder={"Password"}
          onChange={onChangeHandler}
          value={password}
        />

        <Button color="info" className="adduserbtn" onClick={editUserHandler}>
          Confirm changes
        </Button>
      </FormGroup>
    </div>
  );
};

export default sessionStorage?.getItem("sessionToken")?.includes("9999999")?   UpdateUser : Login;
