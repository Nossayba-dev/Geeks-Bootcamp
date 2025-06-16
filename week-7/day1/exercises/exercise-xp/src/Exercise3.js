import React, { Component } from 'react';
import './Exercise.css';

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

class Exercise extends Component {
  render() {
    return (
      <div className="para">
        <h1 >This is a Header</h1>
        <p >This is a Paragraph</p>
        <a href="https://www.example.com" target="_blank" rel="noreferrer">This is a Link</a>

        <h3>This is a Form:</h3>
        <form>
          <label>Enter your name:</label><br />
          <input type="text" />
          <button type="submit">Submit</button>
        </form>

        <h3>Here is an Image:</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React logo"
          width="500"
        />

        <h3>This is a List:</h3>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
