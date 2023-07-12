// import React, { Component } from "react";
// import { Table, Form, Row, Col, Button } from "react-bootstrap";
// import { FaArrowAltCircleRight, FaMap, FaPlusCircle, FaPlus, FaEdit } from "react-icons/fa";
// import Popup from "reactjs-popup";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./tabelcol.css";
// import axios from "axios";
// import FormCol from "../form/FormCol";


// class TabelCol extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchQuery: "",
//       isFormColOpen: false,
//       koleksiData: [],
//       selectedDat: null,
//     };
//     this.handleSearchChange = this.handleSearchChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   //digunakan untuk menangani perubahan nilai pada input pencarian
//   handleSearchChange(event) {
//     const searchQuery = event.target.value; //engakses nilai yang dimasukkan oleh pengguna 
//     this.setState({
//       searchQuery,//komponen akan melakukan re-rendering dan memperbarui tampilan dengan memfilter data berdasarkan nilai pencarian yang baru.


//     });
//   }

//   //digunakan untuk menangani klik pada tombol "Tambahkan Data"
//   handleClick() {
//     this.setState((state) => ({
//       isFormColOpen: true, //diubah menjadi true, maka komponen Popup yang mengandung FormCol akan ditampilkan, sehingga pengguna dapat memasukkan data baru ke dalam tabel koleksi buku.
//     }));
//   }


//   //digunakan untuk menambahkan data baru ke dalam koleksi data dalam komponen TabelCol.
//   addNewData = (newData) => {
//     this.setState((prevState) => ({
//       koleksiDataData: [...prevState.koleksiData, newData], //mengupdate properti koleksiData dalam state untuk mencakup item data baru (newData) dalam array koleksi data yang sudah ada (prevState.koleksiData).
//       isFormColOpen: false,
//     }));
//     this.fetchData();
//   };

//   fetchData = ()=>{
//     axios.get("http://localhost:4000/collection")
//       .then((response) => {
//         this.setState({ koleksiData: response.data }); //menangani respons dari server dengan mengupdate state koleksiData menggunakan data yang diterima dari respons (response.data).
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
 
//   //menginisialisasi pengambilan data dari backend server pada saat komponen pertama kali dipasang.
//   componentDidMount() {
//     this.fetchData();
//   }

//   //digunakan untuk melakukan filter pada data koleksi dalam komponen TabelCol berdasarkan searchQuery yang ada dalam state.
//   filterData = () => {
//     const { koleksiData, searchQuery } = this.state;
//     const filteredData = koleksiData.filter((data) => {
//       const year = data.thnTerbit.toString(); // Konversi tahun terbit menjadi string
//       return (
//         data.idBuku.includes(searchQuery) ||
//         data.nmBuku.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         data.penulis.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         year.includes(searchQuery) // Cari berdasarkan tahun terbit
//       );
//     });
//     return filteredData;
//   };

//   handleEdit = (index) => {
//     const { koleksiData } = this.state;
//     const selectedData = koleksiData[index];
//     this.setState({
//       selectedData,
//       isFormColOpen: true,
//     });

//     this.fetchData();
//   };

//   render() {
//     const {isFormColOpen} = this.state;
//     const filteredData = this.filterData();
//     return (
//       <React.Fragment>
//         <div className="App">
//           <h6 style={{ color: "white", fontFamily: "sans-serif", fontWeight: "bold" }}>
//             Data Koleksi Buku
//           </h6>
//           <Row>
//             <Col xs={7}>
//               <Form.Control
//                 type="text"
//                 placeholder="Search Data"
//                 onChange={this.handleSearchChange}
//               />
//             </Col>
//             <Col xs={5} className="text-right">
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


//           <div className="table-responsive">
//           <Table striped bordered hover responsive style={{ color: "#320B44", padding: "10px" }}>
//             <thead>
//               <tr>
//                 <th>Id Buku</th>
//                 <th>Nama Buku</th>
//                 <th>Penulis</th>
//                 <th>Tahun Terbit</th>
//                 <th>Tanggal Masuk</th>
//                 <th>Jumlah Buku</th>
//                 <th>No Rak Buku</th>
//                 <th>Aksi</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.map((data, index) => (
//                 <tr key={index}>
//                   <td>{data.idBuku}</td>
//                   <td>{data.nmBuku}</td>
//                   <td>{data.penulis}</td>
//                   <td>{data.thnTerbit}</td>
//                   <td>{data.tglMasuk}</td>
//                   <td>{data.jumlahBuku}</td>
//                   <td>{data.noRak}</td>
//                   <td>
//                   <FaEdit className="icon-edit" onClick={() => this.handleEdit(index)} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//           </div>

//           {isFormColOpen && (
//             <Popup
//               open
//               closeOnDocumentClick
//               onClose={() => this.setState({ isFormColOpen: false })}
//             >
//               <FormCol addNewData={this.addNewData} />
//             </Popup>
//           )}
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default TabelCol;


import React, { Component } from "react";
import { Table, Form, Row, Col, Button } from "react-bootstrap";
import { FaArrowAltCircleRight, FaMap, FaPlusCircle, FaPlus, FaEdit } from "react-icons/fa";
import Popup from "reactjs-popup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tabelcol.css";
import axios from "axios";
import FormCol from "../form/FormCol";


class TabelCol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      isFormColOpen: false,
      koleksiData: [],
      selectedDat: null,
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
      isFormColOpen: true,
    }));
  }


  addNewData = (newData) => {
    this.setState((prevState) => ({
      koleksiData: [...prevState.koleksiData, newData],
      isFormColOpen: false,
    }));
    this.fetchData();
  };
  

  fetchData = ()=>{
    axios.get("http://localhost:4000/collection")
      .then((response) => {
        this.setState({ koleksiData: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }
 
  componentDidMount() {
    this.fetchData();
  }

  filterData = () => {
    const { koleksiData, searchQuery } = this.state;
    const filteredData = koleksiData.filter((data) => {
      const year = data.thnTerbit.toString(); // Konversi tahun terbit menjadi string
      return (
        data.idBuku.includes(searchQuery) ||
        data.nmBuku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.penulis.toLowerCase().includes(searchQuery.toLowerCase()) ||
        year.includes(searchQuery) // Cari berdasarkan tahun terbit
      );
    });
    return filteredData;
  };

  handleEdit = (index) => {
    const { koleksiData } = this.state;
    const selectedData = koleksiData[index];
    this.setState({
      selectedData,
      isFormColOpen: true,
    });

    this.fetchData();
  };

  render() {
    const {isFormColOpen} = this.state;
    const filteredData = this.filterData();
    return (
      <React.Fragment>
        <div className="App">
          <h6 style={{ color: "white", fontFamily: "sans-serif", fontWeight: "bold" }}>
            Data Koleksi Buku
          </h6>
          <Row>
            <Col xs={7}>
              <Form.Control
                type="text"
                placeholder="Search Data"
                onChange={this.handleSearchChange}
              />
            </Col>
            <Col xs={5} className="text-right">
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


          <div className="table-responsive">
          <Table striped bordered hover responsive style={{ color: "#320B44", padding: "10px" }}>
            <thead>
              <tr>
                <th>Id Buku</th>
                <th>Nama Buku</th>
                <th>Penulis</th>
                <th>Tahun Terbit</th>
                <th>Tanggal Masuk</th>
                <th>Jumlah Buku</th>
                <th>No Rak Buku</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((data, index) => (
                <tr key={index}>
                  <td>{data.idBuku}</td>
                  <td>{data.nmBuku}</td>
                  <td>{data.penulis}</td>
                  <td>{data.thnTerbit}</td>
                  <td>{data.tglMasuk}</td>
                  <td>{data.jumlahBuku}</td>
                  <td>{data.noRak}</td>
                  <td>
                  <FaEdit className="icon-edit" onClick={() => this.handleEdit(index)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>

          {isFormColOpen && (
            <Popup
              open
              closeOnDocumentClick
              onClose={() => this.setState({ isFormColOpen: false })}
            >
              <FormCol addNewData={this.addNewData} />
            </Popup>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default TabelCol;
