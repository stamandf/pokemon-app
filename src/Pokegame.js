import React from 'react';
import Pokedex from './Pokedex';
import shuffleDeckofCards from './shuffleDeckCards';
import experienceTotal from './experienceTotal';
import './Pokegame.css';


// let showWinner = false;

export default class Pokegame extends React.Component {
    state = {
        showWinner : false
    }
    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    };
    onClick = () => {
        this.setState({
            showWinner: true
        })
    }
    render() {
        let shuffledDeck = [];
        let firstHand = [];
        let secondHand = [];
        let totalFirstHand = 0;
        let totalSecondHand = 0;
        shuffledDeck = shuffleDeckofCards(this.props.pokemon);
        firstHand = shuffledDeck.slice(0,4);
        secondHand = shuffledDeck.slice(4);
        totalFirstHand = experienceTotal(firstHand);
        totalSecondHand = experienceTotal(secondHand);
    
        return (
            <div className="pokeGame">
                <Pokedex pokemon={firstHand} totalExp={totalFirstHand} isWinner={totalFirstHand > totalSecondHand} showWinner={this.state.showWinner}/>
                <button className="pokeGame-button" onClick={this.onClick}>Play Game!</button>
                <Pokedex pokemon={secondHand} totalExp={totalSecondHand} isWinner={ totalSecondHand > totalFirstHand} showWinner={this.state.showWinner}/>
                
            </div>
        )
    }
}
