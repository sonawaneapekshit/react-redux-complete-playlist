import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ninjas: [
        { name: 'Ryu', age: 30, belt: 'black', id: '1' },
        { name: 'Ken', age: 20, belt: 'yellow', id: '2' },
        { name: 'Lee', age: 30, belt: 'blue', id: '3' },
      ],
    };
  }

  addNinja = (ninja) => {
    ninja.id = Math.random() * 10;
    let ninjas = [...this.state.ninjas, ninja]; // making a copy of array to keep original array intact and update the copy
    this.setState({
      ninjas: ninjas,
    });
  };

  deleteNinja =(id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas,
    });
    //console.log(id);
  }
  render() {
    return (
      <div className="App">
        <h1>My first react App</h1>
        <p>Welcome</p>
        <Ninjas deleteNinja={ this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
