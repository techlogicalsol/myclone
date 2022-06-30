import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Tab(){

  const [activeTab, setActiveTab] = useState("Home")
  const location = useLocation()

  useEffect(()=>{
    if(location.pathname === "/"){
      setActiveTab("Home")
    
    }else if(location.pathname === "/add"){
      setActiveTab("AddContact")
    
    }else if(location.pathname === "/about"){
      setActiveTab("About")
    }
  },[location])

    return(
        <>  

        <div className="d-flex justify-content-center">

        <Link className="nav-link" to="/">
          <span className={`${activeTab === "Home" ? "active" : "inactive"}`} 
          onClick={()=> setActiveTab("Home")}>
             Home
          </span>
        </Link>
     
        <Link className="nav-link" to="/add">
        <span className={`${activeTab === "AddContact" ? "active" : "inactive"}`} 
        onClick={()=> setActiveTab("AddContact")}>
             Add Contact
          </span> 
          </Link>
     
   
        <Link className="nav-link" to="/about">
        <span className={`${activeTab === "About" ? "active" : "inactive"}`} 
        onClick={()=> setActiveTab("About")}>
             About
          </span>
        </Link>

        </div>
        </>
    )
}

export default Tab