import {createGlobalStyle} from 'styled-components';

import LatoBlack from './Lato-Black.ttf';
import LatoBold from './Lato-Bold.ttf';
import LatoRegular from './Lato-Regular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Lato-Black';
    src: local('Lato-Black'), local('LatoBlack'),
    url(${LatoBlack}) format('ttf'),
    font-weight: 900;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Lato-Bold';
    src: local('Lato-Bold'), local('LatoBold'),
    url(${LatoBold}) format('ttf'),
    font-weight: 700;
    font-style: normal;
  }
  
   @font-face {
    font-family: 'Lato-Regular';
    src: local('Lato-Regular'), local('LatoRegular'),
    url(${LatoRegular}) format('ttf'),
    font-weight: 400;
    font-style: normal;
  }
`
