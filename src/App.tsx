import React from 'react';
import './App.css';
import { HomePage } from './layouts/HomePage/Component/HomePage';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';

export const App = () => {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
