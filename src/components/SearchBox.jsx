import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const SearchBox = () => {
  return (
    <Row>
      <Col lg={10}>
        <Form.Control type="text" placeholder="Enter text" />
      </Col>
      <Col lg={2}>
        <button>Search</button>
      </Col>
    </Row>
  );
};

export default SearchBox;
