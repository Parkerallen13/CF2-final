import { Button, SimpleGrid } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import classes from "../styling/Global.module.css";
import { IconHome2 } from "@tabler/icons-react";

export default function HomeButtons() {
  const navigate = useNavigate();

  return (
    <SimpleGrid cols={3}>
   
      <Button onClick={() => navigate("/")} className={classes.button}>
        <IconHome2 size={20} />
      </Button>

      <Button
        onClick={() => navigate("/recipehome")}
        className={classes.button}
      >
        Parker's Recipes
      </Button>
      <Button
        onClick={() => navigate("/recentlyViewed")}
        className={classes.button}
      >
        Recently Viewed
      </Button>
      <Button
          onClick={() => navigate("/favorites")}
          className={classes.button}
        >
          Saved
        </Button>
      {/* <Button
        onClick={() => navigate("/my-recipes")}
        className={classes.button}
      >
        My Recipes
      </Button> */}
     
      {/* <Button onClick={() => navigate("/addrecipe")} className={classes.button}>
        Add Recipe
      </Button> */}
    </SimpleGrid>
  );
}
