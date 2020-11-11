import React from "react";
import { Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'


function News(props) {
  
  let freshNews = props.news.map((news) => {
    console.log(news)
    return ( 
      
      <div className="ui items">
        <div className="item">
        <div className="ui medium image">
          <img src={news.multimedia[0].url} alt="media"/>
        </div>
        
        <div className="content">
          <Link to={news.url} className="header">{news.title}</Link>
        <div className="description">{news.abstract}</div>
        <div className="description">{news.byline}</div>
        <div className="extra">
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
    <img src="./img/nytimess.png" className="ui medium centered image" alt="header news title"/>
      {freshNews}
    </div>
  );
}

export default News;