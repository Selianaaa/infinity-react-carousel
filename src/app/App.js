import React from 'react'
import styled from 'styled-components'

import GlobalStyle from './GlobalStyles'
import { Carousel } from '../carousel/Carousel'

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Carousel />
    </Container>
  )
}

export default App

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fbfaff;
`
