import Markdown from "react-markdown";
import "../assets/cssStyle/recipeComp.css";

export default function RecipeComp({ updateRecipe }) {
  return (
    <section className="suggested-recipe-container">
      <h2>Chef Emerald Recommends:</h2>
      <Markdown>{updateRecipe}</Markdown>
    </section>
  );
}
