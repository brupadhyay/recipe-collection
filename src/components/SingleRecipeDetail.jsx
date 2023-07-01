import { useParams } from "react-router";
import { useRecipe } from "../context/RecipeContext";

import styles from "./component.module.css"

const SingleRecipeDetail = () => {
  const { recipeId } = useParams();
  const { state } = useRecipe();

  const {
    id,
    recipeimage,
    cuisine,
    title,
    ingredients,
    instructions
  } = state.find(({ id }) => String(id) === recipeId);


  return (
    <div id="mainBody">
      <article className={styles.productCard}>
        <div key={id} className={styles.imgWrapper}>
          <img
            className={styles.productImage}
            src={recipeimage}
            loading="lazy"
          />
        </div>
        <div className={styles.detailsWrapper}>
            <h3>{title}</h3>
            <p className={styles.vendor}>Cuisine: {cuisine}</p>
            <h3>Ingredients: </h3>
            <span>{ingredients.join(",")}</span>
            <h3>Instructions:</h3>
            <ol>
                {instructions.map((inst) => (
                    <li>{inst}</li>
                ))}
            </ol>
        </div>
      </article>
    </div>
  );
};

export { SingleRecipeDetail };
