import React from "react";
import "./style.css";

function Navbar(props) {
   return (
    <div className='navbar navbar-dark bg-dark font-weight-bold sticky-top'>
      <div className='col-md-4 text-center'><a href='/'>Start over</a></div>
      <div className='col-md-4 text-center'>{props.alerts}</div>
      <div className='col-md-4 text-center'>
      Current Score: {props.currentScore} |
      Top Score: {props.topScore}</div>
    </div>
  );
}; 

export default Navbar;