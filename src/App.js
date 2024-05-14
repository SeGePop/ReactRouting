import React, {Component} from 'react';

const URL = 'https://catfact.ninja/fact'

export default class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        catFact: '',
        length: ''
      }
    }

  getFact = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const {fact, length} = data;
        this.setState({
          catFact: fact,
          length: length
        })
      })
      .catch((error) => {
        console.error('Error fetching cat fact:', error)
      })
  }

  render(){
    return(
      <div>
        <button onClick={this.getFact}>Get Fact!</button>
        <p>{this.state.catFact}</p>
        <p>It has this length: {this.state.length}</p>
      </div>
    )
  }
}


