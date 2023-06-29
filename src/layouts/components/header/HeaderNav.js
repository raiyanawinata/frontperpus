import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export default function HeaderNav() {
  return (
    <header className="header" style={{backgroundColor:"white"}}>
      <div className="header-brand">
        <img
          src={require("../../../assets/logoIbik.png")}
          alt=""
          width="40"
          height="40"
          className="d-inline-block align-top"
          style={{ marginLeft: "10px" }}
        />
        <span style={{ marginLeft: "10px", color:"#320B44" }}>Sistem Informasi Perpustakaan</span>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li>
            <NavLink
              to="/data-peminjaman"
              activeClassName="active"
              className="nav-link"
              style={{color:"#320B44"}}
            >
              Data Peminjaman
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/koleksi-buku"
              activeClassName="active"
              className="nav-link"
              style={{color:"#320B44"}}
            >
              Koleksi Buku
            </NavLink>
          </li>
          <li>
          <NavLink
          to="/logout"
          activeClassName="active"
          className="nav-link"
          style={{color:"#320B44"}}
        >
          Logout
        </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
