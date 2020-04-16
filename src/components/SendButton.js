import React from 'react';
import './SendButton.css';


class SendButton extends React.Component {

eventListener = (event) => {
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