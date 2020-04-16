import React from 'react';
import './Contact.css';


class Contact extends React.Component {
  constructor (props) {
    super(props)
      this.state = {
        online: props.online,
      };
  }

/*<div className={props.online ? "status-online" : "status-offline"} />
  <div className={props.online ? "status-text-online" : "status-text-offline"}>On watch</div> */


  render (){
    return (
      <div className="Contact">
        <img src={this.props.pic} alt="a portrait" className="avatar" />
        <div>
          <div className="name">{this.props.name}</div>

          <div className="status">
          
            <div className={this.state.online ? "status-online" : "status-offline"} />
          
            <p className="status-text"
              onClick= { event => {
                const newStatus =! this.state.online;
                this.setState({online : newStatus});
              }}>
              {this.state.online ? "onwatch" : "offwatch"}
            </p>
          
          </div>

        </div>
      </div>
    );
  }
}


export default Contact;