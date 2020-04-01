import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


function Contact(props) {
  return (
    <div className="Contact">
      <img src={props.pic} alt="a portrait" className="avatar" />
      <div>
        <div className="name">{props.name}</div>
        <div className="status">
          <div className={props.online ? "status-online" : "status-offline"} />
          <div className={props.online ? "status-text-online" : "status-text-offline"}>On watch</div>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
    pic: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  }

  export default Contact;