import { Text, MantineProvider } from "@mantine/core";
import { RecipeTheme } from "../styling/RecipeTheme";
import classes from '../styling/Global.module.css'


import HomeButtons from "../components/PageButtons";

  

export default function HomePage() {
  return (
    <>
      <MantineProvider theme={RecipeTheme}>
      <Text m="lg" fz="xxl" className={classes.headings}>Welcome to Parker's Recipes!</Text>
      <HomeButtons />
      </MantineProvider>
    </>
  );
}
