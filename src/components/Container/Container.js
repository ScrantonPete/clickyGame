import React, { Component } from "react";
import "./Container.css";
import beerCards from "../../beers.json.js";
import Card from "../Card";
import Header from "../Header/Header";

class Container extends Component {
  state = {
    beers: beerCards,
    score: 0
  };

  resetGame = () => {
    this.setState({
      score: 0,
      beers: beerCards
    });
  };

  handleCorrect = newbeers => {
    this.setState({
      beers: this.shuffleArray(newbeers),
      score: this.state.score + 1
    });

    if (this.state.score === 11) {
      alert("You can handle your booze and got to drink all 12!");
      this.resetGame();
      console.log("You won!");
    }
  };

  handleWrong = () => {
    alert("You must be drunk! You already drank that one!");
    this.resetGame();
  };

  handleClick = name => {
    console.log("BEER: " + name);
    let guessedCorrect = false;
    const newbeers = this.state.beers.map(beer => {
      const newPic = { ...beer };
      if (newPic.name === name) {
        if (!newPic.clicked) {
          newPic.clicked = true;
          guessedCorrect = true;
        }
      }
      return newPic;
    });
    console.log("Correct Guess?: ", guessedCorrect);
    // console.log(guessedCorrect);
    // console.log("Brewery - Beer: " + beer.name);
    // console.log("Untappd url: " + newPic.unTappd);
    // console.log("Brewery Webpage: " + newPic.url);

    guessedCorrect ? this.handleCorrect(newbeers) : this.handleWrong(newbeers);
  };

  shuffleArray = beers => {
    for (let i = beers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [beers[i], beers[j]] = [beers[j], beers[i]];
    }
    return beers;
  };

  render() {
    return (
      <div>
        <Header score={this.state.score} />
        <div className="containerWrapper">
          <div className="container">
            {this.state.beers.map(beer => {
              return (
                <Card
                  name={beer.name}
                  key={beer.name}
                  handleClick={this.handleClick}
                  src={beer.image}
                  alt={beer.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
