
import React, { useState } from 'react';
import {Container,Navbar} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ModalCom = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    <Container>
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
      <Button variant="primary" onClick={handleShow}>
        Company Info
      </Button>      </Container>
    </Navbar>
  </Container>

  <>
     

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Geeksynergy Technologies Pvt Ltd</Modal.Title>
        </Modal.Header>
        <Modal.Body>
     Company: Geeksynergy Technologies Pvt Ltd
Address: Sanjayanagar, Bengaluru-56
Phone: XXXXXXXXX09
Email: XXXXXX@gmail.com

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  </div>
  )
}

export default ModalCom