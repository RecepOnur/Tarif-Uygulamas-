import React from "react";
import { v4 as uuidv4 } from "uuid";

const RecipeIng = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient) => (
        <ul key={uuidv4()} className="list">
          <li className="text">{ingredient.text}</li>
          <li className="weight"> Weight : {ingredient.weight}</li>
        </ul>
      ))}
    </div>
  );
};

export default RecipeIng;
