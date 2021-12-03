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

import drinks from "../../utils/drinks.json";
import { Drink } from "../../models";
import { NewDrinkModal } from "../../components/Modal";
import { useState } from "react";
import { BrandSelect } from "../../components/BrandSelect";

export const Home = (): JSX.Element => {
  const data = drinks as Drink[];

  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Header>
        <img src={Logo} alt="HITL Drinks" />
      </Header>
      <Container role="main">
        <HeaderContainer>
          <h1>Bebidas</h1>
          <BrandSelect />
          <NewDrinkButton type="button" aria-label="Adicionar bebida" onClick={handleOpenModal}>
            <BiPlusMedical />
            <span>Adicionar bebida</span>
          </NewDrinkButton>
        </HeaderContainer>
        <Content>
          {data?.map((drink, index) => (
            <Card key={index} drink={drink} />
          ))}
        </Content>
        <NewDrinkModal isOpen={modalIsOpen} onCloseModal={handleCloseModal} />
      </Container>
    </>
  );
};
