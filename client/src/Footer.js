import React from 'react';
import Logo from './Images/logo.png';

class Footer extends React.Component{
  render() {
    return(
      <div className = "row footer">
        <div className = "footer__container col span-1-of-3">
          <img src = {Logo} alt = "Logo" className = "footer__container--img" />
        </div>
        <div className = "footer__container col span-1-of-3">
          <div className = "footer__container--heading"> About </div>
          <ul className = "footer__container--list">
            <li className = "footer__container--item"><a href="/#">Company</a></li>
            <li className = "footer__container--item"><a href="/#">Contact us</a></li>
            <li className = "footer__container--item"><a href="/#">Privacy Policy</a></li>
            <li className = "footer__container--item"><a href="/#">Terms & conditions</a></li>
            <li className = "footer__container--item"><a href="/#">Carrers</a></li>
          </ul>
        </div>
        <div className = "footer__container col span-1-of-3">
          <div className = "footer__container--heading"> Get in Touch</div>
          <ul className = "footer__container--list">
            <li className = "footer__container--item"><a href="/#">linkedIn</a></li>
            <li className = "footer__container--item"><a href="/#">facebook</a></li>
            <li className = "footer__container--item"><a href="/#">instagram</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;