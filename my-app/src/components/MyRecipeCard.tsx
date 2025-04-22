import { Button, Card, Container, Image, Text } from "@mantine/core";
import classes from "../styling/Global.module.css";
import { Link } from "react-router-dom";

type RecipeCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onDelete: (id: string) => void; // Function to handle deletion
};

export default function RecipeCard({
  id,
  title,
  description,
  image,
  isSaved,
  onToggleSave,
  onDelete, // Destructure the onDelete function
}: RecipeCardProps) {
  return (
    <Container className={classes.cardContainer}>
      <Card m="xl" withBorder className={classes.card}>
        <Card.Section>
          <Link to={`/recipe/${id}`}>
            <Image
              className={classes.image}
              src={image}
              fallbackSrc="https://placehold.co/600x400?text=No+Image"
              alt={title}
            />
          </Link>
        </Card.Section>

        <Text fw={800} size="lg" mt="md" className={classes.recipeHeader}>
          {title}
        </Text>

        <Text mt="xs" c="dimmed" size="sm">
          {description}
        </Text>
        <Button
          mr="md"
          variant="filled"
          color={isSaved ? "grape" : "blue"}
          onClick={() => onToggleSave(id)}
        >
          {isSaved ? "Saved" : "Save"}
        </Button>

        <Button
          // mt="md"
          variant="outline"
          color="red"
          onClick={() => onDelete(id)} // Call onDelete when clicked
        >
          Delete
        </Button>
      </Card>
    </Container>
  );
}