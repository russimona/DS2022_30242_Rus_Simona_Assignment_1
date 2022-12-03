import React, { useEffect, useState } from "react";
import "react-table/react-table.css";
import { Col, Row } from "react-bootstrap";

//actions
import { deleteUser } from "../../../commons/api/user-api";

//others
import edit from "../../../assets/edit.png";
import delete_icon from "../../../assets/delete.png";

function Table({ data, setReload }) {
  const [emptyResult, setEmptyResult] = useState(false);
  useEffect(() => {
    console.log(data);
    if (data.length === 0) setEmptyResult(true);
    else setEmptyResult(false);
  }, [data]);

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

  useEffect(() => {
    setReload(false);
  }, [setReload]);

  console.log(data);
  return (
    <div
      style={{
        margin: "auto",
        marginTop: "30px",
        backgroundImage: "linear-gradient(rgb(116, 172, 196), rgb(17, 56, 97))",
        padding: "20px",
      }}
    >
      <Row>
        <Col>
          <p style={{ fontWeight: "bolder" }}>NAME</p>
        </Col>
        <Col>
          <p style={{ fontWeight: "bolder" }}>SURNAME</p>
        </Col>
        <Col>
          <p style={{ fontWeight: "bolder" }}>EMAIL</p>
        </Col>
        <Col>
          <p style={{ fontWeight: "bolder" }}>EDIT DELETE</p>
        </Col>
      </Row>
      {emptyResult && (
        <div
          style={{
            color: "white",
            fontWeight: "bolder",
            marginTop: "30px",
            marginLeft: "40vw",
          }}
        >
          Empty list
        </div>
      )}
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
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => {
                  sessionStorage.setItem("editUId", user.id);
                  window.location.href = "/admin/update-users";
                  console.log(user.id);
                }}
              >
                <img
                  alt="edit device"
                  src={edit}
                  style={{ height: "30px", width: "30px" }}
                />
              </button>
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