import React from 'react'

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }


class PokemonContainer extends React.Component {
    

    
    render() {
        if (this.props.renderPoke) {
            return(
                <div>
                    <a onClick={random_bg_color()}>
                     <button id='buttonTwo' className="bnt" onClick={this.props.handleBtn}> Clique aqui para outro Pokémon </button>
                    </a>
                     
                     <br></br>
                    <div className="card">
                        <h1 id='name'> {this.props.pokeObj['name'].toUpperCase()} </h1>
                        <img id='img-id' src={this.props.pokeObj['sprites']['front_default']} />
                        <div className="container">
                        </div>
                    </div>                 
                </div>

            )} else {
                return(
                    <div>
                        <h1>&#x2193; Generate a Random Pokemon &#x2193;</h1>
                        <button id='buttonText' onClick={this.props.handleBtn}> Clique aqui </button>
                    </div>
                )
            }
    }
}
export default PokemonContainer

