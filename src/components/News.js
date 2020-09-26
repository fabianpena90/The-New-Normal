import React from 'react';
import { Link } from 'react-router-dom';
import '../News.css'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function News(props) {
  // console.log(props) 
  let freshNews = props.news.map((news) => {
    // console.log(news.title)
    return (
      

      <Container className="newsContainer" fluid="md">
        <Row className="justify-content-md-center">
          <Col sm={8}>
          <h2 className="newsTitle">{news.title}</h2>
          <p>{news.abstract}</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={8}>
          {/* <img style={{width:'400px'}} src={news.multimedia[0].url} alt="News Pics"/> */}
          <Image src={news.multimedia[0].url} fluid />
          <p className="newsArticle" ><a href={news.short_url} >Read whole article</a></p>
          </Col>
        </Row>
      </Container>
    )
  })
  return (
    <div>
      <h1 className="newsHeader">Latest News</h1>
      {freshNews}
    </div>
  );
}

export default News;