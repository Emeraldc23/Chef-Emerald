import { InferenceClient } from "@huggingface/inference";
const hf = new InferenceClient(import.meta.env.VITE_RECIPE_API);

const SYSTEM_PROMPT =
  "You are a helpful chef that creates delicious recipes. You are ai that will also generate African dishes most importantly Nigerian delicacies. Igbo dishes might be more";
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
