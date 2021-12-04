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

import { NewDrinkModal } from "../../components/Modal";
import { useContext, useState } from "react";
import { BrandSelect } from "../../components/BrandSelect";
import { DrinksContext } from "../../hooks/DrinksContext";

export const Home = (): JSX.Element => {
  const drinks = useContext(DrinksContext);
  console.log(drinks);

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
          <NewDrinkButton
            type="button"
            aria-label="Adicionar bebida"
            onClick={handleOpenModal}
          >
            <BiPlusMedical />
            <span>Adicionar bebida</span>
          </NewDrinkButton>
        </HeaderContainer>
        <Content>
          {drinks?.map((drink) => (
            <Card key={drink?.id} drink={drink} />
          ))}
        </Content>
        <NewDrinkModal isOpen={modalIsOpen} onCloseModal={handleCloseModal} />
      </Container>
    </>
  );
};
