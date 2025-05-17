import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import recipes from "../data/Recipes.json";
import Header from "../components/Header";
import { Title } from "@mantine/core";
import classes from "../styling/Global.module.css";

export default function Favorites() {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState<typeof recipes>([]);

  useEffect(() => {
    const storedIds: string[] = JSON.parse(
      localStorage.getItem("savedRecipeIds") || "[]"
    );
    setSavedIds(storedIds);
    const favorites = recipes.filter((recipe) => storedIds.includes(recipe.id));
    setFavoriteRecipes(favorites); 
  }, []);

  const handleToggleSave = (id: string) => {
    const updatedSavedIds = savedIds.includes(id)
      ? savedIds.filter((savedId) => savedId !== id) 
      : [...savedIds, id]; 

    setSavedIds(updatedSavedIds);
    localStorage.setItem("savedRecipeIds", JSON.stringify(updatedSavedIds));

    const updatedFavorites = recipes.filter((recipe) =>
      updatedSavedIds.includes(recipe.id)
    );
    setFavoriteRecipes(updatedFavorites);
  };

  return (
    <>
      <Header />
      <Title order={2} mb="lg" className={classes.title}>
        Saved Recipes
      </Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 3 equal-width columns
          gap: "1.5rem", // space between cards
          paddingBottom: "1rem",
        }}
      >
        {favoriteRecipes.length === 0 ? (
          <p>No saved recipes found.</p>
        ) : (
          favoriteRecipes.map((recipe) => (
            <div className="card" key={recipe.id} style={{ margin: "1.5rem" }}>
              <RecipeCard
                id={recipe.id}
                title={recipe.title}
                description={recipe.description}
                image={recipe.image}
                onToggleSave={handleToggleSave} // Pass the handleToggleSave function here
                isSaved={true} // Recipes here are always considered saved
              />
            </div>
          ))
        )}
      </div>
    </>
  );
}
