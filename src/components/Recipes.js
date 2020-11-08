import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


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

  const handleClick = (e) => {
    getData();
  };

  return (
    <div className=" ui container">
    <img className="ui medium centered image" src="./img/recipesLogo.png" alt="title" />
    <div class="ui fluid large action input">
    <input 
      type="text" 
      placeholder="Search your recipe..."
      onChange={onType}
      value={query}
      />
    <button onClick={handleClick} className="ui button">Search</button>
    </div>
      <div className="ui container">
        {recipes !== [] &&
          recipes.map((recipe) => (
            <div className="ui doubling stackable centered three cards">
            <div className="ui card">
            <img src={recipe.recipe.image} className="ui image" alt="img"/>
            <div className="content">
            <div className="header">{recipe.recipe.label}</div>
            <div className="description">Calories: {recipe.recipe.calories.toFixed(0)}</div>
            </div>
            <div className="extra content">
            <button className="ui primary button">
            <Link to={recipe.recipe.url} target="_blank">
              Full recipe
            </Link>
            </button>
            </div>
            </div>
            </div>


            
          ))}
      </div>
    </div>
  );
}

export default Recipes;
// <ul>
//               <div className="foodresults">
//                 <Card style={{ width: "18rem" }}>
//                   <Card.Img variant="top" src={recipe.recipe.image} />
//                   <Card.Body>
//                     <div className="cardbody">
//                       <Card.Title><p className="recipesTitle">{recipe.recipe.label}</p></Card.Title>
//                       <Card.Text >
//                         <p className="recipesText">Calories:{recipe.recipe.calories.toFixed(0)}</p>
//                       </Card.Text>
//                       <Button variant="primary">
//                         <a href={recipe.recipe.url} className="linktext" target="_blank">
//                           Full recipe
//                         </a>
//                       </Button>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </div>
//             </ul>