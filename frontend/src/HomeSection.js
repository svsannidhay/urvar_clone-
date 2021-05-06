import React from 'react';
import { Link } from 'react-router-dom';

class HomeSection extends React.Component{
  
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className = "row section"> 
          <div className = "section__block col span-1-of-2">
            <div className = "section__text-box">
              <h1 className = "section__heading-primary heading-primary">
                <span className = "section__heading-primary--main heading-primary--main">{this.props.mainHeading}</span>
                <span className = "section__heading-primary--sub heading-primary--sub">{this.props.subHeading}</span>
              </h1>
              <Link to = "/supply" className = "btn btn--green btn--animated section__show-button">See supply</Link>
            </div>
          </div>
          <div className = "section__block col span-1-of-2" >
            <img src = {this.props.imgLink} alt="section image" className = "section__img"/>
          </div>
      </div>
    );
  }
}

export default HomeSection;