import React, {useEffect} from "react";

const DeviceTable = () =>{
    useEffect(()=>{if(sessionStorage.getItem('sessionToken')){
        const uid = sessionStorage.getItem('sessionToken');
        if(!uid.includes('9999999')){
          window.location.href='/'
        }
      }}, [])


  // useEffect(() => {
  //   fetchPersons();
  // }, []);
  // useEffect(() => {
  //   reload === true && fetchPersons();
  // }, [reload]);
  return (
    <div
      //style={{ backgroundImage: `url(${wallpaper})` }}
      className="wallpaperImage"
    >
      {/* <NavigationBar />
      <CardHeader>
        <strong> Users List </strong>
      </CardHeader>
      {isLoaded && <PersonTable tableData={tableData} setReload={setReload} />} */}
    </div>
  );
};
export default DeviceTable;