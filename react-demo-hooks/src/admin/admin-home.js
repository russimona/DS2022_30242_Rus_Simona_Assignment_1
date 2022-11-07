import React from "react";

//others
import wallpaper from "../assets/register_page.jpg";
import Login from "../login/login";
import NavigationBar from "./navigation-bar-admin";
const AdminHome = () => {
  const textStyle = { color: "white" };


  return (
    <div
      style={{ backgroundImage: `url(${wallpaper})` }}
      className="wallpaperImage"
    >
      <NavigationBar />
      <h1 className="display-3" style={textStyle}>
        Energy Utility Platform
      </h1>
      <p className="lead" style={textStyle}>
        <b>Enabling real time monitoring of smart devices.</b>{" "}
      </p>
    </div>
  );
};

export default sessionStorage?.getItem("sessionToken")?.includes("9999999")?   AdminHome : Login;
