import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HeaderNav() {
  return (
    <header className="header" style={{ backgroundColor: "#320B44" }}>
      <a className="header-brand" href="#" style={{ color: "white", display: "flex", alignItems: "center" }}>
        <img
          src={require("../../../assets/logoIbik.png")}
          alt=""
          width="40"
          height="40"
          className="d-inline-block align-top"
          style={{ marginLeft: "10px" }}
        />
        <span style={{ marginLeft: "10px" }}>Sistem Informasi Perpustakaan</span>
      </a>
      <button className="btn btn-outline-success" type="submit" style={{backgroundColor:"white", color:"#320B44", borderColor:"#320B44"}}>
        Logout
      </button>
    </header>
  );
}
