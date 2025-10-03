import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-copywright" style={{ textAlign: "center" }}>
          <h3>Digital portfolio of Syed Shayan Haider</h3>
          <p>Open to new opportunities – Let’s collaborate</p>
          <p>© {year} All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
