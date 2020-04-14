import React from "react";
import Contact from "./Contact";


function ContactList () {

  const users = [
          {
            name: 'Robert Reyes',
            pic: 'https://randomuser.me/api/portraits/men/28.jpg',
            online: false
          },
          {
            name: 'Nellie Caldwell',
            pic: 'https://randomuser.me/api/portraits/women/17.jpg',
            online: true
          },
          {
            name: 'Vernon Mason',
            pic: 'http://randomuser.me/api/portraits/men/84.jpg',
            online: true
          },
          {
            name: 'Erica Hunt',
            pic: 'https://randomuser.me/api/portraits/women/87.jpg',
            online: false
          },
          {
            name: 'Juanita Phillips',
            pic: 'https://randomuser.me/api/portraits/women/55.jpg',
            online: true
          }
        ];

  return (
    <div>
      {users.map((user) => {
        return <Contact
          name = {user.name}
          pic = {user.pic}
          online = {user.online? true: false}
          key ={user.name}
        />
      }
      )}
    </div>
  )

}

export default ContactList;