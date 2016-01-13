import React from 'react';

class Form extends React.Component{
  constructor(){
    super();
    this.state = {
      names: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    let firstName = this.refs.firstName.value;
    let lastName  = this.refs.lastName.value;
    let person = {firstName: firstName, lastName: lastName};
    this.refs.firstName.value = "";
    this.refs.lastName.value = "";
    this.state.names.push(person,person);
    this.setState({
      names: this.state.names
    });


  }
 
  render(){
    return(
      <div>
        <input type="text" ref="firstName" />
        <input type="text" ref="lastName" />
        <button onClick={this.handleSubmit}> Submit</button>
        <List />
      </div>
    ); 
  }

}


var List = (props) =>{
  return(
      <ul>
        <li>hi</li>
      </ul>
    ); 
}

export default Form