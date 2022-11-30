import React, { useEffect } from 'react';
import logo from './logo.svg';
import './Header.scss';

interface IAbout {
  scrollAtTop: boolean
}

type HeaderProps = {
  scrollAtTop: boolean
}
function Header(props : HeaderProps) {



  return (
    <header className={`Header ${props.scrollAtTop ? 'bg-neutral' : ''}`}>
      <h1>Header</h1>
    </header>
  );
}

export default Header;
// GetBoundingClientRect