import { Text, Image, Button } from "@mantine/core";
import { Link } from "react-router-dom";

export interface APIRecipeCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  instructions: string[];
  isSaved: boolean; // Add isSaved prop
  onToggleSave: (id: string) => void;
}

export default function APIRecipeCard({
  id,
  title,
  image,
  instructions,
  category,
  isSaved,
  onToggleSave,
}: APIRecipeCardProps) {
  return (
    <div>
      <Text size="xl" fw={700}>
        {title}
      </Text>
      <Text>Category: {category}</Text>
      <Image src={image} alt={title} width={300} radius="md" my="md" />
      <ul>
        {instructions.map((step, index) => (
          <li key={index}>
            <Text>{step.trim()}.</Text>
          </li>
        ))}
      </ul>
      <Button mt="md" variant="filled" onClick={() => onToggleSave(id)}>
        {isSaved ? "Saved" : "Save"}
      </Button>
      <Link to={`/recipe/${id}`}>
        <Button mt="md" variant="filled" color={isSaved ? "grape" : "blue"}>
          View Recipe
        </Button>
      </Link>
    </div>
  );
}
