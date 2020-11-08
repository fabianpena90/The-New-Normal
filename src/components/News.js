import React from "react";
import { Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'


function News(props) {
  
  let freshNews = props.news.map((news) => {
    console.log(news)
    return ( 
      
      <div class="ui items">
        <div class="item">
        <div class="ui medium image">
          <img src={news.multimedia[0].url} alt=""/>
        </div>
        
        <div class="content">
          <Link to={news.url} class="header">{news.title}</Link>
        <div class="description">{news.abstract}</div>
        <div class="description">{news.byline}</div>
        <div class="extra">
          <Link to={news.url} target="_blank">
            Read whole article
          </Link>
        </div>
        </div>
        </div>
      </div>
    );
  });

  return (
    <div className="ui container">
    <img src="./img/nytimess.png" class="ui medium centered image" alt="header news title"/>
      {freshNews}
    </div>
  );
}

export default News;