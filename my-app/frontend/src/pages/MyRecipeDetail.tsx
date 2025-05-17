import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Title, Text, Image } from "@mantine/core";
import classes from '../styling/Global.module.css';

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: number;
  ingredients: string[];
  instructions: string[];
}

export default function MyRecipeDetail() {
  const { id } = useParams();  // Get the id from the URL
  const [recipe, setRecipe] = useState<Recipe | null>(null);  // State to store the recipe

  useEffect(() => {
    // Get all saved recipes from localStorage
    const saved: Recipe[] = JSON.parse(localStorage.getItem("myRecipes") || "[]");

    // Find the recipe with the matching id
    const found = saved.find((r) => r.id === id);

    if (found) {
      // If found, set the recipe in state
      setRecipe(found);
    } else {
      // If not found, set recipe to null
      setRecipe(null);
    }
  }, [id]);  // Effect will run when the id changes

  if (!recipe) {
    return <p>Recipe not found or still loading.</p>;  // Show message if no recipe found
  }

  return (
    <Container className={classes.recipePageLayout}>
    <Title order={2} className={classes.recipeHeader}>{recipe.title}</Title>
    <Image src={recipe.image} alt={recipe.title} className={classes.recipeImage} my="md" />
    <div className={classes.bodyText}>
    <Text size="lg">Cook Time: {recipe.cookTime} mins</Text>
    <Text size="lg">Ingredients: {recipe.ingredients}</Text>
    <Text size="lg">Instructions: {recipe.instructions}</Text>
    </div>
  </Container>
  );
}