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
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const saved: Recipe[] = JSON.parse(localStorage.getItem("myRecipes") || "[]");
    const found = saved.find((r) => r.id === id);
    setRecipe(found || null);
  }, [id]);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <Container className={classes.recipePageLayout}>
      <Title order={2} className={classes.recipeHeader}>{recipe.title}</Title>
      <Image src={recipe.image} alt={recipe.title} className={classes.recipeImage} my="md" />

      <div className={classes.bodyText}>
        <Text size="lg">Cook Time: {recipe.cookTime} mins</Text>

        <Text size="lg" mt="md" fw={600}>Ingredients:</Text>
        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}><Text size="md">{item}</Text></li>
          ))}
        </ul>

        <Text size="lg" mt="md" fw={600}>Instructions:</Text>
        <ol>
          {recipe.instructions.map((step, index) => (
            <li key={index}><Text size="md">{step}</Text></li>
          ))}
        </ol>
      </div>
    </Container>
  );
}
