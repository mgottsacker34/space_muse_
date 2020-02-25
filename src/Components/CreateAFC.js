import React from 'react';

import '../Styles/CreateAFC.css';

class CreateAFC extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      annotation_type: 'text',
      x_pos: 0,
      y_pos: 0,
      z_pos: 0,
      time: 0
    };

    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangeX = this.handleChangeX.bind(this);
    this.handleChangeY = this.handleChangeY.bind(this);
    this.handleChangeZ = this.handleChangeZ.bind(this);
    this.handleChangeT = this.handleChangeT.bind(this);
    this.handleChangeS = this.handleChangeS.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeType(event) {
    this.setState({ annotation_type: event.target.value });
  }

  handleChangeX(event) {
    this.setState({ x_pos: event.target.value });
  }

  handleChangeY(event) {
    this.setState({ y_pos: event.target.value });
  }

  handleChangeZ(event) {
    this.setState({ z_pos: event.target.value });
  }

  handleChangeT(event) {
    this.setState({ time: event.target.value });
  }

  handleChangeS(event) {
    this.setState({ scale: event.target.value });
  }

  handleSubmit(event) {
    alert("submitted: " + this.state.annotation_type);
    event.preventDefault();
  }

  render() {
    return (
      <div className="CreateAFC">
        <form onSubmit={this.handleSubmit} >
          <label>annotation: &nbsp;
            <select className="annotationSelect" value={this.state.annotation_type} onChange={this.handleChangeType} >
              <option value="text">text</option>
              <option value="plane">plane</option>
            </select>
          </label>
          <label>
            position: &nbsp;
            <input className="posInput" type="text" placeholder="x" onChange={this.handleChangeX} />
            <input className="posInput" type="text" placeholder="y" onChange={this.handleChangeY} />
            <input className="posInput" type="text" placeholder="z" onChange={this.handleChangeZ} />
          </label>
          <label>
            time (ms): &nbsp;
            <input className="timeInput" type="text" placeholder="0" onChange={this.handleChangeT} />
          </label>
          <label>
            scale: &nbsp;
            <input className="scaleInput" type="text" placeholder="1.0" onChange={this.handleChangeS} />
          </label>
          <input className="addBtn" type="submit" value="add" />
        </form>
        <hr />
      </div>
    );
  }
}

export default CreateAFC;