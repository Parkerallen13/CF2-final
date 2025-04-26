import { useParams } from "react-router-dom";
import recipes from "../data/Recipes.json";
import { Container, Title, Text, Image } from "@mantine/core";
import classes from '../styling/Global.module.css'

export default function RecipeDetail() {

  // reads the url of the page and finds the "id" that comes after "recipe" and stores it in useParams()

  const { id } = useParams<{ id: string }>();

  // goes through all possible recipes and when it finds the recipe with the id that is the same as the id in the URL, it is stored in "recipe"
  // "recipe" holds all elements within the last {} in the Json. (id, Title, InputDescription, etc)

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
      <Text size="lg">Instructions: {recipe.instructions}</Text>
      </div>
    </Container>
  );
}