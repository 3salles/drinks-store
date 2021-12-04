import styled from '@emotion/styled';


export const Header = styled.header`
  background: var(--pink-500);
  padding: 2rem 1rem;
`;

export const Container = styled.section`
  padding: 2rem;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2rem;
  }
`

export const NewDrinkButton = styled.button`
  height: 4rem;
  padding: 1rem;
  background-color: var(--pink-300);
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 0.5rem;
  color: var(--white);
  font-size: 1.125rem;
`

export const Content= styled.article`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const FilterButton = styled.button`
  height: 2rem;
  padding: 1rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--pink-300);
  color: var(--pink-300);
  font-size: 1.125rem;
`