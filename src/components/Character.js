import React, { Component } from 'react';
import '../scss/Character.css';

class Character extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.onClick(this.props.character.id)}
        className="character"
      >
        <img src={this.props.character.img} />
        <h1>{this.props.character.id}</h1>
      </div>
    );
  }
}

export default Character;
