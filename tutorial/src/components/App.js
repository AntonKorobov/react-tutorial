import React from 'react';
import './App.css';
import Footer from './Footer';
import MainContent from './MainContent';
import Header from './Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
