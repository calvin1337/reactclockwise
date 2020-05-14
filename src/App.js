import React, {Component} from 'react';
import './App.css';
import Homepage from "./Containers/Homepage/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router , Route} from 'react-router-dom'
import AboutIntro from "./Components/Homepage/AboutIntro";

import Nav from "./Components/Nav/Nav"
import Footer from "./Components/Footer/Footer";
import ServicesContainer from "./Containers/Services/Services";
import About from './Containers/About/About';



export class App extends Component {
  
  

  render() {
    return (
      <div className="App">
      <Router >
      <Nav />
      <Route Route path="/reactclockwise" exact render={props => (
        
          <Homepage />
          
        
      )} />

      <Route path="/reactclockwise/about" render={props => (
        
        <About />
        
      
    )} />
      <Route path="/reactclockwise/services" render={props => (
        <div>
          <ServicesContainer />
          
        </div>
        
      )} />
      </Router>
      <Footer />
    </div>
    )
  }
}

export default App

