import React, { useState, useEffect } from 'react';
import "./AnnouncementFeed.css";
import Announcement from "./Announcement";
import db from "./firebase";
import { ExpandMoreOutlined } from "@material-ui/icons"

function AnnouncementFeed() {

    const [announcements, setAnnouncements] = useState([]);
    useEffect(() => {
      db.collection("announcements").onSnapshot((snapshot) =>
        setAnnouncements(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
    }, []);

    return (
        <div className="announcements__background">
            <div className="announcement__top">
                <p> <h1> Announcements </h1> </p>
            </div>
            <div className="announcement">
                {announcements.map((announcement) => (
                    <Announcement
                    key={announcement.data.id}
                    title={announcement.data.title}
                    description={announcement.data.description}
                    link={announcement.data.link}
                    linkTitle={announcement.data.linkTitle}
                    />
                ))}
            </div>
            <div className="announcement__bottom">
                <p> Click to view more
                    <p2>
                    <ExpandMoreOutlined />
                    </p2>
                </p>
            </div>
        </div>
    )
}

export default AnnouncementFeed
