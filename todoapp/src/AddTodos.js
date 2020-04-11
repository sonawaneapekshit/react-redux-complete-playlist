import React, {Component} from 'react';

class AddTodos extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            content: ''
        }
      }
      handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
        
    }
      handleSubmit = (e) => {
          e.preventDefault();
          this.props.updateTodos(this.state);
          this.setState({
              content: ''
          })
      }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Add Todo</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodos;