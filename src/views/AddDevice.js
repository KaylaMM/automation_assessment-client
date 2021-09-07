import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { DEVICES } from '../actions';
import { Link } from 'react-router-dom';
import { withAlert } from 'react-alert'


class AddDevice extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      system_name: "",
      type: "WINDOWS WORKSTATION",
      hdd_capacity: ""
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmit = (event) => {
    if (this.state.system_name.length > 0 && parseInt(this.state.hdd_capacity) > 0) {
      this.props.addDevice(this.state)
    }
    else {
      event.preventDefault();
      this.props.alert.show('No empty fields allowed!')
    }
  }

  render() {
    return (
      <div className="device-form-container login-bg-image" style={{ backgroundImage: `url('https://ok7static.oktacdn.com/fs/bco/7/fs04obklxBa81o0zl356')` }}>
        <div className="device-form">
          <h3>NEW DEVICE</h3>
          <label htmlFor="system_name">System Name</label>
          <input id="system_name" name="system_name" value={this.state.system_name} onChange={this.handleChange} />
          <label htmlFor="type">Type</label>
          <select id="type" name="type" value={this.state.type} onChange={this.handleChange}>
            <option value="WINDOWS_WORKSTATION">WINDOWS WORKSTATION</option>
            <option value="WINDOWS_SERVER">WINDOWS SERVER</option>
            <option value="MAC">MAC</option>
          </select>
          <label htmlFor="hdd_capacity">HDD Capacity(GB)</label>
          <input id="hdd_capacity" name="hdd_capacity" value={this.state.hdd_capacity} onChange={this.handleChange} />
          <Link className="changebutton" to="/">
            <button className="submitButton" onClick={this.onSubmit}>SAVE</button>
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { devices: state.devicesReducer.devices };
};
const mapDispatchToProps = dispatch => DEVICES(dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withAlert(AddDevice));

