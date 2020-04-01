import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Contact
        pic = "https://randomuser.me/api/portraits/men/16.jpg"
        name = "Daryl Brewer"
        online
       />
       <Contact
        pic = 'https://randomuser.me/api/portraits/women/60.jpg'
        name = 'Leona Jones'
        online
       />
       <Contact
        pic = 'https://randomuser.me/api/portraits/men/58.jpg'
        name = 'Nelson Mendoza'
    />
    </div>
  )
}

export default App;