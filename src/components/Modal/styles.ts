import styled from "@emotion/styled";

export const Container = styled.form`
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`

export const DrinkNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  input {
    width: 18.75rem;
    padding: 0.5rem;
    border: 1px solid rgba(77, 77, 77, 0.3);
    border-radius: 0.25rem;
  }

  label {
    font-size: 1rem;
  }
`


export const SaveButton = styled.button`
  height: 4rem;
  padding: 1rem;
  background-color: var(--pink-300);
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 0.5rem;
  color: var(--white);
  font-size: 1.125rem;
  text-transform: uppercase;
  font-weight: bold;
`