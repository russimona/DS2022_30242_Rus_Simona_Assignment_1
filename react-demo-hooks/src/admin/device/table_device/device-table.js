import React, { useEffect, useState } from "react";
import { CardHeader } from "reactstrap";

//components
import NavigationBar from "../../navigation-bar-admin";
import Table from "./table";
import Login from "../../../login/login";

//actions
import { getDevices } from "../../../commons/api/device-api";

//others
import wallpaper from "../../../assets/register_page.jpg";
const DeviceTable = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [reload, setReload] = useState(false);
  const [tableData, setTableData] = useState([]);


  function fetchDevices() {
    return getDevices((result, status, err) => {
      if (result !== null && status === 200) {
        setTableData(result);
        console.log(result);
        setIsLoaded((isLoaded) => true);
      } else {
        alert("Could not fetch data.");
      }
    });
  }

  useEffect(() => {
    fetchDevices();
  }, []);

  useEffect(() => {
    reload === true && fetchDevices();
  }, [reload]);

  return (
    <div
      style={{ backgroundImage: `url(${wallpaper})` }}
      className="wallpaperImage"
    >
      <NavigationBar />
      <CardHeader>
        <strong style={{ color: "white" }}> Devices List </strong>
      </CardHeader>
      {isLoaded && (
        <div
          style={{
            width: "90vw",
            margin: "auto",
            backgroundImage:
              "linear-gradient(rgb(116, 172, 196), rgb(17, 56, 97))",
          }}
        >
          <Table data={tableData} setReload={setReload} />{" "}
        </div>
      )}
    </div>
  );
};
export default sessionStorage?.getItem("sessionToken")?.includes("9999999")?   DeviceTable : Login;
