import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      names: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removePerson = this.removePerson.bind(this);
  }

 handleSubmit(){
    let firstName = this.refs.firstName.value;
    let lastName  = this.refs.lastName.value;
    let person = {firstName: firstName, lastName: lastName};
    this.refs.firstName.value = "";
    this.refs.lastName.value = "";
    this.state.names.push(person);
    this.setState({
      names: this.state.names
    });
    console.log(person);
  }

  removePerson(index){
    let newState = this.state.names;
    newState.splice(index,1);
    this.setState({names: newState});
    console.log(index);
  }

  render(){
    return(
      <div>
        <input type="text" ref="firstName" />
        <input type="text" ref="lastName" />
        <button onClick={this.handleSubmit}> Submit</button>
        <List people={this.state.names} removePerson={this.removePerson}/>
      </div>
    ); 
  }
}





export default Form