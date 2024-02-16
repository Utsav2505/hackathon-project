import React, { useState } from 'react';
import HomePage from './MyComponent/home.js';
import AboutPage from './MyComponent/About.js';
import Header from './MyComponent/header.js';
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === 'home' ? <HomePage /> : <AboutPage />}
    </>
  );
};

export default App;
