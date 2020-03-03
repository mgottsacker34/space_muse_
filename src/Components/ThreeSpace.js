import React from 'react';

class ThreeSpace extends React.Component {

  render() {

    return (
      <iframe title="3space" srcDoc={this.props.aframeXML} >A-Frame VR Experience</iframe>
    );
  }
}

export default ThreeSpace;