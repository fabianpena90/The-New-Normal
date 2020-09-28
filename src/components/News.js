import React from "react";
import "../News.css";

// Bootstrap
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'


function News(props) {
  console.log(props);
  let freshNews = props.news.map((news) => {
    // console.log(news.title)
    return (
      <Container style={{marginBottom: ' 40px'}}>
        <Card style={{ width: "35rem", margin: 'auto' }}>
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
      </Container>
    );
  });
  return (
    <div>
    <Image className="newNY" src="./img/nytimess.png" fluid />
      {/* <img className="newNY" src="./img/nytimess.png" alt="title"/> */}
      {freshNews}
    </div>
  );
}

export default News;
