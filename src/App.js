import React from 'react';
import logo from './logo.svg';
import Header from './Header' 
import Home from './Home'
import axios from "axios";
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Redirect} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}



function About() {
  return <h2>About</h2>;
}

function Redirect() {
  redirectToLongUrl()
  return <h2>Redirecting...</h2>;
}

async function redirectToLongUrl() {
    let response;
    try {
      response = await axios.get('https://cuturlapp.herokuapp.com/' + window.location.pathname)
      window.location.replace(response.data.long_url)
    } catch (error) {
      window.location.replace('/')
      console.error(error)
    }
}

export default App;