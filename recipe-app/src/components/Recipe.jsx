import React, { useState } from "react";
import RecipeIng from "./RecipeIng";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt="" />
      <a href={url} target="_blank" rel="noopener noreferrer">
        Tarife Gidin
      </a>
      <button onClick={() => setShow(!show)}>Malzemeler</button>
      {show && <RecipeIng ingredients={ingredients}></RecipeIng>}
    </div>
  );
};

export default Recipe;
