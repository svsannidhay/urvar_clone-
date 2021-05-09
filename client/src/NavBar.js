import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/logo.png';

class NavBar extends React.Component {
  render() {
    return(
      <div>
        <div className = "navigation navigation__mobile">
          <input type="checkbox" className = "navigation__checkbox" id="navi-toggle"/>
          <label htmlFor = "navi-toggle" className = "navigation__button">
            <span className = "navigation__icon">&nbsp;</span>
          </label>
          <div className = "navigation__background">&nbsp;</div>
          <nav className = "navigation__nav">
            <ul className = "navigation__list">
              <li className = "navigation__item"><Link to = "/" className = "navigation__link"><span>01</span>Home</Link></li>
              <li className = "navigation__item"><Link to = "/supply" className = "navigation__link"><span>02</span>Supply</Link></li>
              <li className = "navigation__item"><Link to = "/demand" className = "navigation__link"><span>03</span>Demand</Link></li>                    
              <li className = "navigation__item"><Link to = "#" className = "navigation__link"><span>04</span>Certification</Link></li>
              <li className = "navigation__item"><Link to = "/admin" className = "navigation__link"> <span>05</span>Admin</Link></li>                    
            </ul>
          </nav>
        </div>
        <div className = "navigation navigation__web">
          <div className = "navigation__web--logo"> 
            <img src={logo} alt="lgog"/>
          </div>
          <nav className = "navigation__web--nav">
            <ul className = "navigation__web--list">
              <li className = "navigation__web--item"><Link to = "/" className = "navigation__web--link navigation__web--link-blue ">Home</Link></li>
              <li className = "navigation__web--item"><Link to = "/supply" className = "navigation__web--link">Supply</Link></li>
              <li className = "navigation__web--item"><Link to = "/demand" className = "navigation__web--link">Demand</Link></li>                    
              <li className = "navigation__web--item"><Link to = "#" className = "navigation__web--link">Certification</Link></li>
              <li className = "navigation__web--item"><Link to = "/admin" className = "navigation__web--link">Admin</Link></li>                     
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;