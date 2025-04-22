import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Title, Text, Image } from "@mantine/core";
import classes from '../styling/Global.module.css';

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime?: number;
  ingredients?: string;
  instructions?: string;
}

export default function MyRecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("myRecipes") || "[]");
    const foundRecipe = storedRecipes.find((r: Recipe) => r.id === id);
    setRecipe(foundRecipe || null);
  }, [id]);

  if (!recipe) {
    return (
      <Container>
        <Title>Recipe not found</Title>
      </Container>
    );
  }

  return (
    <Container className={classes.recipeDetailContainer}>
      <Title order={1} mb="md">{recipe.title}</Title>
      {recipe.image && (
        <Image src={recipe.image} alt={recipe.title} radius="md" mb="lg" />
      )}
      {recipe.description && (
        <Text mb="sm" size="md" c="dimmed">{recipe.description}</Text>
      )}
      {recipe.cookTime !== undefined && (
        <Text><strong>Cook Time:</strong> {recipe.cookTime} minutes</Text>
      )}
      <Text mt="md" fw={600}>Ingredients</Text>
      <Text>{recipe.ingredients}</Text>
      <Text mt="md" fw={600}>Instructions</Text>
      <Text>{recipe.instructions}</Text>
    </Container>
  );
}