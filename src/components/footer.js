import React from 'react';
import './footer.css';
import SendButton from './SendButton';

function Footer() {
    return (
        <div className="Footer">
            <div className="CatchPhrase">Someone we should watch ?</div>
            <form className="AlertForm">
                <div className="FormNameAndCity">
                    <label><input type="text" name="name" placeholder="name" /></label>
                    <label><input type="text" name="name" placeholder="city"/></label>
                </div>
                <SendButton />
            </form>
        </div>
    );
}

export default Footer;