import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import recipes from "../data/Recipes.json";
import Header from "../components/Header";
import { Title } from "@mantine/core";

export default function RecipesHome() {
  type Recipe = {
    id: string;
    title: string;
    description: string;
    image: string;
    cookTime: number;
    ingredients: string[];
    instructions: string[];
  };

  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const stored: Recipe[] = JSON.parse(
      localStorage.getItem("myRecipes") || "[]"
    );
    setSavedIds(stored.map((r) => r.id));
  }, []);

  const toggleSave = (id: string) => {
    const recipe = recipes.find((r) => r.id === id);
    if (!recipe) return;

    const currentSaved: Recipe[] = JSON.parse(
      localStorage.getItem("myRecipes") || "[]"
    );

    let updated: Recipe[];

    if (savedIds.includes(id)) {
      updated = currentSaved.filter((r) => r.id !== id);
    } else {
      updated = [...currentSaved, recipe];
    }

    localStorage.setItem("myRecipes", JSON.stringify(updated));
    setSavedIds(updated.map((r) => r.id));
  };
  return (
    <>
      <Header />
      <Title order={2} mb="lg">
        Recipes
      </Title>
      <div  style={{
          display: "flex",
          overflowX: "auto",
          gap: "1.5rem",
          paddingBottom: "1rem"
        }}>
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
            onToggleSave={toggleSave}
            isSaved={savedIds.includes(recipe.id)}
          />
        ))}
      </div>
    </>
  );
}
