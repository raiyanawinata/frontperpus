

import React, { Component } from "react";
import { Table, Form, Row, Col, Button } from "react-bootstrap";
import { FaArrowAltCircleRight, FaMap, FaPlusCircle, FaPlus, FaTrash } from "react-icons/fa";
import Popup from "reactjs-popup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tabelnav.css";
import { NavLink } from "react-router-dom";
import FormPinjam from "./FormPinjam";
import axios from "axios";


const selectOptions = {
  0: "Belum dikembalikan",
  1: "Sudah dikembalikan",
};

class TabelNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      sortField: "name",
      sortOrder: "asc",
      isFormPinjamOpen: false, // state untuk mengatur tampilan pop-up
      pinjamData: [], // state untuk menyimpan data peminjaman
      selectedStatus: "", // state untuk menyimpan status yang dipilih
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSearchChange(event) {
    const searchQuery = event.target.value;
    this.setState({
      searchQuery,
    });
  }

  handleClick() {
    this.setState((state) => ({
      isFormPinjamOpen: true, // Mengubah state untuk menampilkan pop-up FormPinjam
    }));
  }

  handleSort = (field) => {
    this.setState((prevState) => ({
      sortField: field,
      sortOrder: prevState.sortOrder === "asc" ? "desc" : "asc",
    }));
  };

  addNewData = (newData) => {
    this.setState((prevState) => ({
      pinjamData: [...prevState.pinjamData, newData],
      isFormPinjamOpen: false, // Menutup pop-up FormPinjam setelah menambahkan data
    }));
  };

  handleDelete = (index) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
    if (confirmDelete) {
      const { pinjamData } = this.state;
      const dataToDelete = pinjamData[index];
  
      // Mengirim permintaan DELETE ke backend menggunakan Axios
      axios.delete(`http://localhost:4000/peminjaman/${dataToDelete.id}`)
        .then(() => {
          // Menghapus data dari state pinjamData
          pinjamData.splice(index, 1);
          this.setState({ pinjamData });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("Menghapus data dibatalkan");
    }
  };
  

  filterData = () => {
    const { pinjamData, searchQuery } = this.state;
    const filteredData = pinjamData.filter(
      (data) =>
        data.npm.includes(searchQuery) ||
        data.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.nmBuku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.jurusan.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.tglPinjam.includes(searchQuery)
    );
    return filteredData;
  };

  handlePengembalianChange = (index, event) => {
    const { pinjamData } = this.state;
    const newData = [...pinjamData];
    const tglPengembalian = event.target.value;

    newData[index].tglPengembalian = tglPengembalian;
    newData[index].status = tglPengembalian ? 1 : 0;

    this.setState({ pinjamData: newData });
  };

  componentDidMount() {
    // Mengambil data peminjaman dari database
    axios.get("http://localhost:4000/peminjaman")
      .then((response) => {
        // Mengupdate state pinjamData dengan data yang diterima
        this.setState({ pinjamData: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  render() {
    const { sortField, sortOrder, isFormPinjamOpen } = this.state;
    const filteredData = this.filterData();

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
                placeholder="Search Data"
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
                  marginTop: "15px",
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
                <th>Tanggal Pengembalian</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((data, index) => (
                <tr key={index}>
                  <td>{data.npm}</td>
                  <td>{data.nama}</td>
                  <td>{data.tglPinjam}</td>
                  <td>{data.nmBuku}</td>
                  <td>{data.jurusan}</td>
                  <td>
                    <input
                      type="date"
                      value={data.tglPengembalian || ""}
                      onChange={(event) => this.handlePengembalianChange(index, event)}
                    />
                  </td>
                  <td>{selectOptions[data.status]}</td>
                  <td>
                    <FaTrash className="icon-delete" onClick={() => this.handleDelete(index)} />
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


// import { Table, Form, Row, Col, Button } from "react-bootstrap";
// import { FaArrowAltCircleRight, FaMap, FaPlusCircle, FaPlus, FaTrash } from "react-icons/fa";
// import Popup from "reactjs-popup";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./tabelnav.css";
// import { NavLink } from "react-router-dom";
// import FormPinjam from "./FormPinjam";
// import axios from "axios";


// const selectOptions = {
//   0: "Belum dikembalikan",
//   1: "Sudah dikembalikan",
// };

// class TabelNav extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentPage:1,
//       pageSize:10,
//       searchQuery: "",
//       sortField: "name",
//       sortOrder: "asc",
//       isFormPinjamOpen: false, // state untuk mengatur tampilan pop-up
//       pinjamData: [], // state untuk menyimpan data peminjaman
//       selectedStatus: "", // state untuk menyimpan status yang dipilih
//     };
//     this.handleSearchChange = this.handleSearchChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleSearchChange(event) {
//     const searchQuery = event.target.value;
//     this.setState({
//       searchQuery,
//     });
//   }

//   handleClick() {
//     this.setState((state) => ({
//       isFormPinjamOpen: true, // Mengubah state untuk menampilkan pop-up FormPinjam
//     }));
//   }

//   handleSort = (field) => {
//     this.setState((prevState) => ({
//       sortField: field,
//       sortOrder: prevState.sortOrder === "asc" ? "desc" : "asc",
//     }));
//   };

//   addNewData = (newData) => {
//     this.setState((prevState) => ({
//       pinjamData: [...prevState.pinjamData, newData],
//       isFormPinjamOpen: false, // Menutup pop-up FormPinjam setelah menambahkan data
//     }));
//   };

//   handleDelete = (index) => {
//     const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
//     if (confirmDelete) {
//       const { pinjamData } = this.state;
//       const dataToDelete = pinjamData[index];
  
//       // Mengirim permintaan DELETE ke backend menggunakan Axios
//       axios.delete(`http://localhost:4000/peminjaman/${dataToDelete.id}`)
//         .then(() => {
//           // Menghapus data dari state pinjamData
//           pinjamData.splice(index, 1);
//           this.setState({ pinjamData });
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     } else {
//       console.log("Menghapus data dibatalkan");
//     }
//   };
  

//   filterData = () => {
//     const { pinjamData, searchQuery, currentPage, pageSize } = this.state;
  
//     // Filter data berdasarkan pencarian
//     const filteredData = pinjamData.filter(
//       (data) =>
//         data.npm.includes(searchQuery) ||
//         data.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         data.nmBuku.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         data.jurusan.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         data.tglPinjam.includes(searchQuery)
//     );
  
//     // Menghitung indeks data awal dan akhir untuk halaman saat ini
//     const startIndex = (currentPage - 1) * pageSize;
//     const endIndex = startIndex + pageSize;
  
//     // Mengembalikan data yang sesuai dengan halaman saat ini
//     return filteredData.slice(startIndex, endIndex);
//   };
  

//   handlePengembalianChange = (index, event) => {
//     const { pinjamData } = this.state;
//     const newData = [...pinjamData];
//     const tglPengembalian = event.target.value;

//     newData[index].tglPengembalian = tglPengembalian;
//     newData[index].status = tglPengembalian ? 1 : 0;

//     this.setState({ pinjamData: newData });
//   };

//   componentDidMount() {
//     // Mengambil data peminjaman dari database
//     axios.get("http://localhost:4000/peminjaman")
//       .then((response) => {
//         // Mengupdate state pinjamData dengan data yang diterima
//         this.setState({ pinjamData: response.data });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   goToPage = (page) => {
//     this.setState({
//       currentPage: page,
//     });
//   };
  
  
//   render() {
//     const { sortField, sortOrder, isFormPinjamOpen } = this.state;
//     const filteredData = this.filterData();
//     const { currentPage, pageSize } = this.state;
//    const totalPages = Math.ceil(filteredData.length / pageSize);

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
//                 placeholder="Search Data"
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
//                   marginTop: "15px",
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
//                 <th>Tanggal Pengembalian</th>
//                 <th>Status</th>
//                 <th>Aksi</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.map((data, index) => (
//                 <tr key={index}>
//                   <td>{data.npm}</td>
//                   <td>{data.nama}</td>
//                   <td>{data.tglPinjam}</td>
//                   <td>{data.nmBuku}</td>
//                   <td>{data.jurusan}</td>
//                   <td>
//                     <input
//                       type="date"
//                       value={data.tglPengembalian || ""}
//                       onChange={(event) => this.handlePengembalianChange(index, event)}
//                     />
//                   </td>
//                   <td>{selectOptions[data.status]}</td>
//                   <td>
//                     <FaTrash className="icon-delete" onClick={() => this.handleDelete(index)} />
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
//               <FormPinjam addNewData={this.addNewData} />
//             </Popup>
//           )}
          
//         </div>
//         <div className="pagination">
//         <Button
//           variant="secondary"
//           onClick={() => this.goToPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Prev
//         </Button>
//         <span>{`Page ${currentPage} of ${totalPages}`}</span>
//         <Button
//           variant="secondary"
//           onClick={() => this.goToPage(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </Button>
//       </div>
//       </React.Fragment>
//     );
//   }
// }

// export default TabelNav;




