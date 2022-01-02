import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

function Header() {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src="./images/logo.svg" alt="" />
                    <Button>Try it free</Button>   
                </Nav>

                <Flex>
                    <div>
                        <h1> Build The Community Your Fans Will Love</h1>
                        <p>
                            Huddles re-imagines the way we buils communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine conversations.
                        </p>
                        <Button bg="#ff0099" color="#fff"> Get Started for Free </Button>
                    </div>
                    <Image src="./images/illustration-mockups.svg" alt=""/>
                </Flex>
            </Container>
        </StyledHeader>
    )
}

export default Header