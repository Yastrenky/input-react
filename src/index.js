import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ControlledInput extends Component{
  state= {
    text:''
  };
  handleChange= event=>{
    console.log(event.target);
    this.setState({
      text:event.target.value
    });
  }
render(){
  return (
    <input type="text" value={this.state.text} onChange={this.handleChange}/>
  )
}
}

ReactDOM.render(<ControlledInput />, document.getElementById('root'));
