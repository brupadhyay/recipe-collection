import { Link } from "react-router-dom";
import { Filters } from "../components/Filters/Filters";
import { useRecipe } from "../context/RecipeContext";

import styles from "./Home.module.css";
import { useState } from "react";
import { AddNewRecipe } from "../components/AddNewRecipe";

export const Home = () => {
  const { state } = useRecipe();

  const [modal, setModal] = useState(false);

  const closeModal = () => setModal(false);

  return (
    <>
      <Filters />
      <h3>Your Recipes: </h3>
      <button onClick={() => setModal(true)}>Add a recipe</button>
      {state.length === 0 && <h4>No recipe matches your search, don't fret let's give it another shot</h4> }
      <div className={styles.container}>
        {state.map(({ id, title, cuisine, recipeimage }) => (
          <div key={id} className={styles.box}>
            <img src={recipeimage} alt="recipe" />
            <h2>{title}</h2>
            <p>Cuisine Type: {cuisine}</p>
            <p>
              Ingredients --
              <Link to={`/${id}`}>See Recipe</Link>
            </p>
            <p>
              Instructions --
              <Link to={`/${id}`}>See Recipe</Link>
            </p>
          </div>
        ))}
      </div>
      {modal && <div className={styles.wrapper}></div>}
      {modal && (
        <div className={styles.recipeModal}>
          <AddNewRecipe closeModal={closeModal} />
        </div>
      )}
    </>
  );
};
