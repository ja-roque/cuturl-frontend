import React    from "react";
import template from "./Home.jsx";
import axios from "axios";



class Home extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          url: ' ',
          response: { error: null, short_url: ''}
      };
      this.submit = this.submit.bind(this);
  }

  submit = (e) => {
  	let self = this
    axios.post('https://cuturlapp.herokuapp.com/url.json', 
    {
      url: e
    })
    .then(function (response) {
      // handle success
      self.setState({'response': { error: false, short_url: response.data.short_url } })
    })
    .catch(function (error) {
      // handle error
      self.setState({'response': { error: true, short_url: error.data } })
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

  copyToClipboard = (text) => {
    var dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute('value', text);
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
  };

  render() {
  	if (this.state.response.error == false) {
  		this.alert = <div class="alert alert-success" role="alert">
		  Success! Your short url is: <strong id="generated_url">{window.location.hostname}/{this.state.response.short_url}</strong>
		  <button type="button" class="btn btn-light" aria-label="Close" onClick={e => this.copyToClipboard( document.querySelector('#generated_url').textContent )}>
		    <span aria-hidden="true">Copy to clipboard</span>
	  	   </button>
		</div>		
  	} else if (this.state.response.error == true) {
  		this.alert = <div class="alert alert-danger" role="alert">
		  Please make sure to enter a valid url!
		</div>
  	} else {
  		this.alert = ''
  	}
    return template.call(this);
  }
}

export default Home;
