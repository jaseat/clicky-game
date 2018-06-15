import React, { Component } from 'react';
import '../scss/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>Clicky Game</li>
          <li>{this.props.msg}</li>
          <li>
            Score: {this.props.score} | Top Score: {this.props.topScore}
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
