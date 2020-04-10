import React, { Component } from 'react';

class AddNinja extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      age: null,
      belt: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNinja(this.state);
    //document.getElementById("ninjaform").reset();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form id="ninjaform" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input id="age" type="text" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="belt">Belt</label>
            <input id="belt" type="text" onChange={this.handleChange} />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNinja;
