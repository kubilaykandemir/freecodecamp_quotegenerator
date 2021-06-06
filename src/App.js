import "./App.css";
import QuoteGenerator from "./components/QuoteGenerator";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "rgb(204,255,229)",
    };
    this.getRandomColor = this.getRandomColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  }

  handleClick() {
    const color = this.getRandomColor();
    this.setState({
      color,
    });
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.color }}>
        <QuoteGenerator
          randomColor={this.state.color}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
