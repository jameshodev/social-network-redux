import React, { useState } from 'react';
import './Header.css';
import logoIcon from '../bizchitchat_logo-h.png';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { auth } from '../firebase';

function Header() {
  const user = useSelector(selectUser);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const [{ user }, dispatch] = useStateValue();
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
          <Avatar src={user.photo} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <AddRoundedIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={() => auth.signOut()}>Logout</MenuItem>
        </Menu>
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
