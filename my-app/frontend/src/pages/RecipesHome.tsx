import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import recipes from "../data/Recipes.json";
import Header from "../components/Header";
import { Title } from "@mantine/core";
import classes from "../styling/Global.module.css";

export default function RecipesHome() {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  // Load saved recipe IDs from localStorage
  useEffect(() => {
    const storedIds: string[] = JSON.parse(
      localStorage.getItem("savedRecipeIds") || "[]"
    );
    setSavedIds(storedIds);
  }, []);

  // Toggle save/unsave for recipe IDs only
  const toggleSave = (id: string) => {
    let updatedIds: string[];

    if (savedIds.includes(id)) {
      updatedIds = savedIds.filter((savedId) => savedId !== id);
    } else {
      updatedIds = [...savedIds, id];
    }

    localStorage.setItem("savedRecipeIds", JSON.stringify(updatedIds));
    setSavedIds(updatedIds);
  };

  return (
    <>
      <Header />
      <Title order={2} className={classes.title}>
        Recipes
      </Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          // gap: ".3rem",
          paddingBottom: "1rem",
        }}
      >
        {recipes.map((recipe) => (
          <div className="card" key={recipe.id} style={{ margin: "1.5rem" }}>
            <RecipeCard
              id={recipe.id}
              title={recipe.title}
              description={recipe.description}
              image={recipe.image}
              onToggleSave={toggleSave}
              isSaved={savedIds.includes(recipe.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
