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

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myRecipes") || "[]");
setMyRecipes(saved);
  }, []);

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
          />
        ))}
      </div>
    </Container>
  );
}
