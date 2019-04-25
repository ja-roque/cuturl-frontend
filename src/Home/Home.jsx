import "./Home.scss";
import React from "react";

function template() {
  return (
    <div className="home">
      <img src="https://business.critizr.com/hubfs/template-images-blog-couverture-Ame%CC%81liorer-son-re%CC%81fe%CC%81rencement-avec-Google-my-Business-1.png" class="d-block w-100" alt="..." style={{maxHeight:'800px'}} />
      
      <h1 >Small Links for great business</h1>
      <p className="text-white">Create and share trusted, powerful short links</p>

      <form class="my-2 my-lg-0 w-100 d-flex " onSubmit={(e) => e.preventDefault()}>
        <input class="form-control  m-2" type="search" placeholder="Search" aria-label="Search"
          name = "url"
          value={this.state.url}
          onChange={e => this.handleChange(e)} 
        />
        <button class="btn btn-danger  m-2" type="submit" onClick={(e) => {this.submit(this.state.url)}}>Search</button>
      </form>
    </div>
  );
};

export default template;
