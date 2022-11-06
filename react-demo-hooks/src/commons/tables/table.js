import React, { useEffect, useState } from "react";
import "react-table/react-table.css";
import { Col, Row } from "react-bootstrap";

//others
import add from "../../assets/add.png";
import edit from "../../assets/edit.png";
import delete_icon from "../../assets/delete.png";
import { deleteUser } from "../../person/api/user-api";

function Table({data, setReload}) {
 

  const deleteUserHandler = (uid) => {
    return deleteUser(uid, (result, status, err) => {
      if (result !== null && (status === 200 || status === 201)) {
        setReload(true);
      } else {
        alert(
          "Error trying to add user. Please check all the fields to be completed."
        );
        console.log("error");
      }
    });
  };

  useEffect(()=>{setReload(false)}, [])

  console.log(data);
  return (
    <div
      style={{
        margin: "auto",
        marginTop: "30px",
        backgroundImage: 'linear-gradient(rgb(116, 172, 196), rgb(17, 56, 97))' ,
        padding: "20px",
      }}
    >
        <Row>
            <Col><p style={{ fontWeight:'bolder'}}>NAME</p></Col>
            <Col><p style={{ fontWeight:'bolder'}}>SURNAME</p></Col>
            <Col><p style={{ fontWeight:'bolder'}}>EMAIL</p></Col>
            <Col><p style={{ fontWeight:'bolder'}}>ADD DEVICE</p></Col>
            <Col><p style={{ fontWeight:'bolder'}}>EDIT USER</p></Col>
            <Col><p style={{ fontWeight:'bolder'}}>DELETE USER</p></Col>
        </Row>
      {data.map((user) => {
        return (
          <Row key={user.id}>
            <Col>
              <p style={{ color: "black" }}>{user.name}</p>
            </Col>
            <Col>
              <p style={{ color: "black" }}>{user.surname}</p>
            </Col>
            <Col>
              <p style={{ color: "black" }}>{user.email}</p>
            </Col>
            <Col>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "white",
                }}
                onClick={() => {
                    console.log(user.id);
                }}
              >
                <img
                  alt="add device"
                  src={add}
                  style={{ height: "30px", width: "30px" }}
                />
              </button>
            </Col>
            <Col>
            <button
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => {
                  console.log(user.id);
                }}
              >
                <img
                  alt="edit device"
                  src={edit}
                  style={{ height: "30px", width: "30px" }}
                />
              </button>
            </Col>
           
            <Col>
            <button
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => {
                  console.log(user.id);
                  deleteUserHandler(user.id);
                }}
              >
                <img
                  alt="delete device"
                  src={delete_icon}
                  style={{ height: "30px", width: "30px" }}
                />
              </button>
            </Col>
           
          </Row>
        );
      })}
    </div>
  );
}

export default Table;
