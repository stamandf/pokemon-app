import React from 'react';
import Pokecard from './Pokecard';
import uuid from 'uuid';
import './Pokedex.css';
import './animate.min.css';


export default class Pokedex extends React.Component {
    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            // {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            // {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            // {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            // {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ],
        totalExp : 0,
        isWinner : false,
        showWinner : false
    };
        
    render() {
        return (
            <div>
                { this.props.showWinner && (this.props.isWinner ? <h1 className="Winner animated tada">Winning Hand</h1> : <h1 className="Loser">Losing Hand</h1>)}
                <h1 className="Experience">Total experience: {this.props.totalExp}</h1>
                <div className="Pokedex">
                {    (this.props.isWinner) ? 
                        this.props.pokemon.map((card) => (
                    <div className="Pokedex-cards animated tada" key={uuid()}>
                        <Pokecard
                                id={card.id}
                                name={card.name}
                                type={card.type}
                                base_experience={card.base_experience}
                        />
                    </div>))
                     : 
                        this.props.pokemon.map((card) => (
                    <div className="Pokedex-cards" key={uuid()}>
                        <Pokecard
                                id={card.id}
                                name={card.name}
                                type={card.type}
                                base_experience={card.base_experience}
                        />
                    </div>))
                    }
                {/* {this.props.pokemon.map((card) => (
                    <div className="Pokedex-cards" key={uuid()}>
                        <Pokecard
                                id={card.id}
                                name={card.name}
                                type={card.type}
                                base_experience={card.base_experience}
                        />
                    </div>
                    ))} */}
                </div>
            </div>
        );
    }
}
