// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import BookMark from './components/BookMark';
import Filters from './components/Filters';



const App = () => {
  return (
    <Router>
      <div className='bg-gray-500 h-screen'>
        <Navbar />

        <hr />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/bookmark" element={<BookMark />} />
          <Route path="/filters" element={<Filters />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
