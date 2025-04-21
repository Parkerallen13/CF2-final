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
import classes from '../styling/Global.module.css'

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
    image: (value) => (value ? null : "Please upload an image"),
  },
  });

  const handleSubmit = async (values: typeof form.values) => {
    const current = JSON.parse(localStorage.getItem("myRecipes") || "[]");
  
    // Convert image file to base64 (if an image is uploaded)
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
      id: values.title.toLowerCase().replace(/\s+/g, "-"),
      ...values,
      image: imageBase64,
    };
  
    localStorage.setItem("myRecipes", JSON.stringify([...current, newRecipe]));
    navigate("/my-recipes");
  };

  return (
    <Container className={classes.addRecipeContainer}>
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
            label="Upload files"
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