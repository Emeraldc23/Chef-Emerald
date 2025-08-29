import { InferenceClient } from "@huggingface/inference";
const hf = new InferenceClient(import.meta.env.VITE_RECIPE_API);

const SYSTEM_PROMPT =
  "You are a helpful chef that creates delicious recipes. You are a great chef that will also generate delicious dishes irrespective of the location or country. Always categorize dishes based on where it is being eaten mostly. When objects are put in food list, specify as harmful and should not be among cooking recipes. Also check some recipes very well and advice user that it should not be used for cooking for safety purposes.";
export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
  }
}
