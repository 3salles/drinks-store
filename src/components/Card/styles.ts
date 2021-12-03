import styled from "@emotion/styled";

export const Container = styled.div`
  width: 15.625rem;
  border-radius: 0.5rem;
  background: var(--white);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const ImageContainer = styled.div`
  width: 100%;
  
  img {
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Infos = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-size: large;
  }
`