import styled from 'styled-components'
import palette from "../../assets/palette"

export const Container = styled.div`
  background-color: ${palette.primary};
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  height: 100%;
  height: calc(100vh - 8rem);
  position: relative;
  
  @media (max-width: 1200px) {
    padding: 2rem;
    height: calc(100vh - 4rem);
  }
  @media (max-width: 768px) {
    padding: 1.5rem;
    height: calc(100vh - 3rem);
  }
`

export const Response = styled.h3`
  font-size: 2rem;
  font-family: Lato-Bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${props => props.isLoading && !props.error ? '1' : '0'};
  color: ${palette.secondary};
`;

export const Error = styled.h3`
  position: absolute;
  top: 1rem;
  left: 1ren;
  font-family: Lato-Bold;
  opacity: ${props => props.error ? '1' : '0'};
`;
