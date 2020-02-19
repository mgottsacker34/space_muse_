import React from 'react';
import ReactDOM from 'react-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../Styles/Create.css';

function Create() {
  return (
    <Container className="Create" fluid="lg">
      <Row>
        <Col className="param-space" lg={3}>
          <h1>Create</h1>
        </Col>
        <Col className="three-space" lg={9}>

        </Col>
      </Row>
    </Container>
  );
}

export default Create;