import React from 'react';

import Header from './components/Header';
import Footer from './components/footer';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

import PropTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <Header />
      <ContactList/>
      <Footer />
    </div>
  )
}

Contact.propTypes = {
  pic: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
}

export default App;