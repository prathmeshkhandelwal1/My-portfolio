import React, { Component } from "react";
import "./App.css";
import Nav from "./NavBar/Nav";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import About from "./About/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Project from "./Projects/Project";

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: true,
    };
  }

  render() {
    this.colorChange = () => {
      this.setState({
        color: !this.state.color,
      });
    };

    return (
      <Router>
        <div
          className="app"
          onClick={this.colorChange}
          style={{
            backgroundColor: "#1D0303",
          }}
        >
          <Nav />
          <Route path="/" exact component={Home} onClick={this.colorChange} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Project} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
