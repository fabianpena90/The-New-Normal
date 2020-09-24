import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <h1>Get your daily dose of inspiration</h1>
      <br></br>
      <br></br>
      {/* <button onClick={getQuote}>Give me some Inspiration</button> */}
      <br></br>
      <br></br>
      <h2>Author: {author}</h2>
      <p>{quote}</p>
    </div>
  );
}

export default Quotes;
