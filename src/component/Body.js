import Form from './Form'
import { Container, FormContainer, Title, TitleWrapper } from "./Elements";

export default function Body() {

    return (
        <>
            <Container>
                <TitleWrapper>
                    <Title>Quick Quote</Title>
                </TitleWrapper>

                <FormContainer><Form /></FormContainer> 

            </Container>
        </>
    )
}