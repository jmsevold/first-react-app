import React from 'react';

class List extends React.Component{
  render(){
    let names = this.props.people.map((person,index)=>{
      return(
        <div key={index}>
          <li >{person.firstName} {person.lastName}</li>
          <button onClick={this.props.removePerson.bind(null,index)}>remove</button>
        </div>
      );
    });

    return(
      <ul>
        {names}
      </ul>
    ); 
  }
}





export default List;