import { useParams } from "react-router-dom";
import recipes from "../data/Recipes.json";
import { Container, Title, Text, Image } from "@mantine/core";
import classes from '../styling/Global.module.css'

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return <Text>Recipe not found</Text>;
  }

  return (
    <Container className={classes.recipePageLayout}>
      <Title order={2} className={classes.recipeHeader}>{recipe.title}</Title>
      <Image src={recipe.image} alt={recipe.title} className={classes.recipeImage} my="md" />
      <div className={classes.bodyText}>
      <Text size="lg">Cook Time: {recipe.cookTime} mins</Text>
      <Text size="lg">Ingredients: {recipe.ingredients}</Text>
      <Text size="lg">Instructions:{recipe.instructions}</Text>
      </div>
    </Container>
  );
}