import { createContext, useContext, useReducer } from "react";

import { data as initialRecipes } from "../data/data"
import { reducer } from "../reducer/Reducer";
 
const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {

    let initialData = JSON.parse(localStorage.getItem("recipes"));


    const[state, dispatch] = useReducer(reducer, initialData ? initialData : initialRecipes );

    const addRecipe = (recipedata) => {
        dispatch({
            type: 'ADD_NEW_RECIPE',
            payload: recipedata
        })
    }


    const applySearch = (value, type) => {
        dispatch({
            type: 'SEARCH',
            payload: {value, type}
        })
    }

    return(
        <RecipeContext.Provider value={{
            state, 
            addRecipe,
            dispatch,
            applySearch
        }}>
            {children}
        </RecipeContext.Provider>
    )
}

const useRecipe = () => useContext(RecipeContext);

export { RecipeContext, RecipeProvider, useRecipe };