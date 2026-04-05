import React from 'react'
import { Row, Col } from "react-bootstrap";

const ContactItem = ({item}) => {
  return (
    <div>
      <Row>
        <Col lg={1}>
          <img width={50} src="https://i.namu.wiki/i/M0j6sykCciGaZJ8yW0CMumUigNAFS8Z-dJA9h_GKYSmqqYSQyqJq8D8xSg3qAz2htlsPQfyHZZMmAbPV-Ml9UA.webp" alt="" />
        </Col>
        <Col lg={11}>
          <div>{item.name}</div>
          <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  )
}

export default ContactItem