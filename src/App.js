import React from 'react';

import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/footer';

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
      <Footer />
    </div>
  )
}

export default App;