import React from 'react';
import logo from '../Assets/wave_1280_white.png';

import '../Styles/App.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible : 'hidden'
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      500
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.visible === 'hidden') {
      this.setState({
        visible: 'visible' 
      });
    } else {
      this.setState({
        visible: 'hidden'
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>space_muse<span className="score" style={{visibility: this.state.visible}}>_</span></h1>
          <img src={logo} className="App-logo" alt="logo" />
          <Container>
            <Row>
              <Col>
              <Button href="/create" variant="dark">
                  create
              </Button>
              </Col>
              <Col>
              <Button href="/explore" variant="dark">
                  explore
              </Button>
              </Col>
            </Row>
          </Container>
      </header>
      
      </div>
    );
  }
}

export default Home;