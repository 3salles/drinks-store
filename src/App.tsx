import { Home } from '../src/pages/Home';
import { Global } from '@emotion/react';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { DrinksProvider } from './hooks/DrinksContext';

Modal.setAppElement("#root");

export const App = (): JSX.Element => (
  <DrinksProvider>
  <Global styles={GlobalStyle} />
    <Home />
  </DrinksProvider>
);
