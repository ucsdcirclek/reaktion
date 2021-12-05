import React from 'react';
import "./Event.css";

function Event({ image, title, timestamp, description }) {
    return (
        <div className="event">
            <h4 className="event__title">{title}</h4>
            <h5 className="event__timestamp">{timestamp}</h5>
            <p className="event__description">{description}</p>
        </div>
    )
}

export default Event
