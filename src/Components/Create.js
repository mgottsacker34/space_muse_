import React from 'react';
import Iframe from 'react-iframe';

import ThreeSpace from './ThreeSpace';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../Styles/Create.css';

function Create() {
  return (
    <Container className="Create" fluid>
      <Row>
        <Col className="param-space" lg={3}>
          <h3>Create</h3>
        </Col>
        <Col className="three-space" lg={9}>
          <Iframe url={process.env.PUBLIC_URL + "/aframe-template.html"} >Template</Iframe>
          
        </Col>
      </Row>
    </Container>
  );
}

export default Create;