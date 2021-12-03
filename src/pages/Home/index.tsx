import { BiPlusMedical } from 'react-icons/bi'

import { Container, Header, HeaderContainer, NewDrinkButton, Content } from "./styles";
import Logo from "../../assets/logo.png";

import { CountriesSelect } from '../../components/Select';
import { Card } from '../../components/Card';


export const Home = (): JSX.Element => {
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Content>
      </Container>
    </>
  );
};
