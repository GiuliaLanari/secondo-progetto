import { Col, Container, Row } from "react-bootstrap";

const MyFooter = function () {
  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col xs={12} md={3} lg={4}>
          <a href="./job.html">Jobs</a>
        </Col>
        <Col xs={12} md={3} lg={4}>
          <a href="./help.html">Hepl center</a>
        </Col>
        <Col xs={12} md={3} lg={4}>
          <a href="./privacy.html">Privacy</a>
        </Col>
        <Col xs={12} md={3} lg={4}>
          <a href="./contact.html">Contact us</a>
        </Col>
        <Col xs={12} md={3} lg={4}>
          <a href="./cookie.html">Cookie Preferences</a>
        </Col>
        <Col xs={12} md={3} lg={4}>
          <a href="./legal.html">Legal Notices</a>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3">
          <p> &copy; EpiBooks</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
