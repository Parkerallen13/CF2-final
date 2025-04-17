import { Card, Container, Image, Text } from "@mantine/core";
import classes from "../styling/Global.module.css";
import { Link } from "react-router-dom";

type RecipeCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export default function RecipeCard({
  id,
  title,
  description,
  image,
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

        <Text mt="xs" c="dimmed" size="sm" >
          {description}
        </Text>
      </Card>
    </Container>
  );
}
