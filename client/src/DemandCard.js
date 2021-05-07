import React from 'react';

class SupplyCard extends React.Component{
  render() {
    return (
      <div className = "demand__card col span-1-of-2">
        <figure className = "demand__card--shape"> 
          <img className = "demand__card--img" src = {this.props.imgUrl} alt = {this.props.name} />
        </figure>
        <div className = "demand__card--text">
          <div className = "demand__card--container">
            <h3 className = "heading-tertiary demand__card--name"> 
              {this.props.name}
            </h3>
            <h4 className = "heading-h4 demand__card--type">
              {this.props.type}
            </h4>
            <div className = "demand__card--clearfix"></div>
          </div>
          <div className = "demand__card--container">
            <h4 className = "heading-h4 demand__card--p"> 
              Quantity
            </h4>
            <h4 className = "heading-h4 demand__card--quantity"> 
              {this.props.quantity}
            </h4>
            <div className = "demand__card--clearfix"></div>
          </div>
          <div className = "demand__card--container">
            <h4 className = "heading-h4 demand__card--p"> 
              Location
            </h4>
            <h4 className = "heading-h4 demand__card--quantity"> 
              {this.props.location}
            </h4>
            <div className = "demand__card--clearfix"></div>
          </div>
          <div className = "demand__button">
              <a onClick = {() => this.props.openPopup()}  className = "btn btn--blue btn--animated btn--card">I have Supply</a>
          </div>
        </div>
        
      </div>
    );
  }
}

export default SupplyCard; 