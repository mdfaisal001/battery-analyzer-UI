import React from "react";
import './Pinfo.css';
import UserInfo from "./UserInfo.jsx";
import Information from "./Information.js"


function CreateUserInfo(Info){
  return(
    <UserInfo
    key={Info.id}
    action={Info.action}
    hours={Info.hours}
    usage ={Info.usage}
    elimg = {Info.ellipsis}
    workimg = {Info.mysvg}
  />
 )
}




function Pinfo() {
  return (
  <div className="app-layout">
    <div  className="pilayout">
      <div className="pibox-upper" >
        <img className="dpsize" src ={require("../src/images/image-jeremy.png")} alt="userimage" />
        <p className="report">Report for</p>
        <p className="fname">Mohammed <br></br>&nbsp; &nbsp;Faisal</p>
       
      </div>
      <div className="piboxouter">
        <br></br>
        <p className="daily">Daily</p>
        <p className="weekly">Weekly</p>
        <p className="monthly">Monthly</p>
      </div>
   </div>
   <div className="userinfogrid">
   {Information.map(CreateUserInfo)}
   


   </div>
   
 </div>
  )
}
export default Pinfo;
