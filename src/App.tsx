import { Home } from '../src/pages/Home';
import { Global } from '@emotion/react';
import { GlobalStyle } from './styles/global';

export const App = (): JSX.Element => (
  <>
  <Global styles={GlobalStyle} />
    <Home />
  </>
);
