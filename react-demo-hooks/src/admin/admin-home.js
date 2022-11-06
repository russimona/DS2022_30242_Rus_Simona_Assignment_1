import React, {useEffect} from "react";

//others
import wallpaper from "../assets/register_page.jpg";
import NavigationBar from "./navigation-bar-admin";
const AdminHome = () => {
  const textStyle = { color: "white" };

  useEffect(()=>{if(sessionStorage.getItem('sessionToken')){
    const uid = sessionStorage.getItem('sessionToken');
    if(!uid.includes('9999999')){
      window.location.href='/'
    }
  }}, [])
  return (
    <div
      style={{ backgroundImage: `url(${wallpaper})` }}
      className="wallpaperImage"
    >
      <NavigationBar/>
      <h1 className="display-3" style={textStyle}>
        Energy Utility Platform
      </h1>
      <p className="lead" style={textStyle}>
        <b>Enabling real time monitoring of smart devices.</b>{" "}
      </p>
     
    </div>
  );
};

export default AdminHome;
