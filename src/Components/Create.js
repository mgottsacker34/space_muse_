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
      aframeBase: `<!DOCTYPE html><html><head><meta charset="utf-8"><title>3_space</title><script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script></head><body>`,
      aframeScene: `<a-scene background="color: #ECECEC"><a-plane position="0 0 0" rotation="-90 0 0" width="4" height="4" color="#000000" shadow></a-plane></a-entity>`,
      aframeClose: `</a-scene></body></html>`,
      aframeComponentObjs: [],
      aframeXML_all: ``
    };

    this.handleNewAFC = this.handleNewAFC.bind(this);
  }

  handleNewAFC(AFCObj) {
    // let aframeXML_new = this.state.aframeBase + xml + this.state.aframeClose;
    // this.setState({ aframeXML_all:  aframeXML_new });
    // console.log('COMPUTED AFRAME XML: \n' + this.state.aframeXML_all);
    let aframe_component_html = '<a-entity geometry="primitive: plane; ' + 
                      'height: ' + AFCObj.height + 
                      '; width: ' + AFCObj.width + '" ' +
                      'material="color: black" ' +
                      'text="value: ' + AFCObj.textarea_text + '; align: center" ' +
                      'position="' + AFCObj.x_pos + ' ' + AFCObj.y_pos + ' ' + AFCObj.z_pos + '" ' +
                      '></a-entity>';
    console.log(aframe_component_html);
    this.setState(function(state) {
      let arr = state.aframeComponentObjs;
      let obj = AFCObj;
      obj['html'] = aframe_component_html;
      obj['idx'] = arr.length;
      arr.push(obj);
      let aframeXML = state.aframeBase + state.aframeScene;
      for (let i = 0; i < arr.length; i++) {
        aframeXML += arr[i]['html'];
      }
      aframeXML += state.aframeClose;
      return {
        aframeComponentObjs: arr,
        aframeXML_all: aframeXML
      };
    });
    // console.log(this.state.aframeComponentObjs);
  }

  render() {
    return (
      <Container className="Create" fluid>
        <Row>
          <Col className="param-space" lg={4}>
            <ParamSpace handleNewAFC={this.handleNewAFC} aframeComponents={this.state.aframeComponentObjs} />
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