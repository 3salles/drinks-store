import { BiPlusMedical } from 'react-icons/bi'

import { Container, Header, HeaderContainer, NewDrinkButton, Content } from "./styles";
import Logo from "../../assets/logo.png";

import { CountriesSelect } from '../../components/Select';
import { Card } from '../../components/Card';

import drinks from '../../utils/drinks.json'
import { Drink } from '../../models';


export const Home = (): JSX.Element => {
  const data = drinks as Drink[];

  return (
    <>
      <Header>
        <img src={Logo} alt="HITL Drinks" />
      </Header>
      <Container role="main">
        <HeaderContainer>
          <h1>Bebidas</h1>
          <CountriesSelect />
          <NewDrinkButton type="button" aria-label="Adicionar bebida">
            <BiPlusMedical />
            <span>Adicionar bebida</span>
          </NewDrinkButton>
        </HeaderContainer>
        <Content>
          {
            data?.map((drink, index) => 
              <Card key={index} drink={drink} />
              )
          }
        </Content>
      </Container>
    </>
  );
};
