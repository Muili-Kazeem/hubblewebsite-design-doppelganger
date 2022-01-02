import { ThemeProvider } from "styled-components";
import React from "react";
import Header from "./Header";
import { Container } from "./styles/Container.styled";
import GlobalStyles from "./styles/Global";
import content from "./content";
import Card from "./Card";
import Footer from "./Footer";

const theme = {
    colors: {
        header: '#ebfbff',
        body: "#fff",
        footer: "#003333"
    },
    mobile: "768px",
}

const CardComponents =  content.map((item, index) => {
    return (
        <Card item={item} key={index} />
    )
})

function App() {
    return(
        <ThemeProvider theme = {theme}>
            <React.Fragment>
                <GlobalStyles/>
                <Header />
                <Container>
                    { CardComponents }
                </Container>
                <Footer />
            </React.Fragment>
        </ThemeProvider>
    )
}

export default App
