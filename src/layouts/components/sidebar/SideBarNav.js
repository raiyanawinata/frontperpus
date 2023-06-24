import React from "react";
import "./sidebar.css";
import SideBar from "./SideBar";
import './sidebarnav.css';

const SideBarNav = () => {
  return (
    <div className="container">
    <div className="side px-3">
      <div className="d-flex justify-content-center mt-4">
        <div className="logo">
          <img src={require('../../../assets/logoIbik.png')} alt="logo"/>
        </div>
      </div>
      <hr className="endLine"/>
      <div className="d-flex justify-content-start mt-4">
      <SideBar/>
      </div>
      
    </div>
    </div>
  );
};

export default SideBarNav;
