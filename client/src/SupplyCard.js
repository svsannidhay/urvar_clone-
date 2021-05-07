import React from 'react';

class SupplyCard extends React.Component{
  render() {
    return (
      <div className = "supply__card col span-1-of-2">
        <figure className = "supply__card--shape"> 
          <img className = "supply__card--img" src = {this.props.imgUrl} alt = {this.props.name} />
        </figure>
        <div className = "supply__card--text">
          <div className = "supply__card--container">
            <h3 className = "heading-tertiary supply__card--name"> 
              {this.props.name}
            </h3>
            <h4 className = "heading-h4 supply__card--type">
              {this.props.type}
            </h4>
            <div className = "supply__card--clearfix"></div>
          </div>
          <div className = "supply__card--container">
            <h4 className = "heading-h4 supply__card--p"> 
              Quantity
            </h4>
            <h4 className = "heading-h4 supply__card--quantity"> 
              {this.props.quantity}
            </h4>
            <div className = "supply__card--clearfix"></div>
          </div>
          <div className = "supply__card--container">
            <h4 className = "heading-h4 supply__card--p"> 
              Certification
            </h4>
            <h4 className = "heading-h4 supply__card--quantity"> 
              {this.props.certification}
            </h4>
            <div className = "supply__card--clearfix"></div>
          </div>
          <div className = "supply__button">
              <a onClick = {() => this.props.openPopup()}  className = "btn btn--blue btn--animated btn--card">I have demand</a>
          </div>
        </div>
        
      </div>
    );
  }
}

export default SupplyCard; 