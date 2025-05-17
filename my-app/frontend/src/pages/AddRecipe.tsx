import { useForm } from "@mantine/form";
import {
  Textarea,
  Button,
  Container,
  Title,
  Box,
  FileInput,
  TextInput,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import classes from "../styling/Global.module.css";

export default function AddRecipe() {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      title: "",
      image: null as File | null,
      description: "",
      cookTime: 0,
      ingredients: "",
      instructions: "",
    },
    validate: {
      title: (value) => (value ? null : "Please provide a title"),
      ingredients: (value) => (value ? null : "Please list the ingredients"),
      instructions: (value) => (value ? null : "Please provide instructions"),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    if (!form.isValid()) return;
  
    const current = JSON.parse(localStorage.getItem("myRecipes") || "[]");
  
    let imageBase64 = "";
    if (values.image) {
      const file = values.image as File;
      imageBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
  
    const newRecipe = {
      id: values.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, ""),
      title: values.title,
      description: values.description,
      image: imageBase64 || "",
      ingredients: values.ingredients.split(",").map((i) => i.trim()),
      instructions: values.instructions.split(",").map((i) => i.trim()),
      cookTime: Number(values.cookTime),
    };
  
    console.log("New Recipe ID:", newRecipe.id);
    console.log("Full New Recipe:", newRecipe);
  
    localStorage.setItem("myRecipes", JSON.stringify([...current, newRecipe]));
  
    navigate("/my-recipes");
  };

  return (
    <Container className={classes.addRecipeContainer}>
      <Button
        style={{ color: "blue", backgroundColor: "#BAD79B" }}
        onClick={() => navigate("/my-recipes")}
      >
        View My Recipes
      </Button>
      <Title order={2} my="lg">
        Add a New Recipe
      </Title>
      <Box maw={900} mx="auto">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Textarea
            label="Title"
            placeholder="i.e Lemon Chicken (required)"
            {...form.getInputProps("title")}
            required
          />
          <FileInput
            accept="image/png,image/jpeg"
            label="Upload Image (optional)"
            placeholder="^"
            {...form.getInputProps("image")}
          />
          <Textarea
            label="Description"
            placeholder="(optional)"
            mt="sm"
            {...form.getInputProps("description")}
          />
          <TextInput
            label="Cook Time"
            placeholder=""
            {...form.getInputProps("cookTime")}
          />
          <Textarea
            label="Ingredients"
            placeholder="i.e. arugula, lemon, cumin.. (required)"
            mt="sm"
            {...form.getInputProps("ingredients")}
            required
          />
          <Textarea
            label="Instructions"
            placeholder="i.e. pre-heat oven to 350, chop onions.. (required)"
            mt="sm"
            {...form.getInputProps("instructions")}
            required
          />
          <Button type="submit" mt="md" fullWidth>
            Add Recipe
          </Button>
        </form>
      </Box>
    </Container>
  );
}
