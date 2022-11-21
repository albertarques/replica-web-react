import React from 'react'
import {Link} from "react-router-dom"

const Button = ({className, text, to}) => {
  if(to !== false){
    return (
      <Link to={to}>
        <button className={`${className} button __blueBackground`}>{text}</button>
      </Link>
    )
  }
  else{
    <button>{text}</button>
  }


}

export default Button
