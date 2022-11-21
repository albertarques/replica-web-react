import React from 'react';
import Navbar from "./Navbar"
import Logo from '../components/brand/Logo';

const Header = ({className}) => {
  return (
    <header className={className}>
      <Logo />
      <Navbar />
    </header>
  )
}

export default Header
