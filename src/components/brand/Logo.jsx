import React from 'react'
import { Link } from "react-router-dom"
import logo from '../../assets/logo.png'

const Logo = () => {
  return (
    <>
      <Link className='logo' to="/">
        <img src={logo} alt="Soundwave logo" />
        <span className='brand'>Soundwave</span>
      </Link>
    </>
  )
}

export default Logo
