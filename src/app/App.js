import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyles'
import { Carousel } from '../carousel/Carousel';


function App() {

  return (
    <Container>
      <GlobalStyle/>
      <Carousel />
    </Container>
  )
}

export default App;


const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fbfaff;
`
