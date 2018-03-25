import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'


function Header() {
  return (
    <header className='header'>
      <span className='site-name'><Link to='/'>Portfolio</Link></span>
    </header>
  )
}

export default Header;
