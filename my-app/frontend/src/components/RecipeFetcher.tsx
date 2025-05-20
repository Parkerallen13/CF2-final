import { useState } from "react";
import APIRecipeCard from "./RecipeCard";
import { Button } from "@mantine/core";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
}

export default function RecipeFetcher() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedIds, setSavedIds] = useState<string[]>([]);

  const handleToggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id)
        ? prev.filter((savedId) => savedId !== id)
        : [...prev, id]
    );
  };

  const fetchRecipe = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      if (!res.ok) throw new Error(`error! status: ${res.status}`);
      const data = await res.json();
      const randomMeal = data.meals[0];
      setRecipe(randomMeal);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("something went wrong");
    }

    setLoading(false);
  };

  return (
    <div>
      <Button onClick={fetchRecipe} disabled={loading}>
        {loading ? "Loading..." : "Get Random Recipe"}
      </Button>

      {error && <p>error: {error}</p>}
      {recipe && (
        <APIRecipeCard
          id={recipe.idMeal}
          title={recipe.strMeal}
          image={recipe.strMealThumb}
          category={recipe.strCategory}
          instructions={recipe.strInstructions.split(".").filter(Boolean)}
          isSaved={savedIds.includes(recipe.idMeal)}
          onToggleSave={handleToggleSave}
        />
      )}
    </div>
  );
}
