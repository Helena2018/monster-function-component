import { Component } from "react";
import './card.style.css';

class Card extends Component {
  render() {
    return (
      <input 
          className={`search-box ${this.props.className}`}
          type='search' 
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler} 
      />
    );
  }
}

export default Card;