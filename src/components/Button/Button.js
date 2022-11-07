import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';
function Button(props) {
  return (
    <Link to={props.link} className={`button ${props.class}`}>{props.text}</Link>
  )
}

export default Button