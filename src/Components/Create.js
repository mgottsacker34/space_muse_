import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../Styles/Create.css';
import ThreeSpace from './ThreeSpace';
import ParamSpace from './ParamSpace';

function Create() {
  return (
    <Container className="Create" fluid>
      <Row>
        <Col className="param-space offset" lg={3}>
          <ParamSpace />
        </Col>
        <Col className="three-space" lg={9}>
          <ThreeSpace />
        </Col>
      </Row>
    </Container>
  );
}

export default Create;