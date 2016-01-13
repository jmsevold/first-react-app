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
    this.state.names.push(person);
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
        <List people={this.state.names}/>
      </div>
    ); 
  }

}


var List = (props) =>{
  let names = props.people.map((person)=>{
    return(
      <li key={Math.random()}>{person.firstName} {person.lastName} is a great guy</li>
    );
  });

  return(
      <ul>
        {names}
      </ul>
    ); 
}

export default Form