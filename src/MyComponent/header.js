import React from "react";
import "./header.css";

export default function Header({ setCurrentPage }) {
    
  return (
    <>
      <div className="HyperNav">
        <div id="gaurd" className="mainNav">
            <p>GAURDLINK</p>
        </div>
        <div className="mainNav">
          <button onClick={() => setCurrentPage('home')}>Home</button>
          <button onClick={() => setCurrentPage('about')}>About</button>
          <p>Github</p>
        </div>
        <div className="mainNav">
            <p>here is the time</p>
        </div>
      </div>
    </>
  );
}

// const [currentPage, setCurrentPage] = useState('home');

  // const renderPage = () => {
  //   switch (currentPage) {
  //     case 'home':
  //       return <HomePage />;
  //     case 'about':
  //       return <AboutPage />;
  //     default:
  //       return null;
  //   }
  // };

  // return (
  //   <div>
  //     <nav>
  //       <button onClick={() => setCurrentPage('home')}>Home</button>
  //       <button onClick={() => setCurrentPage('about')}>About</button>
  //     </nav>
  //     {renderPage()}
  //   </div>
  // );