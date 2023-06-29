import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import House from "../../../assets/home.png";
import Book from "../../../assets/books.png";
import Borrow from "../../../assets/borrow.png";
import "./sidebar.css";

const SideBar = () => {
  const [links, setLinks] = useState([
    {
      text: 'Dashboard',
      icon: House,
      focus: true,
      path: "/dashboard"
    },
    {
      text: 'Koleksi Buku',
      icon: Book,
      focus: false,
      path: "/koleksi-buku"
    },
    {
      text: 'Data Peminjaman',
      icon: Borrow,
      focus: false,
      path: "/data-peminjaman"
    }
  ]);

  return (
    <div className="links-container" style={{ marginTop: "10px", paddingTop: "2px" }}>
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.path}
          activeClassName="focus"
          className={`link d-flex align-items-center text-nowrap px-3 my-3 cursor${link.focus ? ' focus' : ''} ${link.hasDropdown ? ' justify-content-between' : ''}`}
        >
          <div className="d-flex align-items-center">
            <div className="icon p-0 m-0">
              <img src={link.icon} alt="" />
            </div>
            <p className="linkText p-0 mb-0">{link.text}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default SideBar;

//RESPONSIVE
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import House from "../../../assets/home.png";
// import Book from "../../../assets/books.png";
// import Borrow from "../../../assets/borrow.png";
// import "./sidebar.css";

// const SideBar = () => {
//   const [links, setLinks] = useState([
//     {
//       text: "Dashboard",
//       icon: House,
//       focus: true,
//       path: "/dashboard",
//     },
//     {
//       text: "Koleksi Buku",
//       icon: Book,
//       focus: false,
//       path: "/koleksi-buku",
//     },
//     {
//       text: "Data Peminjaman",
//       icon: Borrow,
//       focus: false,
//       path: "/data-peminjaman",
//     },
//   ]);

//   return (
//     <div className="links-container" style={{ marginTop: "10px", paddingTop: "2px" }}>
//       {links.map((link, index) => (
//         <NavLink
//           key={index}
//           to={link.path}
//           activeClassName="focus"
//           className={`link d-flex align-items-center text-nowrap px-3 my-3 cursor${link.focus ? " focus" : ""} ${
//             link.hasDropdown ? " justify-content-between" : ""
//           }`}
//         >
//           <div className="d-flex align-items-center">
//             <div className="icon p-0 m-0">
//               <img src={link.icon} alt="" />
//             </div>
//             <p className="linkText p-0 mb-0">{link.text}</p>
//           </div>
//         </NavLink>
//       ))}
//     </div>
//   );
// };

// export default SideBar;
