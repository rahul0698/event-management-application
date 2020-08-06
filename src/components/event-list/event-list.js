import React, {Component} from 'react';
import './event-list.css';
import Event from '../event/event.js';

import {connect} from 'react-redux';
import EventFilter from '../event-filter/event-filter';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/index';

export class EventList extends Component {
    componentDidMount() {
        this.props.saveEventList();
    }
    render () {
        return (
           <div>
               <EventFilter/>
               <div className="eventList-container">
                   {this.props.eventList.map(event => <Event key={event.id} event={event}/>)}
               </div>
           </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        saveEventList: actions.saveEventListLocalStorage
    }, dispatch);
}

const mapStateToProps = (state) => {
    return {
        eventList: state.event.eventList,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);