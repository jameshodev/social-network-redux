import React from 'react';
import './Widgets.css';

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        title="Facbook Pages"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwired&tabs=timeline&width=340&height=1500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=301473396539049"
        width="340"
        height="1500"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default Widgets;
