import React from 'react';
// import Iframe from 'react-iframe';

class ThreeSpace extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      html: 
      `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>3_space</title>
          <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
        </head>
        <body>
          <a-scene background="color: #ECECEC">
            <a-plane position="0 0 0" rotation="-90 0 0" width="4" height="4" color="#000000" shadow></a-plane>
          </a-scene>
        </body>
      </html>`
    };
  }

  render() {
    return (
      <iframe title="3space" srcdoc={this.state.html} >Template</iframe>
    );
  }
}

export default ThreeSpace;