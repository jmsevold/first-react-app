import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
import List from './list';

class App extends React.Component{
  constructor(){
    super();
  }


  
 
  
  render(){
    return(
      <div>
        <Form/>
        <List/>
      </div>
    ); 
  }

}








export default App