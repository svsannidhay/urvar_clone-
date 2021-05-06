import React from 'react';
import Header from './Header';
import Stats from './Stats';
import HomeSection from './HomeSection';
import image2 from './Images/home_img_2.png';

class Home extends React.Component {
  render() {
    return(
      <div>
        <Header></Header>
        <Stats></Stats>
        <HomeSection 
          mainHeading = "Get organic or naturally produce supply" 
          subHeading = "The produce is procured from various certified farmers."
          imgLink = {image2}>
        </HomeSection>
      </div>
    );
  }
}

export default Home;