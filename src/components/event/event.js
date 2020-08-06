import React from 'react';
import './event.css';

export default ({event}) => {
    return (
        <div className="event-container">
            <div className="event-header">
                <div className="event-title">{event.title}</div>
            </div>
            <div className="event-body">
                <div className="event-discount">{event.discount}%  off on booking via xyz.com</div>
                <div className="event-price">Booking Amount - {event.price}</div>
                <div className="event-description">
                    {event.description}
                </div>
            </div>
        </div>
    );
}