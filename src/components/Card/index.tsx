import { Drink } from "../../models";
import { brandName, imageBrand } from "../../utils/helpers";

import { Container, ImageContainer, Infos } from './styles'

interface CardProps {
  drink: Drink;
}


export function Card({drink}: CardProps) {
  return (
    <Container>
      <ImageContainer>
      <img src={imageBrand(drink?.brand)} alt={`Bebida da marca ${drink?.brand}`} />
      </ImageContainer>
      <Infos>
        <h4>{brandName(drink?.brand)}</h4>
        <p>{drink.name}</p>
      </Infos>
    </Container>
  );
}
