import React from 'react';
import XLSX from 'xlsx';

class Admin extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      file: ""
    }
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.file);
    let fileReader = new FileReader();
    // changing input file to binary data
    fileReader.readAsBinaryString(this.state.file[0]);
    fileReader.onload = (event) => {
      //Binary data
      let data = event.target.result;
      let book = XLSX.read(data,{type: "binary"});
      book.SheetNames.forEach(sheet => {
        let rowObject = XLSX.utils.sheet_to_row_object_array(book.Sheets[sheet]);
        // Each Row of the excel sheet as a JSON object which we can then Post to dataBase using any API Call
        console.log(rowObject);
      });
    }
  }

  onInputChange = (event) => {
    this.setState({
      file: event.target.files
    });
  }

  render() {
    return(
      <div className = "admin__input row">
        <div>
          <input onChange = {this.onInputChange} id = "file-in" type="file" accept = ".xls,.xlsx"/>
          <a onClick = {this.onFormSubmit} className= "btn btn--blue" href="/#">Submit</a>
        </div>
      </div>
    );
  }
}

export default Admin;