const reducer = (state, action) => {

    switch(action.type){
        case 'ADD_NEW_RECIPE':
            localStorage.setItem("recipes", JSON.stringify([...state, action.payload]));
        return JSON.parse(localStorage.getItem("recipes"));

        default: break;
    }
}

export { reducer };