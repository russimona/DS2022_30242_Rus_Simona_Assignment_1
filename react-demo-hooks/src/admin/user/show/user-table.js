import React, { useEffect, useState } from "react";
import { CardHeader } from "reactstrap";

//components
import Table from "./table";
import NavigationBar from "../../navigation-bar-admin";
import Login from "../../../login/login";
//actions
import { getUsers } from "../../../commons/api/user-api";

//others
import wallpaper from "../../../assets/register_page.jpg";
import "./user-table.css";

const UsersTable = () => {
  const [tableData, setTableData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reload, setReload] = useState(false);

  function fetchPersons() {
    return getUsers((result, status, err) => {
      if (result !== null && status === 200) {
        setTableData((tableData) => result);
        setIsLoaded((isLoaded) => true);
      } else {
        alert("Could not fetch data.");
      }
    });
  }

  useEffect(() => {
    fetchPersons();
  }, []);
  useEffect(() => {
    reload === true && fetchPersons();
  }, [reload]);


  return (
    <div
      style={{ backgroundImage: `url(${wallpaper})` }}
      className="wallpaperImage"
    >
      <NavigationBar />
      <CardHeader>
        <strong style={{color : 'white'}}> Users List </strong>
      </CardHeader>
      {isLoaded &&  <div style={{width : '90vw', margin : 'auto', backgroundImage: 'linear-gradient(rgb(116, 172, 196), rgb(17, 56, 97))' }}>
            <Table
                data={tableData}
                setReload={setReload}
                />
        </div>}
    </div>
  );
};

export default sessionStorage?.getItem("sessionToken")?.includes("9999999")?   UsersTable : Login;
