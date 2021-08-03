import React from 'react';
import logo from './logo.svg';

import Header from './Components/Header.js'
import PokemonContainer from './Components/PokemonContainer.js'
import './App.css';

class App extends React.Component {

  //initial state
  constructor() {
    super()
    this.state = {
      pokemon:{},
      render_pokemon:false
    }
  }

  //once the button is clicked
  buttonHandle = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
    .then(response => response.json())
    .then((data) => {
      let randNum = Math.abs(Math.floor(Math.random() * (0 - 1000)))
      let pokeArr = data['results']
      let randPoke = pokeArr[randNum]

      fetch(randPoke['url'])
      .then(res => res.json())
      .then(data => {
        this.setState({pokemon:data,render_pokemon:true})
      })
    })
  }
  
  //return the following stuff
  render() {
    return (
      <div className="App">
        <Header />
        <PokemonContainer
        handleBtn={this.buttonHandle}
        pokeObj={this.state.pokemon}
        renderPoke={this.state.render_pokemon} />
      </div>
    )
  }
}

export default App;
