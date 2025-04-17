import { createTheme } from "@mantine/core";

export const RecipeTheme = createTheme({
  fontFamily: "Neue Has Grotesk",
  primaryColor: "cyan",
  fontSizes: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    xxl: "2.5rem",
  },
  colors: {
    deepBlue: [
      "#eef3ff",
      "#dce4f5",
      "#b9c7e2",
      "#94a8d0",
      "#748dc1",
      "#5f7cb8",
      "#5474b4",
      "#44639f",
      "#39588f",
      "#2d4b81",
    ],
  },
  lineHeights: {
    xs: "1.2",
    sm: "1.3",
    md: "1.4",
    lg: "1.5",
    xl: "1.6",
  },
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
});
