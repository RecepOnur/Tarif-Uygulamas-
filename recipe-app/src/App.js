import { useState } from "react";
import "./App.css";
import axios from "axios";
import Recipe from "./components/Recipe";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [input, setInput] = useState("");
  const [recipe, setRecipe] = useState([]);
  const App_ID = "d9f37926";
  const App_key = "9337505eb7d57b601e46c374a01999e2";
  const url = `https://api.edamam.com/search?q=${input}&app_id=${App_ID}&app_key=${App_key}`;

  const SubmitHandle = (e) => {
    e.preventDefault();
    input.trim() === "" &&
      toast.error("Lütfen bir yemek adı girin !", {
        position: "top-left",
        autoClose: 3000,
      });
    axios(url).then((res) => setRecipe(res.data.hits));
    setInput("");
  };
  const HandleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <h1>Yemek Arama Uygulaması</h1>
      <form className="search-form" onSubmit={SubmitHandle}>
        <input
          type="text"
          placeholder="Aramak istediğiniz yemeği girin"
          onChange={HandleChange}
          value={input}
        />
        <input type="submit" value="Ara" />
      </form>
      <div className="recipes">
        {recipe !== [] &&
          recipe.map((item) => <Recipe key={uuidv4()} recipe={item}></Recipe>)}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
