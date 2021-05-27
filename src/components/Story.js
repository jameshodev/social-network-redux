import React from 'react';
import './Story.css';
import Avatar from '@material-ui/core/Avatar';

function Story({ image, posterSrc, posterName }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={posterSrc} />
      <h4>{posterName}</h4>
    </div>
  );
}

export default Story;
