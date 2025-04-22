import { MantineProvider } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipesHome from "./pages/RecipesHome"
import AddRecipe from "./pages/AddRecipe";
import MyRecipes from "./pages/MyRecipes";
import { RecipeTheme } from './styling/RecipeTheme'
import RecipeDetail from "./pages/RecipeDetail";
import Favorites from "./pages/Favorites";
import MyRecipeDetail from "./pages/MyRecipeDetail";


import "./App.css";

function App() {
  return (
    <>
      <MantineProvider theme={RecipeTheme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipehome" element={<RecipesHome />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="/my-recipes" element={<MyRecipes />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/my-recipe/:id" element={<MyRecipeDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </MantineProvider>
    </>
  );
}

export default App;
