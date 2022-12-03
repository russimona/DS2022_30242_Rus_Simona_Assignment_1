import React from "react";

//others
import wallpaper from "../assets/blue.png";
import notfound from "../assets/404page.png";

const ErrorPage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${wallpaper})` }}
      className="wallpaperImage"
    >
        <h1 style={{color: 'white', marginLeft: "42vw", marginTop: "10vh"}}>Page not found</h1>
      <img alt="notfound" src={notfound} style={{width: "50vw", height: '50vh', marginLeft: "25vw", marginTop: "5vh"}}/>
    </div>
  );
};

export default ErrorPage;
