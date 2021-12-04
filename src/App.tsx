import { Home } from "../src/pages/Home";
import { Global } from "@emotion/react";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import {Toaster} from 'react-hot-toast'
import { NewDrinkModal } from "./components/Modal";
import { useState } from "react";
import { DrinksProvider } from "./hooks/useDrinks";

Modal.setAppElement("#root");

export function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }
  return (
    <DrinksProvider>
      <Toaster/>
      <Global styles={GlobalStyle} />
      <Home onOpenModal={handleOpenModal} />
      <NewDrinkModal isOpen={modalIsOpen} onCloseModal={handleCloseModal} />
    </DrinksProvider>
  );
}
