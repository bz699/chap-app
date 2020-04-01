import React from 'react';
import './Contact.css';



function Contact () {
return (
    <div className="Contact">
        <img src = {User.pic} alt='a portrait' className = 'avatar'></img>
        <div>
            <div className='name'>{User.name}</div>
            <div className='status'>
                <div className='status-online'></div>
                <div className='status-text'>On watch</div>
            </div>
        </div>
    </div>
)
};

export default Contact;
