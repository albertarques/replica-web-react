import React from 'react'
import {Link} from 'react-router-dom'
import Row from "../layouts/Row"
import facebookLogo from "../assets/facebook.svg"


const Footer = () => {
  return (
    <footer>
      <Row>
        <Link>About us</Link>
        <Link>Contact</Link>
      </Row>
      <Row>
        <a href="http://facebook.com">
          <img src={facebookLogo} alt="Facebook logo" />
          Facebook</a>
        <a href="http://twitter.com">Twitter</a>
      </Row>
    </footer>
  )
}

export default Footer
