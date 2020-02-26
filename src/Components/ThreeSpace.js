import React from 'react';

class ThreeSpace extends React.Component {

  render() {
    return (
      <iframe title="3space" srcDoc={this.props.aframeXML} >Template</iframe>
    );
  }
}

export default ThreeSpace;