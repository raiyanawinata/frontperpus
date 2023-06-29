

//RESPONSIVE

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
      isFormPinjamOpen: false,
      pinjamData: [],
      selectedStatus: "",
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
      isFormPinjamOpen: true,
    }));
  }



  addNewData = (newData) => {
    this.setState((prevState) => ({
      pinjamData: [...prevState.pinjamData, newData],
      isFormPinjamOpen: false,
    }));
    this.fetchData();
  };

  handleDelete = (index) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
    if (confirmDelete) {
      const { pinjamData } = this.state;
      const dataToDelete = pinjamData[index];

      axios.delete(`http://localhost:4000/peminjaman/${dataToDelete.id}`)
        .then(() => {
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

  calculateTenggatWaktu = (tglPinjam) => {
    const tglPinjamDate = new Date(tglPinjam);
    const tenggatWaktuDate = new Date(tglPinjam);
    tenggatWaktuDate.setDate(tglPinjamDate.getDate() + 14);
    return tenggatWaktuDate.toLocaleDateString("en-US");
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
  
    const { id } = newData[index];
  
    // Mengirim permintaan PUT ke backend menggunakan Axios untuk memperbarui data tanggal pengembalian
    axios.put(`http://localhost:4000/peminjaman/${id}`, { tglPengembalian })
      .then((response) => {
        console.log("Data tanggal pengembalian berhasil diperbarui:", response.data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat memperbarui data tanggal pengembalian:", error);
      });
  };
  

  componentDidMount() {
    this.fetchData();
  }

  fetchData = ()=>{
    axios.get("http://localhost:4000/peminjaman")
      .then((response) => {
        this.setState({ pinjamData: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { isFormPinjamOpen } = this.state;
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
                <th>NPM</th>
                <th>Nama</th>
                <th>Tanggal Pinjam</th>
                <th>Nama Buku</th>
                <th>Jurusan</th>
                <th>Tanggal Pengembalian</th>
                <th>Tenggat Waktu</th>
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
                  <td>{this.calculateTenggatWaktu(data.tglPinjam)}</td>
                  <td>{selectOptions[data.status]}</td>
                  <td>
                    <FaTrash className="icon-delete" onClick={() => this.handleDelete(index)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>

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

