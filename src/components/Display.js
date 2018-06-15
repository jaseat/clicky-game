import React, { Component } from 'react';
import Character from './Character';

import '../scss/Display.css';

class Display extends Component {
  render() {
    return (
      <div className="display">
        {this.props.characters.map(c => (
          <Character character={c} key={c.id} onClick={this.props.onClick} />
        ))}
      </div>
    );
  }
}

export default Display;
