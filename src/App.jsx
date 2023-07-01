import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./screens/Home";
import { SingleRecipeDetail } from "./components/SingleRecipeDetail";

function App() {
  return (
    <>
      <h1>Welcome to recipes-collection</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:recipeId" element={<SingleRecipeDetail />} />
      </Routes>
    </>
  );
}

export default App;
