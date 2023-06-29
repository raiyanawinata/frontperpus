import React, { Component } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import "./formC.css";
import axios from "axios";

class FormCol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idBuku: "",
      nmBuku: "",
      penulis: "",
      thnTerbit: "",
      tglMasuk: "",
      jumlahBuku: "",
      noRak: "",
      showModal:false,
    };
  }


  handleSubmit = async (event) => {
    event.preventDefault();
    const { idBuku,nmBuku,penulis,thnTerbit,tglMasuk,jumlahBuku,noRak } = this.state;

    try {
      // Kirim permintaan POST ke backend menggunakan Axios
      const response = await axios.post("http://localhost:4000/create/collection", {
        idBuku,
        nmBuku,
        penulis,
        thnTerbit,
        tglMasuk,
        jumlahBuku,
        noRak,
        showModal:false,
      });

      console.log(response.data); // Response dari backend (data peminjaman baru)

      // Tambahkan data baru ke dalam tabel menggunakan fungsi addNewData
    this.props.addNewData(response.data);

      //menampilkan modal
      this.setState({showModal:true});

      // Reset form setelah submit
      this.setState({
       idBuku:"",
       nmBuku:"",
       penulis: "",
       thnTerbit:"",
       tglMasuk:"",
       jumlahBuku:"",
       noRak:"",
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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  

  render() {
    const { idBuku,nmBuku,penulis,thnTerbit,tglMasuk,jumlahBuku,noRak, showModal } = this.state;
    
    return (
      <div className="container-2">
        <h6 style={{ color: "black", fontFamily: "sans-serif", fontWeight: "bold" }}>Form Peminjaman Buku</h6>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="formIdBuku">
            <Form.Label column sm={3} className="text-right">
              Id Buku
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="idBuku"
                value={idBuku}
                onChange={this.handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formNamaBuku">
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

          <Form.Group as={Row} controlId="formPenulis">
            <Form.Label column sm={3} className="text-right">
              Penulis Buku
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="penulis"
                value={penulis}
                onChange={this.handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formThTerbit">
            <Form.Label column sm={3} className="text-right">
              Tahun Terbit
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="date"
                name="thnTerbit"
                value={thnTerbit}
                onChange={this.handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formTglMasuk">
            <Form.Label column sm={3} className="text-right">
              Tanggal Masuk Buku
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="date"
                name="tglMasuk"
                value={tglMasuk}
                onChange={this.handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formJumlahBuku">
            <Form.Label column sm={3} className="text-right">
              Jumlah Buku
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="jumlahBuku"
                value={jumlahBuku}
                onChange={this.handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formNorak">
            <Form.Label column sm={3} className="text-right">
              No Rak Buku
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="noRak"
                value={noRak}
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
            <p>Data koleksi berhasil ditambahkan.</p>
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

export default FormCol;
