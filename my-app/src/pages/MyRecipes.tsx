import { Container, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import MyRecipeCard from "../components/MyRecipeCard";
import Header from "../components/Header";

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  isSaved?: boolean; // Optional, since not every recipe might have `isSaved` initially
}

export default function MyRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // Load recipes from localStorage
    const savedRecipes = JSON.parse(localStorage.getItem("myRecipes") || "[]");
    setRecipes(savedRecipes);
  }, []);

  // Handle toggling the save state of a recipe
  const toggleSave = (id: string) => {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === id) {
        return { ...recipe, isSaved: !recipe.isSaved }; // Toggle the isSaved state
      }
      return recipe;
    });

    setRecipes(updatedRecipes);
    localStorage.setItem("myRecipes", JSON.stringify(updatedRecipes)); // Save the updated recipes to localStorage
  };

  // Handle deleting a recipe
  const deleteRecipe = (id: string) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id); // Remove the recipe from the array
    setRecipes(updatedRecipes); // Update the state
    localStorage.setItem("myRecipes", JSON.stringify(updatedRecipes)); // Remove the recipe from localStorage
  };

  return (
    <Container>
      <Header/>
      <Title order={2} my="lg">
        My Recipes
      </Title>
      {recipes.map((recipe) => (
        <MyRecipeCard
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          description={recipe.description}
          image={recipe.image}
          isSaved={recipe.isSaved || false} // Default to false if no isSaved exists
          onToggleSave={toggleSave} // Pass toggleSave function to RecipeCard
          onDelete={deleteRecipe} // Pass deleteRecipe function to RecipeCard
        />
      ))}
    </Container>
  );
}