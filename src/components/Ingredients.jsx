import "../assets/cssStyle/ingredient.css";

export default function Ingredient({
  ingredients,
  getRecipe,
  handleDounbleClick,
}) {
  return (
    <div className="ingredient">
      <>
        {" "}
        <div className="mainContent">
          <h2>Ingredientes on hand:</h2>
          <ul className="ingredientList">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        {ingredients.length >= 2 && (
          <div className="askAi">
            <div className="textContent">
              <h3>Ready for a recipe?</h3>
              <div className="aiMsg">Generate a recipe</div>
            </div>
            <button
              className="showRecipe"
              onClick={getRecipe}
              onDoubleClick={handleDounbleClick}
            >
              Get a recipe
            </button>
          </div>
        )}
      </>
    </div>
  );
}
