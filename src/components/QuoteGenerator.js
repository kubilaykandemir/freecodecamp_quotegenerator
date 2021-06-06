import { quotes } from "../quotes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

import React, { Component } from "react";

export default class QuoteGenerator extends Component {
  constructor(props) {
    const firstRandomNumber = Math.floor(Math.random() * quotes.length);
    super(props);
    this.state = {
      quote: quotes[firstRandomNumber].quote,
      author: quotes[firstRandomNumber].author,
    };
    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  handleClick() {
    const randomQuote = this.getRandomQuote();
    this.setState({
      quote: randomQuote.quote,
      author: randomQuote.author,
    });
  }

  render() {
    const randomQuoteButton = (
      <button
        className="randomQuoteButton"
        style={{ backgroundColor: this.props.randomColor }}
        onClick={() => {
          this.handleClick();
          this.props.onClick();
        }}
      >
        New Quote
      </button>
    );
    const facebookUrl = encodeURI(
      `https://www.facebook.com/sharer/sharer.php?u=https://127.0.0.1:3000`
    );
    const facebookButton = (
      <a
        href={facebookUrl}
        target="_blank"
        rel="noreferrer"
        className="fa-facebook"
      >
        <FontAwesomeIcon
          style={{ color: this.props.randomColor }}
          icon={faFacebook}
          size="3x"
        />
      </a>
    );

    const twitterUrl = encodeURI(
      `https://twitter.com/intent/tweet?text=${this.state.quote}+-${this.state.author}+&hashtags=quotes`
    );
    const twitterButton = (
      <a href={twitterUrl} target="_blank" rel="noreferrer" className="twitter">
        <FontAwesomeIcon
          style={{ color: this.props.randomColor }}
          icon={faTwitter}
          size="3x"
        />
      </a>
    );
    return (
      <div className="quoteGenerator">
        <div className="quoteBox">
          <p className="quote">{this.state.quote}</p>
          <p className="author">-{this.state.author}</p>
        </div>
        <div className="buttonBox">
          <div className="socialButtons">
            {facebookButton}
            {twitterButton}
          </div>
          {randomQuoteButton}
        </div>
      </div>
    );
  }
}
