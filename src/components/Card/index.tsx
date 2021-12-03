import Beer from "../../assets/beer.jpeg";
import { Brands, Drink } from "../../models";

import { Container, ImageContainer, Infos } from './styles'

interface CardProps {
  drink: Drink;
}

function brandName (brand: Brands) {
  switch(brand){
    case 'BR' :
      return '🇧🇷 Brasil';
    case 'FR':
      return '🇫🇷 França';
    case 'JP':
      return '🇯🇵 Japão';
    case 'VE':
      return '🇻🇪 Venezuela';
  }
}

function imageBrand (brand: Brands) {
  switch(brand){
    case 'BR' :
      return 'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';
    case 'FR':
      return 'https://images.unsplash.com/photo-1557682204-e53b55fd750c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80';
    case 'JP':
      return 'https://images.unsplash.com/photo-1589961546603-d4281f3cfdfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
    case 'VE':
      return 'https://images.unsplash.com/photo-1506802913710-40e2e66339c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
  }
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
