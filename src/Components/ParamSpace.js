import React from 'react';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';

import CreateAFC from './CreateAFC';

import '../Styles/ParamSpace.css';

class ParamSpace extends React.Component {

  // constructor(props) {
  //   super(props);
    
  // }

  render() {
    return (
      <div className="ParamSpace">
        <div className="outer">
          <CreateAFC />
          <CreateAFC />
          <CreateAFC />
          <CreateAFC />
          <CreateAFC />
        </div>
      </div>
    );
  }
}

export default ParamSpace;