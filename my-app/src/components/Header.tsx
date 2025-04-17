import classes from '../styling/Global.module.css'
import { Container, Text } from "@mantine/core";
import HomeButtons from "./PageButtons";


export default function Header()
{
    return (
        <Container>
            <div>
            <Text className={classes.headings}>-Parker's recipes-</Text>
            </div>

            <HomeButtons />
            
        </Container>
    )
}