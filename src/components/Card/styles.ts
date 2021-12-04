import styled from "@emotion/styled";

export const Container = styled.div`
  margin-bottom: 1rem;
  width: 15.625rem;
  border-radius: 0.5rem;
  background: var(--white);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 12.5rem;
  
  img {
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Infos = styled.div`
  padding: 1rem 2rem;

  h4 {
    font-size: 1.125rem;
    margin-bottom: 1rem;
    white-space: nowrap;
  }

  p {
    white-space: nowrap;
    text-align: center;
    font-size: 1.25rem;
  }
`