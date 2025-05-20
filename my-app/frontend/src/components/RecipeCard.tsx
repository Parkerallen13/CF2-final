import { Button, Card, Container, Image, Text } from "@mantine/core";
import classes from "../styling/Global.module.css";
import { Link } from "react-router-dom";

type RecipeCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  isSaved: boolean; // Add isSaved prop
  onToggleSave: (id: string) => void;
};

export default function RecipeCard({
  id,
  title,
  // description,
  image,
  isSaved,
  onToggleSave,
}: RecipeCardProps) {
  return (
    <Container className={classes.cardContainer}>
      <Card m="xl" withBorder className={classes.card}>
        <Card.Section>
          <Image
            className={classes.image}
            src={image}
            fallbackSrc="https://placehold.co/600x400?text=No+Image"
            alt={title}
          />
        </Card.Section>

        <Text fw={800} size="lg" mt="md" className={classes.recipeHeader}>
          {title}
        </Text>

        {/* <Text mt="xs" c="dimmed" size="sm">
          {description}
        </Text> */}
        <Button
          m="md"
          variant="filled"
          onClick={() => onToggleSave(id)}
        >
          {isSaved ? "Saved" : "Save"}
        </Button>
        <Link to={`/recipe/${id}`}>
          <Button
            m="md"
            variant="filled"
        
            color={isSaved ? "grape" : "blue"}
            onClick={() => onToggleSave(id)}
          >
            View Recipe
          </Button>
        </Link>
      </Card>
    </Container>
  );
}
