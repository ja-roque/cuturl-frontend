import "./TopHundred.scss";
import React from "react";

function template() {
  return (
    <div className="top-hundred">
      <h1>Top 100 most visited URLs</h1>

        <table class="table table-dark mx-auto" style={{maxWidth: '700px'}}>
		  <thead>
		    <tr>
		      <th scope="col">Position</th>
		      <th scope="col">URL</th>
		      <th scope="col">Hits</th>
		    </tr>
		  </thead>
		  <tbody>
		    {this.state.urls.map((url, index) =>
	    	<tr>
		      <th scope="row">{index+1}</th>
		      <td>{window.location.hostname}/{url[0]}</td>
		      <td>{url[1]}</td>
	    	</tr>    
			)}		    
		  </tbody>
		</table>
    </div>
  );
};

export default template;
