import React from 'react';
import {Link} from 'react-router-dom';

const SqdButton = ({text, img, goto}) => {
  if(goto !== ""){
    return (
      <>
        <Link to={goto} className="sqdButton __greyBackrgound">
            <img src={img} alt={text} />
            <span>{text}</span>
        </Link>
      </>
    )  
  }else{
    <button className="sqdButton __greyBackrgound">
      <img src={img} alt={text} />
      <span>{text}</span>
    </button>
  }
}

export default SqdButton
