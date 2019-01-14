import React, { Component } from 'react'

export class Pokemon extends Component {
  render() {
    const {item} = this.props
      return (
          <div className="PokeList">
              <div className="image__pokemon">
                   <img
                    className="image__pokemon--style"
                    src={item.url}
                    alt="image pokemon"
                    />  
              </div>
              <div className="content_name-types">
              <h2 className="name">{item.name}</h2>
                <ul className="pokemon__list--types">
                  {item.types.map((itemList,index) => {
                    return(
                      <li className="pokemon__list--li--types" key={index}>
                      {itemList}
                      </li>
                    )
                  })}
                </ul>
              </div>
          </div>
      );
    }
};

export default Pokemon
