import { useEffect, useState } from "react";
import { Container, Title } from "@mantine/core";
import RecipeCard from "../components/RecipeCard";
import Header from "../components/Header";

export default function MyRecipes() {
  type Recipe = {
    id: string;
    title: string;
    description: string;
    image: string;
    cookTime: number;
    ingredients: string;
    instructions: string;
  };

  const [myRecipes, setMyRecipes] = useState<Recipe[]>([]);
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myRecipes") || "[]");
    setMyRecipes(saved);
    setSavedIds(saved.map((recipe: Recipe) => recipe.id));
  }, []);

  const toggleSave = (id: string) => {
    const updatedSavedIds = savedIds.includes(id)
      ? savedIds.filter((savedId) => savedId !== id)
      : [...savedIds, id];

    setSavedIds(updatedSavedIds);

    // Update the saved recipes in local storage
    const updatedRecipes = myRecipes.filter((recipe) =>
      updatedSavedIds.includes(recipe.id)
    );
    localStorage.setItem("myRecipes", JSON.stringify(updatedRecipes));
  };

  return (
    <Container>
      <Header />

      <Title order={2} mb="lg">
        My Recipes
      </Title>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "1.5rem",
          paddingBottom: "1rem",
        }}
      >
        {myRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
            isSaved={savedIds.includes(recipe.id)} 
            onToggleSave={toggleSave} 
          />
        ))}
      </div>
    </Container>
  );
}
