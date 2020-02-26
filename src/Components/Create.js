import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../Styles/Create.css';
import ThreeSpace from './ThreeSpace';
import ParamSpace from './ParamSpace';

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      aframeXML_pre: `<!DOCTYPE html><html><head><meta charset="utf-8"><title>3_space</title><script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script></head><body>`,
      aframeXML_user: `<a-scene background="color: #ECECEC"><a-plane position="0 0 0" rotation="-90 0 0" width="4" height="4" color="#000000" shadow></a-plane></a-entity></a-scene>`,
      aframeXML_post: `</body></html>`,
      aframeXML_all: ``
    };

    this.handleChangeXML = this.handleChangeXML.bind(this);
  }

  handleChangeXML(xml) {
    let aframeXML_new = this.state.aframeXML_pre + xml + this.state.aframeXML_post;
    this.setState({ aframeXML_all:  aframeXML_new });
    // console.log(xml);
    // console.log(aframeXML_new);
    console.log(this.state.aframeXML_all);
  }

  render() {
    return (
      <Container className="Create" fluid>
        <Row>
          <Col className="param-space" lg={4}>
            <ParamSpace handleChangeXML={this.handleChangeXML} />
          </Col>
          <Col className="three-space" lg={8}>
            <ThreeSpace aframeXML={this.state.aframeXML_all} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Create;