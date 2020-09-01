import styled from 'styled-components'
import palette from "../../assets/palette"

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;

  @media (max-width: 992px) {
    justify-content: space-between;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`

export const Item = styled.a`
  background-color: ${palette.secondary};
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  border: 0;
  cursor: pointer;
  transition: all ease-in 0.2s;
  
  &:hover {
    background-color: transparent;
  }

  &:first-child: {
    margin: 0;
  }

  @media (max-width: 992px) {
    margin: 0;
  }

  @media (max-width: 768px) {
    margin-right: 0.8rem;
    margin-bottom: 0.8rem;
  }
`

export const Chip = styled.p`
  font-family: 'Lato-Regular';
  color: ${palette.white};
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
