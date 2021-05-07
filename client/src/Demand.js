import axios from './axios';
import React from 'react';
import DemandCard from './DemandCard';
import PopupDemand from './PopupDemand';


class Supply extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      supplyList: [],
      openPopup: false
    }
  }

  //Get the supply data from 
  fetchData = async() => {
    const req = await axios.get('/urvar/demand');
    this.setState({
      supplyList: req.data
    });
  } 

  openPopup = () => {
    console.log('open');
    this.setState({
      openPopup: true
    });
  }

  closePopup = () => {
    console.log('close');
    this.setState({
      openPopup: false
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className = "row demand">
        <div className = "row demand__heading">
          <h3 className = "heading-secondary ">
            List of Demands available from buyers
          </h3>
        </div>
        <PopupDemand 
        open = {this.state.openPopup} 
        closePopup = {this.closePopup}>
        </PopupDemand>
        {
          this.state.supplyList.map(card => 
              <DemandCard
                key = {card._id}
                name = {card.name}
                type = {card.type}
                location = {card.location}
                quantity = {card.quantity}
                imgUrl = {card.imgUrl}
                openPopup = {this.openPopup}
              >
              </DemandCard> 
          )}
      </div>
    );
  }
}

export default Supply;