import RecipeCard from "../components/RecipeCard";
import recipes from "../data/Recipes.json";
import Header from "../components/Header";

export default function RecipesHome() {
  return (
    <>
    <Header/>

      <div
        style={{
          display: "grid",
          gap: 150,
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          padding: 20,
        }}
      >
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
          />
        ))}
      </div>
    </>
  );
}
