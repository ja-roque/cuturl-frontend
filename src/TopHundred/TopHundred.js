import React    from "react";
import axios from "axios";
import template from "./TopHundred.jsx";

class TopHundred extends React.Component {
  
	constructor(props) {
		super(props);
		this.state = {
		  urls: []
		};

		this.getTopHundred();
	}

	getTopHundred = async () => {
		let response;
		try {
			response = await axios.get('https://cuturlapp.herokuapp.com/top.json')
			this.setState({
          		urls: response.data.top_100
      		})
		} catch (error) {
			console.error(error)
		}
	}

  render() {
    return template.call(this);
  }
}

export default TopHundred;
