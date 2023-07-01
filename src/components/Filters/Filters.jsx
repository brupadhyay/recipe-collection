import { useState } from "react";
import { useRecipe } from "../../context/RecipeContext";

import styles from "./Filters.module.css";

export const Filters = () => {
  const { applySearch } = useRecipe();

  const types = ["name", "cuisine", "ingredients"];

  const [filterType, setFilterType] = useState("name");
  const [search, setSearch] = useState("");

  const handleType = (e) => {
    setFilterType(e.target.value);

    applySearch(search, e.target.value);
  };

  const searchHandler = (e) => {
    const value = e.target.value;
    setSearch(value);
    applySearch(value.trim(), filterType);
  };

  return (
    <header className={styles.header}>
      <label htmlFor="recipe-search">
        <input
          onChange={searchHandler}
          type="text"
          placeholder="enter text to search"
        />
      </label>
      <span>
        Search via
        {types.map((type) => (
          <label key={type} id="filters" >
            <input
              onChange={handleType}
              checked={type === filterType}
              type="radio"
              name="filters"
              id="filters"
              value={type}
            />
            {type}
          </label>
        ))}
      </span>
    </header>
  );
};
