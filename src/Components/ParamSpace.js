import React from 'react';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import CreateAFC from './CreateAFC';

import '../Styles/ParamSpace.css';

class ParamSpace extends React.Component {

  constructor(props) {
    super(props);
    this.handleNewAFC = this.handleNewAFC.bind(this);
  }

  handleNewAFC(AFCObj) {
    // let xml_new = `<a-scene background="color: #ECECEC"><a-plane position="0 0 0" rotation="-90 0 0" width="4" height="4" color="#000000" shadow></a-plane>` + xml + `</a-scene>`;
    this.props.handleNewAFC(AFCObj);
  }

  render() {
    return (
      <div className="ParamSpace">
        <div className="outer">
          <div className="annotations">
            <h5>annotations</h5>
            <table className="noteTable">
              <tr className="noteHeadRow">
                <th className="thType">type</th>
                <th className="thTime">time</th>
                <th className="thDetails">details</th>
              </tr>
              {this.props.aframeComponents.map(AFCObj => (
                <tr className="noteRow" key={AFCObj.idx}>
                  <td className="tdType">{AFCObj.annotation_type}</td>
                  <td className="tdTime">{AFCObj.time}</td>
                  <td className="tdDetails">{AFCObj.textarea_text}</td>
                </tr>
                ))}
              </table>
            <hr />
          </div>
            <h5>create annotation</h5>
              {/*
                <Row key={AFCObj.idx}>
                  {AFCObj.idx}
                </Row>
              */}
          <CreateAFC onAddAFC={this.handleNewAFC} />
        </div>
      </div>
    );
  }
}

export default ParamSpace;