import React, { Component } from 'react';
import '../scss/Navbar.css';

const STATE = {
  START: { msg: 'Click an image to begin.', style: {} },
  CORRECT: { msg: 'You guessed right!', style: { color: 'green' } },
  INCORRECT: { msg: 'You guessed wrong.', style: { color: 'red' } },
};

class Navbar extends Component {
  render() {
    let state = STATE[this.props.state];
    return (
      <div className="navbar">
        <ul>
          <li>Clicky Game: Presidential Edition</li>
          <li style={state.style}>{state.msg}</li>
          <li>
            Score: {this.props.score} | Top Score: {this.props.topScore}
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
