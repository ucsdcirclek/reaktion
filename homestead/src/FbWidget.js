import React from 'react';
import './FbWidget.css';

function FbWidget() {
  return (
    <div className='fbWidget'>
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUCSD-CKI-Announcements-107099057912282&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=3163031913785859"
        width="500"
        height="100%"
        style={{border: "none", overflow:"hidden"}}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="encrypted-media">
      </iframe>
    </div>
  );
}

export default FbWidget;
