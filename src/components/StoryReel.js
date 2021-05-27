import React from 'react';
import './StoryReel.css';
import Story from './Story';
import i1 from '../i1.jpg';
import i2 from '../i2.jpg';
import i3 from '../i3.jpg';
import i4 from '../i4.jpg';
import i5 from '../i5.jpg';
import p1 from '../p1.jpg';
import p2 from '../p2.jpg';
import p3 from '../p3.jpg';
import p4 from '../p4.jpg';
import p5 from '../p5.jpg';

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image={i1} posterSrc={p1} posterName="Dianne Willow" />
      <Story image={i2} posterSrc={p2} posterName="Jamie Winston" />
      <Story image={i3} posterSrc={p3} posterName="Sarah Able" />
      <Story image={i4} posterSrc={p4} posterName="Welsh Dean" />
      <Story image={i5} posterSrc={p5} posterName="Francesca Sam" />
    </div>
  );
}

export default StoryReel;
