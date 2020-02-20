import React from 'react';
import Iframe from 'react-iframe';

import '../Styles/App.css';

function ThreeSpace() {
    return (
     <Iframe url={process.env.PUBLIC_URL + "/aframe-template.html"} >Template</Iframe>
    );
}

export default ThreeSpace;