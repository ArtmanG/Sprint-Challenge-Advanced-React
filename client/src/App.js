import React from 'react';
import axios from 'axios';
import PlayerCard from './components/PlayerCards'
import Navbar from './components/Navbar';
import './styles.scss';

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
        <Navbar />
        <h1>Most Searched Players 2019</h1>
        <PlayerCard players={this.state.players} />
      </div>
    )
  }

}

export default App;

