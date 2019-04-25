import React from 'react';
import logo from './logo.svg';
import Header from './Header' 
import Home from './Home' 
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          
          <Route exact path="/" component={Home} />

        </div>
      </Router>
    </div>
  );
}



function About() {
  return <h2>About</h2>;
}

export default App;