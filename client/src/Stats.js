import React from 'react';

class Stats extends React.Component{
  render() {
    return(
      <div className = "statistics">
        <div className = "statistics__block">
          <ul className = "statistics__list">
            <li className = "statistics__item">
              <span className = "statistics__item--main">1,220</span>
              <span className = "statistics__item--sub">Farmers</span>
            </li>
            <li className = "statistics__item">
              <span className = "statistics__item--main">2,391</span>
              <span className = "statistics__item--sub">Acres</span>
            </li>
            <li className = "statistics__item">
              <span className = "statistics__item--main">1,291</span>
              <span className = "statistics__item--sub">Traders</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Stats; 