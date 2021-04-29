import { Component } from "react";
import book from '../img/recipe-book.png';
import harvest from '../img/harvest.png';
import chef from '../img/male-chef.png';
class sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <img
          alt="book"
          class="recipe-book"
          src={book}
        />
        <img
          alt="harvest"
          class="harvest"
          src={harvest}
        />
        <img
          alt="chef"
          class="male-chef"
          src={chef}
        />
      </div>
    );
  }
}

export default sidebar;
