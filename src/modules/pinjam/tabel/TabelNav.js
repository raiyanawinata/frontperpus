

// import React, { Component } from "react";
// import { Table, Form, Row, Col, Button } from "react-bootstrap";
// import { FaArrowAltCircleRight, FaMap, FaPlusCircle, FaPlus, FaTrash } from "react-icons/fa";
// import Popup from "reactjs-popup";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./tabelnav.css";
// import { NavLink } from "react-router-dom";
// import FormPinjam from "./FormPinjam";

// const selectOptions = {
//   0: "Belum di kembalikan",
//   1: "Selesai"
// };

// const data = [
//   {
//     npm: "202310018",
//     vehicle: "Raiyana Jan Winata",
//     tglPinjam: "28-01-2023",
//     nmBuku: "Belajar Java",
//     jurusan: "Teknologi Informasi",
//     performance: "1-02-2023",
//     status: selectOptions[1]
//   },
//   // Data lainnya
// ];

// class TabelNav extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchNPM: "",
//       sortField: "name",
//       sortOrder: "asc",
//       isFormPinjamOpen: false // state untuk mengatur tampilan pop-up
//     };
//     this.handleSearchChange = this.handleSearchChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleSearchChange(event) {
//     const searchNPM = event.target.value;
//     this.setState({
//       searchNPM
//     });
//   }

//   handleClick() {
//     this.setState((state) => ({
//       isFormPinjamOpen: true // Mengubah state untuk menampilkan pop-up FormPinjam
//     }));
//   }

//   handleSort = (field) => {
//     this.setState((prevState) => ({
//       sortField: field,
//       sortOrder: prevState.sortOrder === "asc" ? "desc" : "asc"
//     }));
//   };

//   handleDelete = (index) => {
//     const updatedData = [...data];
//     updatedData.splice(index, 1);
//     // Update state or call an API to delete the data permanently
//     console.log("Data deleted:", updatedData);
//   };
  

//   render() {
//     const { searchNPM, sortField, sortOrder, isFormPinjamOpen } = this.state;

//     // Filter data berdasarkan NPM yang diinput
//     const filteredData = data.filter((row) => row.npm.includes(searchNPM));

//     // Sortir data berdasarkan field dan order yang dipilih
//     const sortedData = [...filteredData].sort((a, b) => {
//       const fieldValueA = a[sortField];
//       const fieldValueB = b[sortField];
//       if (fieldValueA < fieldValueB) {
//         return sortOrder === "asc" ? -1 : 1;
//       }
//       if (fieldValueA > fieldValueB) {
//         return sortOrder === "asc" ? 1 : -1;
//       }
//       return 0;
//     });

//     return (
//       <React.Fragment>
//         <div className="App">
//           <h6 style={{ color: "white", fontFamily: "sans-serif", fontWeight: "bold" }}>
//             Data Peminjaman Buku
//           </h6>
//           <Row>
//             <Col xs={7}>
//               <Form.Control
//                 type="text"
//                 placeholder="Cari data berdasarkan npm"
//                 value={searchNPM}
//                 onChange={this.handleSearchChange}
//               />
//             </Col>
//             <Col xs={0} className="text-right">
//               <Button
//                 variant="light"
//                 onClick={this.handleClick}
//                 style={{
//                   marginRight: "-100px",
//                   height: "30px",
//                   paddingTop: "2px",
//                   borderRadius: "2px",
//                   position: "relative",
//                   marginTop: "15px"
//                 }}
//               >
//                 <FaPlus className="mr-1" />
//                 Tambahkan Data
//               </Button>
//             </Col>
//           </Row>
//           <br />

//           <Table striped bordered hover responsive style={{ color: "#320B44", padding: "10px" }}>
//             <thead>
//               <tr>
//                 <th>NPM</th>
//                 <th>Nama</th>
//                 <th>Tanggal Pinjam</th>
//                 <th>Nama Buku</th>
//                 <th>Jurusan</th>
//                 <th>Performance</th>
//                 <th>Status</th>
//                 <th>Aksi</th>
//               </tr>
//             </thead>
//             <tbody>
//               {sortedData.map((row, index) => (
//                 <tr key={index}>
//                   <td>{row.npm}</td>
//                   <td>{row.vehicle}</td>
//                   <td>{row.tglPinjam}</td>
//                   <td>{row.nmBuku}</td>
//                   <td>{row.jurusan}</td>
//                   <td>{row.performance}</td>
//                   <td>{row.status}</td>
//                   <td>
//                     <Button
//                       variant="danger"
//                       size="sm"
//                       onClick={() => this.handleDelete(index)}
//                     >
//                       <FaTrash />
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>

//           {/* Pop-up FormPinjam */}
//           {isFormPinjamOpen && (
//             <Popup
//               open
//               closeOnDocumentClick
//               onClose={() => this.setState({ isFormPinjamOpen: false })}
//             >
//               <FormPinjam addNewData={this.props.addNewData} />
//             </Popup>
//           )}
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default TabelNav;


//INI YG KOSONG
// import React, { Component } from "react";
// import { Table, Form, Row, Col, Button } from "react-bootstrap";
// import { FaArrowAltCircleRight, FaMap, FaPlusCircle, FaPlus, FaTrash } from "react-icons/fa";
// import Popup from "reactjs-popup";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./tabelnav.css";
// import { NavLink } from "react-router-dom";
// import FormPinjam from "./FormPinjam";

// const selectOptions = {
//   0: "Belum di kembalikan",
//   1: "Selesai"
// };



// class TabelNav extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchNPM: "",
//       sortField: "name",
//       sortOrder: "asc",
//       isFormPinjamOpen: false // state untuk mengatur tampilan pop-up
//     };
//     this.handleSearchChange = this.handleSearchChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleSearchChange(event) {
//     const searchNPM = event.target.value;
//     this.setState({
//       searchNPM
//     });
//   }

//   handleClick() {
//     this.setState((state) => ({
//       isFormPinjamOpen: true // Mengubah state untuk menampilkan pop-up FormPinjam
//     }));
//   }

//   handleSort = (field) => {
//     this.setState((prevState) => ({
//       sortField: field,
//       sortOrder: prevState.sortOrder === "asc" ? "desc" : "asc"
//     }));
//   };


  

//   render() {
//     const { searchNPM, sortField, sortOrder, isFormPinjamOpen } = this.state;

   

//     return (
//       <React.Fragment>
//         <div className="App">
//           <h6 style={{ color: "white", fontFamily: "sans-serif", fontWeight: "bold" }}>
//             Data Peminjaman Buku
//           </h6>
//           <Row>
//             <Col xs={7}>
//               <Form.Control
//                 type="text"
//                 placeholder="Cari data berdasarkan npm"
//                 value={searchNPM}
//                 onChange={this.handleSearchChange}
//               />
//             </Col>
//             <Col xs={0} className="text-right">
//               <Button
//                 variant="light"
//                 onClick={this.handleClick}
//                 style={{
//                   marginRight: "-100px",
//                   height: "30px",
//                   paddingTop: "2px",
//                   borderRadius: "2px",
//                   position: "relative",
//                   marginTop: "15px"
//                 }}
//               >
//                 <FaPlus className="mr-1" />
//                 Tambahkan Data
//               </Button>
//             </Col>
//           </Row>
//           <br />

//           <Table striped bordered hover responsive style={{ color: "#320B44", padding: "10px" }}>
//             <thead>
//               <tr>
//                 <th>NPM</th>
//                 <th>Nama</th>
//                 <th>Tanggal Pinjam</th>
//                 <th>Nama Buku</th>
//                 <th>Jurusan</th>
//                 <th>Performance</th>
//                 <th>Status</th>
//                 <th>Aksi</th>
//               </tr>
//             </thead>
//             <tbody>
//             </tbody>
//           </Table>

//           {/* Pop-up FormPinjam */}
//           {isFormPinjamOpen && (
//             <Popup
//               open
//               closeOnDocumentClick
//               onClose={() => this.setState({ isFormPinjamOpen: false })}
//             >
//               <FormPinjam addNewData={this.props.addNewData} />
//             </Popup>
//           )}
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default TabelNav;

//YG INI UDH BISA CUMA GADA WARNANYA
import React, { Component } from "react";
import { Table, Form, Row, Col, Button } from "react-bootstrap";
import { FaArrowAltCircleRight, FaMap, FaPlusCircle, FaPlus, FaTrash } from "react-icons/fa";
import Popup from "reactjs-popup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tabelnav.css";
import { NavLink } from "react-router-dom";
import FormPinjam from "./FormPinjam";

const selectOptions = {
  0: "Belum di kembalikan",
  1: "Selesai"
};

class TabelNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchNPM: "",
      sortField: "name",
      sortOrder: "asc",
      isFormPinjamOpen: false, // state untuk mengatur tampilan pop-up
      pinjamData: [] // state untuk menyimpan data peminjaman
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSearchChange(event) {
    const searchNPM = event.target.value;
    this.setState({
      searchNPM
    });
  }

  handleClick() {
    this.setState((state) => ({
      isFormPinjamOpen: true // Mengubah state untuk menampilkan pop-up FormPinjam
    }));
  }

  handleSort = (field) => {
    this.setState((prevState) => ({
      sortField: field,
      sortOrder: prevState.sortOrder === "asc" ? "desc" : "asc"
    }));
  };

  addNewData = (newData) => {
    this.setState((prevState) => ({
      pinjamData: [...prevState.pinjamData, newData],
      isFormPinjamOpen: false // Menutup pop-up FormPinjam setelah menambahkan data
    }));
  };

  render() {
    const { searchNPM, sortField, sortOrder, isFormPinjamOpen, pinjamData } = this.state;

    return (
      <React.Fragment>
        <div className="App">
          <h6 style={{ color: "white", fontFamily: "sans-serif", fontWeight: "bold" }}>
            Data Peminjaman Buku
          </h6>
          <Row>
            <Col xs={7}>
              <Form.Control
                type="text"
                placeholder="Cari data berdasarkan npm"
                value={searchNPM}
                onChange={this.handleSearchChange}
              />
            </Col>
            <Col xs={0} className="text-right">
              <Button
                variant="light"
                onClick={this.handleClick}
                style={{
                  marginRight: "-100px",
                  height: "30px",
                  paddingTop: "2px",
                  borderRadius: "2px",
                  position: "relative",
                  marginTop: "15px"
                }}
              >
                <FaPlus className="mr-1" />
                Tambahkan Data
              </Button>
            </Col>
          </Row>
          <br />

          <Table striped bordered hover responsive style={{ color: "#320B44", padding: "10px" }}>
            <thead>
              <tr>
                <th>NPM</th>
                <th>Nama</th>
                <th>Tanggal Pinjam</th>
                <th>Nama Buku</th>
                <th>Jurusan</th>
                <th>Performance</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pinjamData.map((data, index) => (
                <tr key={index}>
                  <td>{data.npm}</td>
                  <td>{data.nama}</td>
                  <td>{data.tglPinjam}</td>
                  <td>{data.nmBuku}</td>
                  <td>{data.jurusan}</td>
                  <td>{data.performance}</td>
                  {/* <td>{selectOptions[data.status]}</td>  */}
                  <td>
                    {/* Action buttons */}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pop-up FormPinjam */}
          {isFormPinjamOpen && (
            <Popup
              open
              closeOnDocumentClick
              onClose={() => this.setState({ isFormPinjamOpen: false })}
            >
              <FormPinjam addNewData={this.addNewData} />
            </Popup>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default TabelNav;






