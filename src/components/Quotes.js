import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Quotes.css'

// Bootstrap
import Card from 'react-bootstrap/Card'

function Quotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  async function getQuote() {
    let arrayOfQuotes = [];

    try {
      let response = await axios.get("https://api.quotable.io/random");
      console.log(response);
      arrayOfQuotes = response.data;
      console.log(arrayOfQuotes);
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="quotes">
      <h1 className="quoteHeader">The New Normal Informative</h1>
    <Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            {quote}{' '}
          </p>
          <footer className="blockquote-footer"><cite title="Source Title">{author}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Quotes;
