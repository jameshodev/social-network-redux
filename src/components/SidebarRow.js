import React from 'react';
import './SidebarRow.css';
import Avatar from '@material-ui/core/Avatar';

function SidebarRow({ src, Icon, title }) {
  console.log('src is: ', src);
  console.log('Icon is: ', Icon);
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
