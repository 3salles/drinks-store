import { BiPlusMedical } from "react-icons/bi";

import {
  Container,
  Header,
  HeaderContainer,
  NewDrinkButton,
  Content,
} from "./styles";
import Logo from "../../assets/logo.png";

import { Card } from "../../components/Card";

import { useContext, useState } from "react";
import { BrandSelect } from "../../components/BrandSelect";
import { DrinksContext } from "../../hooks/DrinksContext";

interface HomeProps {
  onOpenModal: () => void;
}

export const Home = ({ onOpenModal }: HomeProps): JSX.Element => {
  const { drinks } = useContext(DrinksContext);
  const [selected, setSelected] = useState("");

  return (
    <>
      <Header>
        <img src={Logo} alt="HITL Drinks" />
      </Header>
      <Container role="main">
        <HeaderContainer>
          <h1>Bebidas</h1>
          <BrandSelect selected={selected} setSelected={setSelected} />
          <NewDrinkButton
            type="button"
            aria-label="Adicionar bebida"
            onClick={onOpenModal}
          >
            <BiPlusMedical />
            <span>Adicionar bebida</span>
          </NewDrinkButton>
        </HeaderContainer>
        <Content>
          {drinks?.map((drink) => (
            <Card key={drink.id} drink={drink} />
          ))}
        </Content>
      </Container>
    </>
  );
};
