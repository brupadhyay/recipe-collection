import { useState } from "react";
import { useRecipe } from "../context/RecipeContext";
import styles from "../screens/Home.module.css";

export const AddNewRecipe = ({ closeModal }) => {
  const { state, addRecipe } = useRecipe();

  const [newRecipe, setNewRecipe] = useState({
    id: state.length + 1,
    title: "",
    cuisine: "",
    recipeimage: "https://picsum.photos/200",
    ingredients: [],
    instructions: [],
  });

  const submitHandler = (e) => {
    e.preventDefault();

    addRecipe(newRecipe);
    closeModal();
  };
  return (
    <form onSubmit={submitHandler} className={styles.formClass}>
      <label for="name">Recipe Name:</label>
      <input
        value={newRecipe.title}
        type="text"
        id="name"
        name="name"
        onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
        required
      />

      <label for="cuisine">Cuisine:</label>
      <input
        type="text"
        id="cuisine"
        value={newRecipe.cuisine}
        onChange={(e) => setNewRecipe({ ...newRecipe, cuisine: e.target.value })}
        name="cuisine"
        required
      />

      <label for="ingredients">Ingredients:</label>
      <textarea
        id="ingredients"
        name="ingredients"
        placeholder="enter comma separated values"
        rows="4"
        value={newRecipe.ingredients.join(',')}
        onChange={(e) => setNewRecipe({...newRecipe, ingredients: e.target.value.split(',')})}
      ></textarea>

      <label for="instructions">Instructions:</label>
      <textarea
        id="instructions"
        name="instructions"
        placeholder="enter comma separated values"
        rows="4"
        value={newRecipe.instructions.join(',')}
        onChange={(e) => setNewRecipe({...newRecipe, instructions: e.target.value.split(',')})}
      ></textarea>

      <button onClick={closeModal}>Cancel</button>
      <button type="submit">Submit</button>
    </form>
  );
};
