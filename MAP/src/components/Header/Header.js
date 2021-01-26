import React from 'react';
import { logo } from '../../assets/icons/icons.js';
import './header.css';

const Header = ({ dark }) => {
  return (
    <div style={{backgroundColor: `${dark ? '#333' : '#fff'}`, padding: '0.4rem 0'}} className={`Header ${dark ? 'dark' : ''}`}>
      <div className={`Logo ${dark ? 'dark' : ''}`}>{logo}</div>
    </div>
  );
};

export default Header;
