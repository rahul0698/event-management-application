import React, {Component} from 'react';
import './create-event.css';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/index';

export const updateObject = (oldObject, updatedObjectProperties) => {
    return {
        ...oldObject,
        ...updatedObjectProperties
    };
};


class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: {value: '', hasError: false},
            venue: {value: '', hasError: false},
            price: {value: '', hasError: false},
            discount: {value: '', hasError: false},
            description: {value: '', hasError: false},
        }
    }

    handleInputChange = (event) => {
        const updateFormElement = updateObject(this.state[event.target.name],
            {value: event.target.value, hasError: false});
        this.setState({[event.target.name]: updateFormElement});
    }

    handleSubmit = () => {
        let formData = {
            title: this.state.title.value,
            venue: this.state.venue.value,
            description: this.state.description.value,
            price: (this.state.price.value || 0) + '$',
            discount: this.state.discount.value || 0,
            id: this.generateRandomId()
        };
        this.props.createEvent(formData);
        this.setState({
            title: {value: '', hasError: false},
            venue: {value: '', hasError: false},
            price: {value: '', hasError: false},
            discount: {value: '', hasError: false},
            description: {value: '', hasError: false},
        });
        this.props.closeCreateEvent();
    }

    handleClear = () => {
        this.setState({
            title: {value: '', hasError: false},
            venue: {value: '', hasError: false},
            price: {value: '', hasError: false},
            discount: {value: '', hasError: false},
            description: {value: '', hasError: false},
        });
    }

    generateRandomId = () => {
        return  ('_' + Math.random().toString(36).substr(2, 9));
    }

    handleValidation = (event) => {
        if(!event.target.value) {
            const updateFormElement = updateObject(this.state[event.target.name],
                {value: event.target.value, hasError: true});
            this.setState({[event.target.name]: updateFormElement});
            return;
        }

        const updateFormElement = updateObject(this.state[event.target.name],
            {value: event.target.value, hasError: false});
        this.setState({[event.target.name]: updateFormElement});
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <div className="input-field">
                            <label htmlFor="title">Name</label>
                            <input type="text" name="title"
                                   value={this.state.title.value}
                                   onBlur={this.handleValidation}
                                   onChange={this.handleInputChange}/>
                        </div>
                        {this.state.title.hasError && <p className="error">Name is required</p>}
                    </div>
                    <div>
                        <div className="input-field">
                            <label htmlFor="venue">Venue</label>
                            <input type="text" name="venue"
                                   value={this.state.venue.value}
                                   onBlur={this.handleValidation}
                                   onChange={this.handleInputChange}/>
                        </div>
                        {this.state.venue.hasError && <p className="error">Venue is required</p>}
                    </div>
                    <div>
                        <div className="input-field">
                            <label htmlFor="description">Description</label>
                            <input type="text"
                                   name="description"
                                   value={this.state.description.value}
                                   onBlur={this.handleValidation}
                                   onChange={this.handleInputChange}/>
                        </div>
                        {this.state.description.hasError && <p className="error">Description is required</p>}
                    </div>
                    <div>
                        <div className="input-field">
                            <label htmlFor="price">Price</label>
                            <input type="number"
                                   name="price"
                                   value={this.state.price.value}
                                   onBlur={this.handleValidation}
                                   onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div>
                       <div className="input-field">
                           <label htmlFor="discount">Discount</label>
                           <input type="number"
                                  name="discount"
                                  value={this.state.discount.value}
                                  onBlur={this.handleValidation}
                                  onChange={this.handleInputChange}/>
                       </div>
                    </div>
                </form>
                <div className="create-form-footer">
                    <button onClick={this.handleSubmit}>Create Event</button>

                    <button onClick={this.handleClear}>Clear</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        createEvent: actions.createAndSaveEvent,
        closeCreateEvent: actions.closeCreateEventForm
    }, dispatch);
}

const mapStateToProps = (state) => {
    return {
        events: state.event.eventList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);