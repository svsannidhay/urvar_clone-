import React from 'react';

class NavBar extends React.Component {
  render() {
    return(
      <div className = "navigation">
        <input type="checkbox" className = "navigation__checkbox" id="navi-toggle"/>
        <label for = "navi-toggle" className = "navigation__button">
          <span class="navigation__icon">&nbsp;</span>
        </label>
        <div class="navigation__background">&nbsp;</div>
        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation__item"><a href="/" class="navigation__link"><span>01</span>Home</a></li>
            <li class="navigation__item"><a href="/supply" class="navigation__link"><span>02</span>Supply</a></li>
            <li class="navigation__item"><a href="/demand" class="navigation__link"><span>03</span>Demand</a></li>                    
            <li class="navigation__item"><a href="#" class="navigation__link"><span>04</span>Stories</a></li>
            <li class="navigation__item"><a href="#" class="navigation__link"> <span>05</span> Book Now</a></li>                    
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;