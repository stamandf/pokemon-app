import React from 'react';
import './Pokecard.css';
import addPadding from './addPadding';

// const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

export default class Pokecard extends React.Component {
    render() {
        let cardId = addPadding(this.props.id, 3);
        let imgSrc = `${POKE_API}${cardId}.png`;
        return (
            <div className="Pokecard animated bounceInLeft">
                <div className="Pokecard-img"><img src={imgSrc} alt="pokemon character" /></div>
                <h2 className="Pokecard-title">{this.props.name}</h2>
                <div className="Pokecard-data">Type:{this.props.type}</div>
                <div className="Pokecard-data">EXP:{this.props.base_experience}</div>
            </div>
        )
    }
}