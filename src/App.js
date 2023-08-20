import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from "./pages/Welcome";
import About from './pages/About';
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Navebar from './pages/Navebar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navebar />
      <Welcome />
      <About />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
