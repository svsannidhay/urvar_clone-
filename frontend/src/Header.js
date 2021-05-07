import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Images/header_img.png'; 

class Header extends React.Component{
  render() {
    return(
    <header className = "header"> 
        <div className = "header__block col span-1-of-2">
          <div className = "header__text-box">
            <h1 className = "heading-primary">
              <span className = "heading-primary--main">Join India's largest organic ecosystem</span>
              <span className = "heading-primary--sub">A one stop destination for farmers & traders</span>
            </h1>
            <Link to = "/supply" className = "btn btn--green btn--animated">See supply</Link>
          </div>
        </div>
        <div className = "header__block col span-1-of-2" >
          <img src = {Image} alt="Header logo" className = "header__img"/>
        </div>
    </header>
    );
  }
}

export default Header;