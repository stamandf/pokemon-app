import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';


export default class Pokedex extends React.Component {
    static defaultProps = [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
      ];
    render() {
        return (
            <div>
                <h1>Pokedex</h1>
                <div className="Pokedex">
                    <div>
                        <Pokecard 
                                id={this.props[0].id}
                                name= {this.props[0].name}
                                type= {this.props[0].type}
                                base_experience= {this.props[0].base_experience}
                        />
                    </div>
                    <div>
                        <Pokecard 
                                id={this.props[1].id}
                                name= {this.props[1].name}
                                type= {this.props[1].type}
                                base_experience= {this.props[1].base_experience}
                        />
                    </div>
                    <div>
                        <Pokecard 
                                id={this.props[2].id}
                                name= {this.props[2].name}
                                type= {this.props[2].type}
                                base_experience= {this.props[2].base_experience}
                        />
                    </div>
                    <div>
                        <Pokecard 
                                id={this.props[3].id}
                                name= {this.props[3].name}
                                type= {this.props[3].type}
                                base_experience= {this.props[3].base_experience}
                        />
                    </div>
                    <div>
                        <Pokecard 
                                id={this.props[4].id}
                                name= {this.props[4].name}
                                type= {this.props[4].type}
                                base_experience= {this.props[4].base_experience}
                        />
                    </div>    
                    <div>
                        <Pokecard 
                                id={this.props[5].id}
                                name= {this.props[5].name}
                                type= {this.props[5].type}
                                base_experience= {this.props[5].base_experience}
                        />
                    </div>    
                    <div>
                        <Pokecard 
                                id={this.props[6].id}
                                name= {this.props[6].name}
                                type= {this.props[6].type}
                                base_experience= {this.props[6].base_experience}
                        />
                    </div>    
                    <div>
                        <Pokecard 
                                id={this.props[7].id}
                                name= {this.props[7].name}
                                type= {this.props[7].type}
                                base_experience= {this.props[7].base_experience}
                        />
                    </div>    
                </div>
            </div>
        )
    }
}
