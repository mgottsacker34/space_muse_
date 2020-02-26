import React from 'react';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';

import CreateAFC from './CreateAFC';

import '../Styles/ParamSpace.css';

class ParamSpace extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeXML = this.handleChangeXML.bind(this);
  }

  handleChangeXML(xml) {
    let xml_new = `<a-scene background="color: #ECECEC"><a-plane position="0 0 0" rotation="-90 0 0" width="4" height="4" color="#000000" shadow></a-plane>` + xml + `</a-scene>`;
    this.props.handleChangeXML(xml_new);
  }

  render() {
    return (
      <div className="ParamSpace">
        <div className="outer">
          <CreateAFC onAddAFC={this.handleChangeXML} />
        </div>
      </div>
    );
  }
}

export default ParamSpace;