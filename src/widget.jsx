import React from 'react';
import ReactDOM from 'react-dom';
import CSSX from 'react-cssx';

class Widget extends React.Component {
  render() {
    return (
      <CSSX styles={ this.css() }>
        <form>
          <p>How are you today?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, aut sunt. Fugit pariatur quisquam dolor nesciunt saepe et provident vitae consequatur blanditiis expedita!</p>
          <input type="text" />
          <button>Answer</button>
        </form>
      </CSSX>
    );
  }
  css() {
    return (
      <style>
        form {
          background: #FFF;
          border: 3px solid #BADA55;
          padding: 1em;
        }
        p {
          color: #F00;
          padding: 0;
          margin-bottom: 3.5em;
          font-size: 14px;
        }
      </style>
    );
  }
}

const container = document.querySelector('#widget');

ReactDOM.render(<Widget />, container);

console.log(`You are using ${React.version} version of React and not ${window.React.version} which is the global one.`);

