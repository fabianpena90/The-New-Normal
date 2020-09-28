import React from "react";
import "../News.css";

// Bootstrap
import Card from 'react-bootstrap/Card'

function News(props) {
  console.log(props);
  let freshNews = props.news.map((news) => {
    // console.log(news.title)
    return (
      <div className="newscard">
        <Card style={{ width: "40rem" }}>
          <Card.Img variant="top" src={news.multimedia[0].url} />
          <Card.Body>
            <Card.Title className="halfBody">{news.title}</Card.Title>
            <Card.Text>{news.abstract}</Card.Text>
            <Card.Text>{news.geo_facet[0]}</Card.Text>
            <Card.Text>{news.item_type}</Card.Text>
            <Card.Text>{news.byline}</Card.Text>
            <Card.Link href={news.short_url}>Read whole article</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  });
  return (
    <div>
      <h2 className="newsHeader">Latest News</h2>
      {freshNews}
    </div>
  );
}

export default News;
