import Beer from "../../assets/beer.jpeg";

import { Container, ImageContainer, Infos } from './styles'

export function Card() {
  return (
    <Container>
      <ImageContainer>
      <img src={Beer} alt="Bebida brasileira" />
      </ImageContainer>
      <Infos>
        <h4> 🇧🇷 Brasil</h4>
        <p>Cerva gelada</p>
      </Infos>
    </Container>
  );
}
