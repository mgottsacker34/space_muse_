import React from 'react';

import '../Styles/CreateAFC.css';

class CreateAFC extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      annotation_type: 'select...',
        x_pos: '',
        y_pos: '',
        z_pos: '',
        time: '',
        width: '',
        height: '',
        textarea_text: ''
      // Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tellus eu lectus mattis ultricies. Vestibulum viverra egestas tincidunt. Curabitur nisi lorem, varius a ipsum non, sodales tincidunt leo. Suspendisse pellentesque malesuada urna.
    };

    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangeX = this.handleChangeX.bind(this);
    this.handleChangeY = this.handleChangeY.bind(this);
    this.handleChangeZ = this.handleChangeZ.bind(this);
    this.handleChangeT = this.handleChangeT.bind(this);
    this.handleChangeScale = this.handleChangeScale.bind(this);
    this.handleChangeWidth = this.handleChangeWidth.bind(this);
    this.handleChangeHeight = this.handleChangeHeight.bind(this);
    this.handleChangeTA = this.handleChangeTA.bind(this);
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

  handleChangeScale(event) {
    this.setState({ scale: event.target.value });
  }

  handleChangeWidth(event) {
    this.setState({ width: event.target.value });
  }

  handleChangeHeight(event) {
    this.setState({ height: event.target.value });
  }

  handleChangeTA(event) {
    this.setState({ textarea_text: event.target.value });
  }

  handleSubmit(event) {
    // const html_text = '<a-entity geometry="primitive: plane; height: ' + this.state.height + 
    //                   '; width: ' + this.state.width + '" ' +
    //                   'material="color: black" ' +
    //                   'text="value: ' + this.state.textarea_text + '; align: center" ' +
    //                   'position="' + this.state.x_pos + ' ' + this.state.y_pos + ' ' + this.state.z_pos + '" ' +
    //                   '></a-entity>';
    // this.props.onAddAFC(html_text);
    this.props.onAddAFC(this.state);
    this.setState({
        annotation_type: 'select...',
        x_pos: '',
        y_pos: '',
        z_pos: '',
        time: '',
        width: '',
        height: '',
        textarea_text: ''
    })
    event.preventDefault();
  }

  render() {
    let input_long;
    if (this.state.annotation_type === 'text') {
      input_long = <div>
        <label>
          width: &nbsp;
          <input className="widthInput" type="text" placeholder="0" onChange={this.handleChangeWidth} />
        </label>
        <label>
          height: &nbsp;
          <input className="heightInput" type="text" placeholder="0" onChange={this.handleChangeHeight} />
        </label>
        <textarea className="textAnnotationTextarea" onChange={this.handleChangeTA} value={this.state.textarea_text} placeholder="annotation text" />
      </div>
    } else {
      input_long = <div></div>
    }

    return (
      <div className="CreateAFC">
        <form onSubmit={this.handleSubmit} >
          <label>annotation: &nbsp;
            <select className="annotationSelect" value={this.state.annotation_type} onChange={this.handleChangeType} >
              <option value="select..." disabled="disabled">select...</option>
              <option value="text">text</option>
              <option value="plane">plane</option>
            </select>
          </label>
          <label>
            position: &nbsp;
            <input className="posInput" value={this.state.x_pos} type="text" placeholder="x" onChange={this.handleChangeX} />
            <input className="posInput" value={this.state.y_pos} type="text" placeholder="y" onChange={this.handleChangeY} />
            <input className="posInput" value={this.state.z_pos} type="text" placeholder="z" onChange={this.handleChangeZ} />
          </label>
          <label>
            time (ms): &nbsp;
            <input className="timeInput" value={this.state.time} type="text" placeholder="0" onChange={this.handleChangeT} />
          </label>
          {/*
          <label>
            scale: &nbsp;
            <input className="scaleInput" type="text" placeholder="1.0" onChange={this.handleChangeScale} />
          </label>
          */}
          {input_long}
          <input className="addBtn" type="submit" value="annotate" />
        </form>
        <hr />
      </div>
    );
  }
}

export default CreateAFC;