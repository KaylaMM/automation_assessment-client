import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { DEVICES } from '../actions';
import { Link } from 'react-router-dom';


class ListOPtions extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            device_type: "",
            sort_by: ""
        }
    }
    
    filterBy = (event) => {
        this.setState({ device_type: event.target.value }, () => this.props.filterValue(this.state.device_type));
    }
    sortBy = (event) => {
        this.setState({ sort_by: event.target.value }, () => this.props.sortList(this.props.devices , this.state.sort_by));
    }
    render() {
        return (
            <div className="list-options-box">
                <div className="list-options">
                    <div className="list-filters">
                        <div className="filter1">
                            <label htmlFor="device_type">Device Type: </label>
                            <select id="device_type" name="device_type" value={this.state.device_type} onChange={this.filterBy}>
                                <option value="ALL">ALL</option>
                                <option value="WINDOWS_WORKSTATION">WINDOWS WORKSTATION</option>
                                <option value="WINDOWS_SERVER">WINDOWS SERVER</option>
                                <option value="MAC">MAC</option>
                            </select>
                        </div>
                        <div className="filter2">
                            <label htmlFor="sort_by">Sort by: </label>
                            <select id="sort_by" name="sort_by" value={this.state.sort_by} onChange={this.sortBy}>
                                <option value="hdd_capacity">HDD CAPACITY</option>
                                <option value="system_name">SYSTEM NAME</option>
                            </select>
                        </div>
                        <Link to="/devices/add" className="submitButton">ADD DEVICE</Link>
                    </div> 
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({ devices: state.devicesReducer.devices });
const mapDispatchToProps = dispatch => DEVICES(dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListOPtions);