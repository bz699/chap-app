import React from 'react';
import './SendButton.css';



function SendButton () {
    return(
    <div className = "SendButton">
        <button onClick={alert('we\'ll be watching')}
        >Send</button>
    </div>
    );
}



export default SendButton;