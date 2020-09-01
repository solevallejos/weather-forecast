import styled from 'styled-components'
import palette from "../../assets/palette"

export const Container = styled.div`
	display: flex;
  flex-direction: row;
  justify-content: space-around;
  opacity: ${props => props.loading ? '0' : '1'};
`;

export const CityContent = styled.div`
  width: 100%
`;

export const CityInfo = styled.div`
	display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all ease-in 0.2s;
  
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  
  @media (max-width: 768px) {
    text-align: left;
    flex-basis: 35%;
  }
`;

export const Date = styled.h3`
  font-family: 'Lato-Regular';
  font-size: 1rem;
  color: ${palette.white};
  margin-bottom: 1rem;
  text-align: center;
  margin-top: 0.5rem;
  
  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
`;

export const DayInfo = styled.div`
	display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;

  &:last-of-type {
    margin-right: 0
  }
  
  @media (max-width: 1200px) {
    margin-bottom: 2rem
  }

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const CityName = styled.h1`
  font-size: 4rem;
	margin-bottom: 2rem;
	font-family: 'Lato-Black';
	color: ${palette.secondary};

  @media (max-width: 1200px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const Weekday = styled.h2`
  font-size: 1.8rem;
	font-family: 'Lato-Bold';
	color: ${palette.secondary};
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Temperatures = styled.h3`
  font-size: 1rem;
	font-family: 'Lato-Regular';
	color: ${palette.white};
	margin-bottom: 0.4rem;
	
	&:last-of-type{
	  margin-bottom: 0;
	}
`;

export const TemperatureContainer = styled.div`
  text-align: center;
  
  @media (max-width: 768px) {
    text-align: right;
    flex-basis: 30%;
  }
`;

export const WeatherImg = styled.img`
  width: 6.875rem;
  height: 6.875rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-basis: 30%;
    width: 4rem;
    height: 4rem;
    margin-bottom: 0;
  }
`;


