
import React, { Component } from "react";
import { Table, Form, Row, Col, Button } from "react-bootstrap";
import { FaArrowAltCircleRight, FaMap, FaPlusCircle,FaPlus } from "react-icons/fa";
import Popup from "reactjs-popup";
// import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tabelnav.css";

const selectOptions = {
  0: "Belum di kembalikan",
  1: "Selesai"
};

const data = [
  {
    name: "202310018",
    vehicle: "Raiyana Jan Winata",
    tglPinjam: "28-01-2023",
    nmBuku: "Belajar Java",
    jurusan: "Teknologi Informasi",
    performance: "1-02-2023",
    status: selectOptions[1]
  },
  {
    name: "202310017",
    vehicle: "Novi",
    tglPinjam: "28-01-2023",
    nmBuku: "Belajar Java",
    jurusan: "Teknologi Informasi",
    performance: "1-02-2023",
    status: selectOptions[0]
  },
  {
    name: "202310010",
    vehicle: "Thesya",
    tglPinjam: "28-01-2023",
    nmBuku: "Belajar Java",
    jurusan: "Teknologi Informasi",
    performance: "1-02-2023",
    status: selectOptions[1]
  },
  {
    name: "202310019",
    vehicle: "Mervin",
    tglPinjam: "28-01-2023",
    nmBuku: "Belajar Java",
    jurusan: "Teknologi Informasi",
    performance: "1-02-2023",
    status: selectOptions[0]
  },
  {
    name: "202310020",
    vehicle: "Yudhis",
    tglPinjam: "28-01-2023",
    nmBuku: "Belajar Java",
    jurusan: "Teknologi Informasi",
    performance: "1-02-2023",
    status: selectOptions[1]
  },
  {
    name: "202310001",
    vehicle: "Ilham",
    tglPinjam: "28-01-2023",
    nmBuku: "Belajar Java",
    jurusan: "Teknologi Informasi",
    performance: "1-02-2023",
    status: selectOptions[1]
  },
]
class TabelNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchNPM: "",
      sortField: "name",
      sortOrder: "asc"
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
    this.setState(state => ({
      // set the state for icons
    }));
    console.log(this.state);
  }

  handleSort = field => {
    this.setState(prevState => ({
      sortField: field,
      sortOrder: prevState.sortOrder === "asc" ? "desc" : "asc"
    }));
  };

  render() {
    const { searchNPM, sortField, sortOrder } = this.state;

    // Filter data berdasarkan NPM yang diinput
    const filteredData = data.filter(row => row.name.includes(searchNPM));

    // Sortir data berdasarkan field dan order yang dipilih
    const sortedData = [...filteredData].sort((a, b) => {
      const fieldValueA = a[sortField];
      const fieldValueB = b[sortField];
      if (fieldValueA < fieldValueB) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (fieldValueA > fieldValueB) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });

    return (
      <React.Fragment>
        <div className="App">
        <h6 style={{ color: "white", fontFamily: "sans-serif", fontWeight: "bold" }}>Data Peminjaman Buku</h6>
          <Row>
          <Col xs={7}>
              <Form.Control
                type="text"
                placeholder="Cari data berdasarkan npm"
                value={searchNPM}
                onChange={this.handleSearchChange}
              />
            </Col>
            <Col xs={0} className="text-right" >
              <Button variant="light" onClick={this.handleClick} style={{marginRight:"-100px", height:"30px", paddingTop:"2px", borderRadius:"2px", position:"relative", marginTop:"15px"}}>
                <FaPlus className="mr-1" />
                Tambahkan Data
              </Button>
            </Col>
          </Row>
          <br/>
          

         
          
          <Table striped bordered hover responsive style={{ color: "#320B44", padding:"10px" }}>
            <thead>
              <tr>
                <th className="cellWeight600" onClick={() => this.handleSort("name")}>
                  NPM {sortField === "name" && <span>{sortOrder === "asc" ? "▲" : "▼"}</span>}
                </th>
                <th className="pointer" onClick={() => this.handleSort("vehicle")}>
                  Nama {sortField === "vehicle" && <span>{sortOrder === "asc" ? "▲" : "▼"}</span>}
                </th>
                <th onClick={() => this.handleSort("tglPinjam")}>
                  Tanggal Pinjam {sortField === "tglPinjam" && <span>{sortOrder === "asc" ? "▲" : "▼"}</span>}
                </th>
                <th onClick={() => this.handleSort("nmBuku")}>
                  Nama Buku {sortField === "nmBuku" && <span>{sortOrder === "asc" ? "▲" : "▼"}</span>}
                </th>
                <th onClick={() => this.handleSort("jurusan")}>
                  Jurusan {sortField === "jurusan" && <span>{sortOrder === "asc" ? "▲" : "▼"}</span>}
                </th>
                <th onClick={() => this.handleSort("performance")}>
                  Tenggat Waktu {sortField === "performance" && <span>{sortOrder === "asc" ? "▲" : "▼"}</span>}
                </th>
                <th onClick={() => this.handleSort("status")}>
                  Status {sortField === "status" && <span>{sortOrder === "asc" ? "▲" : "▼"}</span>}
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.vehicle}</td>
                  <td>{row.tglPinjam}</td>
                  <td>{row.nmBuku}</td>
                  <td>{row.jurusan}</td>
                  <td>{row.performance}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </React.Fragment>
    );
  }
}

export default TabelNav;



