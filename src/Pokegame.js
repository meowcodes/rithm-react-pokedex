import React, { Component } from 'react';
import Pokedex from './Pokedex';
import pickRandom from './helper';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }

    render() {
        const pokemonsP1 = pickRandom(this.props.pokemon, 4);
        let expP1 = 0;
        for(let p of pokemonsP1){
            expP1 += p.base_experience
        }

        const pokemonsP2 = pickRandom(this.props.pokemon, 4);
        let expP2 = 0;
        for(let p of pokemonsP2){
            expP2 += p.base_experience
        }

    return (
        <div>
            <Pokedex pokemon={ pokemonsP1 } totalExp={ expP1 }/>
            <Pokedex pokemon={ pokemonsP2 } totalExp={ expP2 } />
        </div>
    );
  }
}

export default Pokegame;