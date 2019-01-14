import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokeList extends Component {
    render() {
      const {pokemon} = this.props;
        return (
          <React.Fragment>
              <ul className="pokemon__list">{pokemon.map((item,index) => {
                  return(
                    <li className="pokemon__list--li" key={index}>
                      <Pokemon item={item}/>
                    </li>
                   )
                 })}
              </ul>
          </React.Fragment>
        );
      }
  }

export default PokeList;
