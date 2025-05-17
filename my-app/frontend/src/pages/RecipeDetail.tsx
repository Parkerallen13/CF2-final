import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import recipes from "../data/Recipes.json";
import { Container, Title, Text, Image, Button } from "@mantine/core";
import classes from "../styling/Global.module.css";

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: number;
  ingredients: string;
  instructions: string;
}

export default function RecipeDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  // Find the recipe based on the ID from the URL
  const recipe = recipes.find((r) => r.id === id);

  // This effect will only run when the recipe is found
  useEffect(() => {
    if (recipe) {
      const stored = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");

      // Remove the recipe if it already exists in the list (to avoid duplicates)
      const filtered = stored.filter((r: Recipe) => r.id !== recipe.id);

      // Add the recipe to the beginning of the list
      const updated = [recipe, ...filtered];

      // Limit the list to the last 5 viewed recipes
      const limited = updated.slice(0, 5);

      // Save the updated list to localStorage
      localStorage.setItem("recentlyViewed", JSON.stringify(limited));
    }
  }, [recipe]);

  if (!recipe) {
    return <Text>Recipe not found</Text>;
  }

  return (
    <Container className={classes.recipePageLayout}>
          <div className={classes.titleAndback}>
        <Button
          variant="subtle"
          onClick={() => navigate(-1)} // -1 to go back to the previous page
          className={classes.topbutton}

        >
          Back
        </Button>
        <Text className={classes.headings}>-Parker's Recipes-</Text>
       
      </div>
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