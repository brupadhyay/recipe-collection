import { useState } from "react";
import { useRecipe } from "../context/RecipeContext";

export const Filters = () => {

    const { applySearch } = useRecipe();

    const types = ["name", "cuisine", "ingredients"]

    const [filterType, setFilterType] = useState("name");
    const [search, setSearch] = useState("");


    const handleType = (e) => {
        setFilterType(e.target.value);

        if(search) {
            applySearch(search, e.target.value);
        }
    }
    
    const searchHandler = (e) => {
        const value = e.target.value.trim();

        if(value) {
            setSearch(value);
            applySearch(value, filterType);
        }
    }

    return(
        <header>
            <label htmlFor="recipe-search">
                <input onChange={searchHandler} type="text" placeholder="enter text to search" />{}
            </label>
            <span>
                Search via
                {types.map((type)=> (
                    <label key={type} htmlFor={type}>
                        <input onChange={handleType} checked={type === filterType} type="radio" name="filters" value={type} />
                        {type}
                    </label>
                ))}
            </span>
        </header>
    )
};