import { Home } from '../src/pages/Home';
import { Global } from '@emotion/react';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';

Modal.setAppElement("#root");

export const App = (): JSX.Element => (
  <>
  <Global styles={GlobalStyle} />
    <Home />
  </>
);
