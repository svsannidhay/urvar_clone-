import React from 'react';
import { Dialog,DialogTitle,DialogActions  } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";


import axios from './axios';

const theme = createMuiTheme({
  typography: {
    fontSize: 18,
  },
});


class PopupSupply extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      certification: "",
      quantity: 0,
      imgUrl: ""
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value 
    });
  }
  
  onFormSubmit = async(event) => {
    event.preventDefault();
    console.log('submit');
    this.props.closePopup();
    await axios.post("/urvar/supply",this.state);
    this.setState({
      name: "",
      type: "",
      certification: "",
      quantity: 0,
      imgUrl: ""
    });
  }

  render() {
    return (
      <Dialog maxWidth = "md" open = {this.props.open} aria-labelledby="form-dialog-title"> 
        <ThemeProvider theme={theme}>
          <DialogTitle id="form-dialog-title">Place a Demand</DialogTitle>
        </ThemeProvider>
        <form className = "input-form" onSubmit = {this.props.onFormSubmit}>
            <input className ="input-field input-name" type="text"
              placeholder = "Name" value = {this.props.name} 
              name = "name"
              onChange = {this.onInputChange}
              required
            />
            <input className ="input-field input-caption" type="text"
              placeholder = "type" value = {this.props.caption}
              name = "type"
              onChange = {this.onInputChange}
              required
            />
            <input className ="input-field filed input-url" type="text"
              placeholder = "certification" value = {this.props.url}
              name ="certification"
              onChange = {this.onInputChange}
              required
            />
            <input className ="input-field filed input-url" type="text"
              placeholder = "Quantity (In Quintols)" value = {this.props.url}
              name ="quantity"
              onChange = {this.onInputChange}
              required
            />            
            <input className ="input-field filed input-url" type="text"
              placeholder = "Image URL" value = {this.props.url}
              name ="imgUrl"
              onChange = {this.onInputChange}
              required
            />
            <ThemeProvider theme={theme}>
              <DialogActions>
                <Button className = "form__btn" onClick={() => this.props.closePopup()} color="primary">
                  Cancel
                </Button>
                <Button className = "form__btn" onClick={this.onFormSubmit} color="primary">
                  Submit
                </Button>
              </DialogActions>
            </ThemeProvider>


          </form>
      </Dialog> 
    );
  }
}

export default PopupSupply;
