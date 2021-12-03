import Modal from "react-modal";
import { GrClose } from "react-icons/gr";
import { BrandSelect } from "../BrandSelect";
import { Container, Content, DrinkNameContainer, SaveButton } from './styles'

interface NewDrinkModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

export function NewDrinkModal({ isOpen, onCloseModal }: NewDrinkModalProps) {
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
      <Container>
        <h2>Nova Bebida</h2>

        <Content>
        <BrandSelect />
          <DrinkNameContainer>
            <label htmlFor="drink-name">Nome da bebida</label>
            <input
              type="text"
              name="drink-name"
              id="drink-name"
              placeholder="Digite nome da bebida"
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
