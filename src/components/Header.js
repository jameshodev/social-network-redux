import React from 'react';
import './Header.css';
import logoIcon from '../bizchitchat_logo-h.png';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import { useStateValue } from '../StateProvider';

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      {/* Left Header */}
      <div className="header__left">
        <img src={logoIcon} alt="" />
      </div>

      {/* Middle Header */}
      <div className="header__center">
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search BizChitChat" type="text" />
        </div>
      </div>

      {/* Right Header */}
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddRoundedIcon />
        </IconButton>
        <IconButton>
          <ForumRoundedIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveRoundedIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
