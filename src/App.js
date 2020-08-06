import React, { Component } from 'react';
import './App.css';
import * as action from './store/actions/index';

import CreateEvent from './components/create-event/create-event';

import EventList from './components/event-list/event-list';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {

    handleOpenCreateEventForm = () => {
        this.props.openCreateEventForm();
    }

    render () {
        return (
            <div className="App">
                <header className="app-header">
                    Event Management Application
                    <button className="create-event-btn" onClick={this.handleOpenCreateEventForm}>Create Event</button>
                </header>
                {this.props.createEvent && <CreateEvent/>}
                <EventList/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        openCreateEventForm: action.openCreateEventForm
    }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        createEvent: state.event.createEvent
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
