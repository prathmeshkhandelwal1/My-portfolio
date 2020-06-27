import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Project from './Project';



function App() {
  return (
    <Router>
       <div className="app">
        <Nav/>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component = {Project}/>
        <Footer/>
      </div>
    </Router>
    
    
  );
}

export default App;
