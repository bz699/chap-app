import React from 'react';
import './Contact.css';

const Person = {
    pic : 'https://randomuser.me/api/portraits/men/16.jpg',
    name : 'Daryl Brewer',
};

const online = true;

function Contact () {
return (
    <div className="Contact">
        <img src = {Person.pic} alt='a portrait' className = 'avatar'></img>
        <div>
            <div className='name'><h4></h4>{Person.name}</div>
            <div className='status'>
                <div className='status-online'></div>
                <div className='status-text'>On watch</div>
            </div>
        </div>
    </div>
)
};

export default Contact;