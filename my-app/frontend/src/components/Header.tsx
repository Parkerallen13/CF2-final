import classes from "../styling/Global.module.css";
import { Button, Container, Text } from "@mantine/core";
import HomeButtons from "./PageButtons";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className={classes.page}>
    <Container className={classes.header}>
        <Button
          variant="subtle"
          onClick={() => navigate(-1)} // -1 to go back to the previous page
          className={classes.topbutton}
        >
          Back
        </Button>
        <Text className={classes.headings}>-Parker's Recipes-</Text>
      <HomeButtons />

    </Container>
    </div>
  );
}
