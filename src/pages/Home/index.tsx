import { Container, Header } from './styles';
import Logo from "../../assets/logo.png"

export const Home = (): JSX.Element => {
  return (
    <>
      <Header>
        <img src={Logo} alt="HITL Drinks" />
      </Header>
      <section>
        <h1>Bebidas</h1>
      </section>
    </>
  );
};
