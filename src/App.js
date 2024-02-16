import React, { useState } from 'react';
import HomePage from './MyComponent/home.js';
import AboutPage from './MyComponent/About.js';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      default:
        return null;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('about')}>About</button>
      </nav>
      {renderPage()}
    </div>
  );
};

export default App;
