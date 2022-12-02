import React from "react";
import wallpaper from "../assets/register_page.jpg";
import Chart from "./chart/chart";
//components
import NavigationBarUser from "./navigation-bar-user";
const UserHome = () => {
  return (
    <div
      style={{ backgroundImage: `url(${wallpaper})` }}
      className="wallpaperImage"
    >
      <NavigationBarUser />
      <Chart />
    </div>
  );
};

export default UserHome;
