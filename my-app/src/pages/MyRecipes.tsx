import { Title } from "@mantine/core";
import { useEffect, useState } from "react";
import MyRecipeCard from "../components/MyRecipeCard";
import Header from "../components/Header";
import classes from "../styling/Global.module.css"; 

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  isSaved?: boolean;
}

export default function MyRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("myRecipes") || "[]");
    setRecipes(savedRecipes);
  }, []);

  const toggleSave = (id: string) => {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, isSaved: !recipe.isSaved } : recipe
    );
    setRecipes(updatedRecipes);
    localStorage.setItem("myRecipes", JSON.stringify(updatedRecipes));
  };

  const deleteRecipe = (id: string) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    localStorage.setItem("myRecipes", JSON.stringify(updatedRecipes));
  };

  return (
    <>
      <Header />
      <Title order={2} className={classes.title}>
        My Recipes
      </Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          paddingBottom: "1rem",
        }}
      >
        {recipes.map((recipe) => (
          <div className="card" key={recipe.id} style={{ margin: "1.5rem" }}>
            <MyRecipeCard
              id={recipe.id}
              title={recipe.title}
              description={recipe.description}
              image={recipe.image}
              isSaved={recipe.isSaved || false}
              onToggleSave={toggleSave}
              onDelete={deleteRecipe}
            />
          </div>
        ))}
      </div>
    </>
  );
}