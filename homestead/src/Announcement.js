import React from 'react';
import "./Announcement.css";

function Announcement({ title, description, link, linkTitle }) {
    return (
        <div className="announcement">
            <div className="announcement__top">
                {/*Pull title from Database*/}
                <h2>{title}</h2>
            </div>
            <div className="announcement__desc">
                {/*Pull description from Database*/}
                <p>{description}</p>
            </div>
            <div className="announcement__link">
                {/*Pull link from Database, if there is one*/}
                <p><a href={link} target="_blank"> {linkTitle} </a></p>
            </div>
            
        </div>
    )
}

export default Announcement
