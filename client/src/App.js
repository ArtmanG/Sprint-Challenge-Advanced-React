import React from 'react';
import axios from 'axios';
import PlayerCard from './components/PlayerCards'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/players').then(res => {
      console.log('res', res.data);
      this.setState({
        players: res.data
      })
    })
  }

  render() {
    return(
      <div>
        <PlayerCard players={this.state.players} />
      </div>
    )
  }

}

export default App;
