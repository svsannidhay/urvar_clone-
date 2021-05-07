import axios from './axios';
import React from 'react';
import SupplyCard from './SupplyCard';
import PopupSupply from './PopupSupply';


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
    const req = await axios.get('/urvar/supply');
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
      <div className = "row supply">
        <div className = "row supply__heading">
          <h3 className = "heading-secondary ">
            List of supply available from farmers
          </h3>
        </div>
        <PopupSupply 
        open = {this.state.openPopup} 
        closePopup = {this.closePopup}>
        </PopupSupply>
        {
          this.state.supplyList.map(card => 
              <SupplyCard
                key = {card._id}
                name = {card.name}
                type = {card.type}
                certification = {card.certification}
                quantity = {card.quantity}
                imgUrl = {card.imgUrl}
                openPopup = {this.openPopup}
              >
              </SupplyCard> 
          )}
      </div>
    );
  }
}

export default Supply;