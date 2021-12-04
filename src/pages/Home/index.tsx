import { BiPlusMedical } from "react-icons/bi";

import {
  Container,
  Header,
  HeaderContainer,
  NewDrinkButton,
  Content,
  FilterButton,
} from "./styles";
import Logo from "../../assets/logo.png";

import { Card } from "../../components/Card";

import { useState } from "react";
import { BrandSelect } from "../../components/BrandSelect";
import { useDrinks } from "../../hooks/useDrinks";

interface HomeProps {
  onOpenModal: () => void;
}

export const Home = ({ onOpenModal }: HomeProps): JSX.Element => {
  const { drinks } = useDrinks();
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
          {selected && <FilterButton
            type="button"
            aria-label="Limpar filtro"
            onClick={() => setSelected("")}
          >
            Limpar filtro
          </FilterButton>}
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
          {selected === ""
            ? drinks?.map((drink) => <Card key={drink.id} drink={drink} />)
            : drinks
                ?.filter((drinksFilter) => drinksFilter.brand === selected)
                .map((drink) => <Card key={drink.id} drink={drink} />)}
        </Content>
      </Container>
    </>
  );
};
