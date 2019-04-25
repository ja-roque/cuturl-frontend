import React    from "react";
import template from "./Home.jsx";
import axios from "axios";



class Home extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          url: ' '          
      };
  }

  submit = (e) => {

    axios.post('https://cuturlapp.herokuapp.com/url.json', 
    {
      url: e
    })
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
 }

  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const form = {
      url: this.state.url
    }
    
    this.setState({
          url: ''
    })
  }

  render() {
    return template.call(this);
  }
}

export default Home;
