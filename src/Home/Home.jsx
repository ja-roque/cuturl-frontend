import "./Home.scss";
import TopHundred from '../TopHundred';
import React from "react";

function template() {
  return (
    <div className="home">
      <img src="https://business.critizr.com/hubfs/template-images-blog-couverture-Ame%CC%81liorer-son-re%CC%81fe%CC%81rencement-avec-Google-my-Business-1.png" class="d-block w-50 mx-auto" alt="..." style={{maxHeight:'500px', maxWidth: '500px'}} />
      
      <h1>Small Links for great business</h1>
      <p className="text-white">Create and share trusted powerful short links</p>
      <p className="text-white">Enter your looong url below and click submit!</p>

      <form class="my-2 my-lg-0 w-60 d-flex " onSubmit={(e) => e.preventDefault()}>
        <input class="form-control w-60 m-2" type="text" placeholder="Enter your looooooooooong url" aria-label="Search"
          name = "url"
          value={this.state.url}
          onChange={e => this.handleChange(e)} 
        />
        <button class="btn btn-danger m-2" type="submit" onClick={(e) => {this.submit(this.state.url)}}>Search</button>
      </form>
      
      <TopHundred />
    </div>
  );
};

export default template;
