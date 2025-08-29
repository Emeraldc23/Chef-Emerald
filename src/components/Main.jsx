import "../assets/cssStyle/main.css";
import { useState } from "react";
import RecipeComp from "./RecipeComp";
import Ingredient from "./Ingredients";
import { getRecipeFromMistral } from "../../data/ai";

export default function MainSection() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [updateRecipe, setUpdateRecipe] = useState("");
  const [showMsg, setShowMsg] = useState("");
  const message = (
    <p style={{ color: "white" }}>
      Please wait while your recipe gets ready...
    </p>
  );

  async function getRecipe() {
    setUpdateRecipe("Loading recipe...⏳");
    const response = await getRecipeFromMistral(ingredients);
    setUpdateRecipe(response);
  }
  function handleAction(formData) {
    const newRecipe = formData.get("recipe");
    const recipeArray = [...ingredients, newRecipe];
    setIngredients(recipeArray);
    setRecipe("");
  }
  function handleDounbleClick() {
    setShowMsg(message);
    setTimeout(() => {
      setShowMsg("");
    }, 1000);
  }
  function reLoadState() {
    setIngredients("");
    setUpdateRecipe("");
  }
  return (
    <main className="main">
      <p className="italics">
        Got ingredients? 🥕🍗 I’ll cook up the magic! ✨{" "}
      </p>
      <form className="inputField" action={handleAction}>
        <input
          type="text"
          placeholder="e.g beans"
          name="recipe"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
        />
        <button type="submit" className="btn-1">
          Add ingredient
        </button>
      </form>
      {ingredients.length > 0 && (
        <Ingredient
          ingredients={ingredients}
          getRecipe={getRecipe}
          showMsg={showMsg}
          handleDounbleClick={handleDounbleClick}
        />
      )}
      {updateRecipe && (
        <>
          <RecipeComp updateRecipe={updateRecipe} />{" "}
          <button onClick={reLoadState} className="refreshBtn">
            Refresh Page
          </button>
        </>
      )}
      <p>{showMsg}</p>
    </main>
  );
}

/*
 if (newInput) {
      // add custom input
      setNewList([...newList, newInput]);
      setNewInput("");
    } else if (index < ingredientsList.length) {
      // add next default item
      setNewList([...newList, ingredientsList[index]]);
      setIndex(index + 1);
    }

    function handleSubmit(e) {
    e.preventDefault();
    const input = e.target.elements[0];
    const value = input.value.trim();
    if (value) {
      setIngredients([...ingredients, value]);
      input.value = "";
    }
    setRecipe("");
  }


    const [newList, setNewList] = useState([]);
  const ingredientsList = ["chicken", "rice", "beans"];
  const mapIngredient = newList.map((item) => <li key={item}>{item}</li>);
  const [newInput, setNewInput] = useState("");
  const [index, setIndex] = useState(0);

  const handleNewSubmit = (e) => {
    e.preventDefault();

    newInput
      ? (setNewList([...newList, newInput]), setNewInput(""))
      : index < ingredientsList.length &&
        (setNewList([...newList, ingredientsList[index]]),
        setIndex((prevIndex) => prevIndex + 1));
  };
    <form action="" onSubmit={handleNewSubmit}>
          <input
            type="text"
            value={newInput}
            onChange={(e) => setNewInput(e.target.value)}
          />
          <button>new List</button>
        </form>
        <ol>{mapIngredient}</ol>
 */
