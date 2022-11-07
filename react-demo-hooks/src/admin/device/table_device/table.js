import React, { useEffect } from "react";
import "react-table/react-table.css";
import { Col, Row } from "react-bootstrap";

//actions
import { deleteDevice } from "../../../commons/api/device-api";

//others
import edit from "../../../assets/edit.png";
import delete_icon from "../../../assets/delete.png";

function Table({ data, setReload }) {
  const deleteDeviceHandler = (uid) => {
    return deleteDevice(uid, (result, status, err) => {
      if (result !== null && (status === 200 || status === 201)) {
        setReload(true);
      } else {
        alert("Error trying to add device");
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
          <p style={{ fontWeight: "bolder" }}>MANUFACTURER</p>
        </Col>
        <Col>
          <p style={{ fontWeight: "bolder" }}>YEAR OF MANUFACTURE</p>
        </Col>
        <Col>
          <p style={{ fontWeight: "bolder" }}>ID CONSUMPTION</p>
        </Col>
        <Col>
          <p style={{ fontWeight: "bolder" }}>EDIT DELETE</p>
        </Col>
        
      </Row>
      {data.map((device) => {
        return (
          <Row key={device.id}>
            <Col>
              <p style={{ color: "black" }}>{device.name}</p>
            </Col>
            <Col>
              <p style={{ color: "black" }}>{device.manufacturer}</p>
            </Col>
            <Col>
              <p style={{ color: "black" }}>{device.year_manufacture}</p>
            </Col>
            <Col>
              <p style={{ color: "black" }}>{device.consumption}</p>
            </Col>

            <Col>
              <button
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => {
                  sessionStorage.setItem("editUId", device.id);
                  window.location.href = "/admin/update-devices";
                  console.log(device.id);
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
                  console.log(device.id);
                  deleteDeviceHandler(device.id);
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
