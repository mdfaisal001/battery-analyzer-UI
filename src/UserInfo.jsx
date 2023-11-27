import React from "react";
import "./Userinfo.css"




function UserInfo(props){
    return(
        <div className="userlayout">
          <div className="work-div">
            <img className="work-image" src ={props.workimg} alt="workimage" />
          </div>
          <div className="work-info" >
            <div className="info1">
              <div >
                <p className="detail1">{props.action}</p>
              </div>
              <div>
                <img className="ellipsis-img"src ={props.elimg} alt="ellipsis-img" />
             </div>
            </div>  
            <div className="info2">
                <p className="detail2">{props.hours}</p>
                <p className="detail3">{props.usage}</p>
            </div>
            
           
          </div>
        </div>

    );
}
export default UserInfo;
