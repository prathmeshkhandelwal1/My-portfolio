import React,{Component} from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Project from './Project';






class App extends Component {

  constructor(){
      super()
      this.state={
        color:true
      }
    }

  render(){
    
    

    this.colorChange=()=>{
      this.setState({
        color:!this.state.color
      })
      
    }
    
    return(
        <Router>
          <div className="app" onClick={this.colorChange}  style={{
            "backgroundColor": this.state.color ? '#1D0303' : '#070F2C'
          }}>
          <Nav/>
          <Route path="/" exact component={Home} onClick={this.colorChange}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component = {Project}/>
          <Footer/>
          </div>
        </Router>
    )
  }
}
 

export default App;
