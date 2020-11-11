import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Quotes.css";

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
    <div className="">
    
      <img class="ui fluid image" src="/img/bg.jpg" alt="news"/>
      <div className="box-message">
      <h1>The New Normal Informative</h1>
      <div className="box">
      <h2 className="header">{author}</h2>
      <blockquote>
        <q>{quote}</q>
      </blockquote>
      </div>
      </div>
    </div>
  );
}


export default Quotes;