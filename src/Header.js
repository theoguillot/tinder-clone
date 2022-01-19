import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import MessageIcon from '@mui/icons-material/Message';

function Header() {
  return <div className="header">
        <IconButton>
            <PersonIcon fontSize="large" className="header__icon"/>
        </IconButton>

        <img 
        className="header__logo"
        src="https://cdn.1min30.com/wp-content/uploads/2018/05/logo-Tinder-1.jpg"
        alt=""/>

        <IconButton>
          <MessageIcon fontSize="large" className="header__icon"/>
        </IconButton>

  </div>;
}

export default Header;
