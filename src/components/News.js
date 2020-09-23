import React from 'react';
import { Link } from 'react-router-dom';

function News(props) {
  // console.log(props) 
  let freshNews = props.news.map((news) => {
    // console.log(news.title)
    return (
      <div>
        <ul>
          <h3>{news.title}</h3>
          <p>{news.abstract}</p>
          <img style={{width:'400px'}} src={news.multimedia[0].url} alt="News Pics"/>
          <p><a href={news.short_url} >Read whole article</a></p>
        </ul>
      </div>
    )
  })
  return (
    <div>
      {freshNews}
    </div>
  );
}

export default News;