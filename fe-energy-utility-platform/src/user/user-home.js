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
      <h6 style ={{color : 'white', marginLeft : '50px'}}>
        Device b65289b7-38a7-4145-a11b-6158338c8a70
      </h6>
      <Chart deviceId={"b65289b7-38a7-4145-a11b-6158338c8a70"} />
      <h6 style ={{color : 'white', marginLeft : '50px'}}>
        Device b65289b7-38a7-4145-a11b-6158338c8a70
      </h6>
      <Chart deviceId={"b65289b7-38a7-4145-a11b-6158338c8a70"} />
    </div>
  );
};

export default UserHome;
