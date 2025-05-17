import { useEffect, useState } from "react";
import { Title } from "@mantine/core";
import RecipeCard from "../components/MyRecipeCard";
import classes from "../styling/Global.module.css";
import Header from "../components/Header";

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  isSaved?: boolean;
}

export default function RecentlyViewed() {
  const [recentRecipes, setRecentRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
    setRecentRecipes(stored);
  }, []);

  return (
    <>
      <Header />

      <Title order={2} className={classes.title}>
        Recently Viewed Recipes
      </Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          paddingBottom: "1rem",
        }}
      >
        {recentRecipes.map((recipe) => (
          <div key={recipe.id} style={{ margin: "1.5rem" }}>
            <RecipeCard
              id={recipe.id}
              title={recipe.title}
              description={recipe.description}
              image={recipe.image}
              isSaved={recipe.isSaved || false}
              onToggleSave={() => {}}
            />
          </div>
        ))}
      </div>
    </>
  );
}
