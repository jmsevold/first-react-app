var List = (props) => {
  // constructor(){
  //   super();
  // }

  unmount(){
    ReactDOM.unmountComponentAtNode('person');
  }
 
  render(){
    let names = props.people.map((person)=>{
    return(
      <div id="person">
        <li> {person.firstName} {person.lastName} is a great guy</li>
        <button onClick={this.unmount}>remove</button>
      </div>
    );
  }

  return(
    <ul>
      {names}
    </ul>
  );

}




