import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Text, Image } from '@mantine/core';

interface Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
}

export default function APIRecipeDetail() {
    const {id} = useParams<{id: string}>();
    const [recipe, setRecipe] = useState<Recipe | null>(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await res.json();
            setRecipe(data.meals?.[0]);
        }; fetchRecipe();
    }, [id]);

    if(!recipe) return <Text>Loading Recipe...</Text>

    return (
        <div>
            <Text>{recipe.strMeal}</Text>
            <Text>category: {recipe.strCategory}</Text>
            <Image src={recipe.strMealThumb}/>
            <Text>{recipe.strInstructions}</Text>
        </div>
    )
}