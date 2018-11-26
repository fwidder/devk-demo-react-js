import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.addToList = this.addToList.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.clearList = this.clearList.bind(this);
    this.state = {Liste : [], text : ''};
  }

  addToList(){
    let newArray = this.state.Liste.slice();
    newArray.push(this.state.text);
    this.setState({Liste: newArray , text:''});
  }

  handleTextChange(event) {
    this.setState({text: event.target.value});
  }

  clearList(){
    this.setState({Liste: []});
  }

  render() {
    const listItems = this.state.Liste.map((text) =>
      <li>{text}</li>
    );

    return (
      <div className="App">
        <input type="text" placeholder="..." value={this.state.text} onChange={this.handleTextChange} />
        <button onClick={this.addToList}>hinzufügen</button>
        <ul>{listItems}</ul>
        <button onClick={this.clearList}>Liste leeren</button>
      </div>
    );
  }
}

export default App;
