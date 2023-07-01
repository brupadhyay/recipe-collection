import { data as initialRecipes } from "../data/data"

const reducer = (state, action) => {

    switch(action.type){
        case 'ADD_NEW_RECIPE':
            localStorage.setItem("recipes", JSON.stringify([...state, action.payload]));
        return JSON.parse(localStorage.getItem("recipes"));

        case 'SEARCH':
            const savedData = JSON.parse(localStorage.getItem("recipes"));

            let initialData = savedData ? savedData : initialRecipes;

            const { value, type } = action.payload;

            if(!value) return [...initialData];

            switch(type){
                case 'name':
                    initialData = initialData.filter(({ title }) => title.toLowerCase().includes(value.toLowerCase()));
                    break;
                
                case 'ingredients':
                    initialData = initialData.filter(({ ingredients }) => 
                    ingredients.join('').toLowerCase().includes(value.toLowerCase()));
                    break;

                default: initialData = initialData.filter(({ cuisine }) => cuisine.toLowerCase().includes(value.toLowerCase()));
                break;
            }
        return initialData;

        default: break;
    }
}

export { reducer };