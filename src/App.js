import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Project from './Project';
import Particles from 'react-particles-js';



const particlesOption = {
  particles:{
    number:{
      value:100,
      density:{
        enable:true,
        value_area:800,
      }
    }
  }
}

function App() {
  return (
    <Router>
       <div className="app">
         {/* <Particles className="particles" 
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
              }}
            />  */}
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
