import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyles'
import CarouselCentralBlock from '../carousel/CarouselCentralBlock';


function App() {
  
  return (
    <Container>
      <GlobalStyle/>
      <CarouselCentralBlock />
    </Container>
  )
}

export default App;


const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: #F5F5F5;
`
