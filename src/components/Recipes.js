import React, { useState } from "react";
import axios from "axios";

function Recipes() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const Id = "1949bcdc";
  const Key = "b99569c224fcfecca6f202946bed7bfe";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${Id}&app_key=${Key}&from=0&to=3&calories=591-722&health=alcohol-free`;

  const getData = async () => {
    const result = await axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);
    setQuery("");
  };

  const onType = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div>
      <h1>Search your favorite recipes!</h1>
      {/* <button onClick={getData}>button</button> */}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search Food"
          onChange={onType}
          value={query}
        />
        <input type="submit" value="search" />
      </form>
      <div>
        {recipes !== [] &&
          recipes.map((recipe) => (
            <ul>
              <li>
                <img src={recipe.recipe.image}></img>
              </li>
              <li>
                <h2>{recipe.recipe.label}</h2>
              </li>
              <li>
                <h4>Calories:{recipe.recipe.calories.toFixed(0)}</h4>
              </li>
              <li>
                <a href={recipe.recipe.url}>recipes</a>
              </li>
              {/* <li> */}
              {/* <p>{recipe.recipe.ingredients[1].text}</p>
                </li>
                <li>
                  <p>{recipe.recipe.ingredients[2].text}</p>
                </li>
                <li>
                  <p>{recipe.recipe.ingredients[3].text}</p>
                </li>
                <li>
                  <p>{recipe.recipe.ingredients[4].text}</p>
                </li> */}
              {/* <li>
                  <h4>{recipe.recipe.ingredients[5].text}</h4>
                </li> */}
            </ul>
          ))}
      </div>
    </div>
  );
}

export default Recipes;
