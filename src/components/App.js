import React, { Component } from 'react';
import Navbar from './navbar';
import Display from './Display';

import { characters } from './characters';

const STATE = {
  START: 'Click an image to begin',
  CORRECT: 'You guessed right!',
  INCORRECT: 'You guessed wrong',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      topScore: 0,
      state: STATE.START,
      clickedArray: [],
      characters: characters.slice(),
    };
  }

  shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  handleClick = id => {
    // console.log(id);
    if (this.state.clickedArray.includes(id)) {
      let topScore =
        this.state.score > this.state.topScore
          ? this.state.score
          : this.state.topScore;
      this.setState({
        state: STATE.INCORRECT,
        topScore,
        clickedArray: [],
        score: 0,
        characters: characters.slice(),
      });
    } else {
      let clickedArray = [id, ...this.state.clickedArray];
      this.setState({
        clickedArray,
        score: this.state.score + 1,
        state: STATE.CORRECT,
        characters: this.shuffle(this.state.characters),
      });
    }
  };
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          msg={this.state.state}
        />
        <Display
          onClick={this.handleClick}
          characters={this.state.characters}
        />
      </div>
    );
  }
}

export default App;
