import React from 'react';
import {Link} from 'react-router-dom'


function Header() {
  return (
    <header className='header'>
      <span className='site-name'><Link to='/'>Portfolio</Link></span>
    </header>
  )
}

export default Header;
