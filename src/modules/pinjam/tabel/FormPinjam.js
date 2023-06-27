

import React, { Component } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import "./formP.css";
import axios from "axios";

class FormPinjam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      npm: "",
      nama: "",
      tglPinjam: "",
      nmBuku: "",
      jurusan: "",
      tenggatWaktu: "",
      showModal:false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.name === "tglPinjam") {
      const tglPinjam = new Date(event.target.value);
      const tglTenggat = new Date(tglPinjam.getTime() + 14 * 24 * 60 * 60 * 1000);
      const formattedTglTenggat = this.formatDate(tglTenggat);
      this.setState({ tenggatWaktu: formattedTglTenggat });
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { npm, nama, tglPinjam, nmBuku, jurusan, tenggatWaktu } = this.state;

    try {
      // Kirim permintaan POST ke backend menggunakan Axios
      const response = await axios.post("http://localhost:4000/peminjaman", {
        npm,
        nama,
        tglPinjam,
        nmBuku,
        jurusan,
        tenggatWaktu,
      });

      console.log(response.data); // Response dari backend (data peminjaman baru)

      // Tambahkan data baru ke dalam tabel menggunakan fungsi addNewData
    this.props.addNewData(response.data);

      //menampilkan modal
      this.setState({showModal:true});

      // Reset form setelah submit
      this.setState({
        npm: "",
        nama: "",
        tglPinjam: "",
        nmBuku: "",
        jurusan: "",
        tenggatWaktu: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

    handleModalClose = ()=>{
      //menyembunyikan modal
      this.setState({showModal:false});
    }

  formatDate = (date) => {
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  render() {
    const { npm, nama, tglPinjam, nmBuku, jurusan, tenggatWaktu, showModal } = this.state;

    return (
      <div className="container-2">
        <h6 style={{ color: "black", fontFamily: "sans-serif", fontWeight: "bold" }}>Form Peminjaman Buku</h6>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="formNPM">
            <Form.Label column sm={3} className="text-right">
              NPM
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="npm"
                value={npm}
                onChange={this.handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formNama">
            <Form.Label column sm={3} className="text-right">
              Nama
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="nama"
                value={nama}
                onChange={this.handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formTglPinjam">
            <Form.Label column sm={3} className="text-right">
              Tanggal Pinjam
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="date"
                name="tglPinjam"
                value={tglPinjam}
                onChange={this.handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formNmBuku">
            <Form.Label column sm={3} className="text-right">
              Nama Buku
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="nmBuku"
                value={nmBuku}
                onChange={this.handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formJurusan">
            <Form.Label column sm={3} className="text-right">
              Jurusan
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="jurusan"
                value={jurusan}
                onChange={this.handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPerformance">
            <Form.Label column sm={3} className="text-right">
              Tenggat Waktu
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="tglTenggat"
                value={tenggatWaktu}
                onChange={this.handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 9, offset: 3 }}>
              <Button type="submit" variant="primary">
                Simpan
              </Button>
            </Col>
          </Form.Group>
        </Form>

        {/* Modal */}
        <Modal show={showModal} onHide={this.handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Data Berhasil Ditambahkan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Data peminjaman berhasil ditambahkan.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleModalClose}>
              Oke
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

export default FormPinjam;






