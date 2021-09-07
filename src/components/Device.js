import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { DEVICES } from "../actions";
import { Link } from "react-router-dom";

class Device extends PureComponent {
  render() {
    var device = this.props.data;
    return (
      <div className="device-main-box">
        <div className="device-info">
          <span className="device-name">{device.system_name}</span>
          <span className="device-type">{device.type}</span>
          <span className="device-capacity">{device.hdd_capacity} GB</span>
        </div>
        <div className="device-options">
          <Link to={"/devices/edit/" + device.id} className="device-edit">
            Edit
          </Link>
          <button
            className="device-remove"
            onClick={(e) => this.props.removeDevice(device)}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ devices: state.devices });
const mapDispatchToProps = (dispatch) => DEVICES(dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Device);
