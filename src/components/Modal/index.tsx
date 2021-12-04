import Modal from "react-modal";
import { GrClose } from "react-icons/gr";
import { BrandSelect } from "../BrandSelect";
import { Container, Content, DrinkNameContainer, SaveButton } from "./styles";
import { ChangeEvent, FormEvent, useState } from "react";
import { Brands } from "../../models";
import { useDrinks } from "../../hooks/useDrinks";
import toast from 'react-hot-toast';


interface NewDrinkModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

export function NewDrinkModal({ isOpen, onCloseModal }: NewDrinkModalProps) {
  const { createDrink } = useDrinks();
  const [brand, setBrand] = useState<Brands>("");
  const [name, setName] = useState("");

  async function handleCreateNewDrink(event: FormEvent) {
    try{
      event.preventDefault();

    await createDrink({
      brand,
      name,
    });

    setBrand("");
    setName("");
    onCloseModal();
    toast.success("Nova bebida cadastrada!")
    } catch(error) {
      toast.error("Ocorreu um erro!")
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      contentLabel="Cadastro de Nova Bebida"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <header>
        <button
          type="button"
          onClick={onCloseModal}
          aria-label="Fechar modal"
          className="react-modal-close"
          title="Fechar Modal"
        >
          <GrClose />
        </button>
      </header>
      <Container onSubmit={handleCreateNewDrink}>
        <h2>Nova Bebida</h2>

        <Content>
          <BrandSelect selected={brand} setSelected={setBrand} />
          <DrinkNameContainer>
            <label htmlFor="drink-name">Nome da bebida</label>
            <input
              type="text"
              name="drink-name"
              id="drink-name"
              placeholder="Digite nome da bebida"
              value={name}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setName(event.target.value)
              }
            />
          </DrinkNameContainer>
          <SaveButton type="submit" aria-label="Cadastrar nova bebida">
            Cadastrar
          </SaveButton>
        </Content>
      </Container>
    </Modal>
  );
}
