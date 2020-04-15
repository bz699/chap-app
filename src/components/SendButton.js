import React from 'react';
import './SendButton.css';


class SendButton extends React.Component {

eventListener = (event) => {
    const id = event.target.id;
    const type = event.target.type;
    const className = event.target.className;
    const text = event.target.innerText;
    alert(`We will watch`);
  };


render() {
    return (
      <button
      id="SendButton"
      type="button"
      className="SendButton"
      onClick={this.eventListener}
    >Send
      </button>
    );
  }
}

export default SendButton;