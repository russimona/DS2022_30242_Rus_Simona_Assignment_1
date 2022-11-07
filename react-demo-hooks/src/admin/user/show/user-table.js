import React, { useEffect, useState } from "react";
import { CardHeader } from "reactstrap";

//components
import PersonTable from "./person-table";
import NavigationBar from "../../navigation-bar-admin";
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
      {isLoaded && <PersonTable tableData={tableData} setReload={setReload} />}
    </div>
  );
};

export default UsersTable;
