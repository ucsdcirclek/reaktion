import React from 'react';
import "./Events.css";
import Event from "./Event";

function Events() {
    return (
        <div className="events">
            <h1 className="events__title">Upcoming Events</h1>

            <div className="events__squares">
                <Event 
                    title="Test"
                    timestamp="Oct. 6th, 4:00-5:00pm"
                    description="This is a test event to see if everything works."
                />
                <Event 
                    title="This is a really long title Test"
                    timestamp="Oct. 6th, 4:00-5:00pm"
                    description="This is a test event to see if everything works. Now I will test a really long description. What happens if I keep going. Like forever and ever and ever. And even longer bc forever means like really forever."
                />
                <Event 
                    title="Test"
                    timestamp="Oct. 6th, 4:00-5:00pm"
                    description="This is a test event to see if everything works."
                />
                <Event 
                    title="Test"
                    timestamp="Oct. 6th, 4:00-5:00pm"
                    description="This is a test event to see if everything works."
                />
                <Event 
                    title="Test"
                    timestamp="Oct. 6th, 4:00-5:00pm"
                    description="This is a test event to see if everything works."
                />
            </div>
        </div>
    )
}

export default Events
