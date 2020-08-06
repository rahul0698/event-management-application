import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import './event-filter.css';

class EventFilter extends Component {

    handleFilterChange = (event) => {
        this.props.setSelectedFilter(event.target.value);
    }

    render () {
        return (
            <div className="filter-container">
                <select value={this.props.selectedFilter}
                        onChange={this.handleFilterChange}>
                    <option value="">All</option>
                    <option value="Free">Free</option>
                    <option value="Discount">Discount</option>
                    <option value="No_Discount">No Discount</option>
                </select>
            </div>
        )
    }
}

const mapStateToPops = (state) => {
    return {
        selectedFilter: state.event.selectedFilter
    }
}

const mapDispatchTopProps = (dispatch) => {
    return bindActionCreators({
        setSelectedFilter: actions.setSelectedFilter
    }, dispatch)
}

export default connect(mapStateToPops, mapDispatchTopProps)(EventFilter);