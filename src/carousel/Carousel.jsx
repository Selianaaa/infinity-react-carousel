import React from 'react'
import styled from 'styled-components'

import { CentralBlocks } from './CentralBlocks'

export const Carousel = () => (
  <ContentWrapper>
    <Title>Infinity React Functional Carousel</Title>

    <CentralBlocks />
  </ContentWrapper>
)

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`

const Title = styled.h3`
  font-size: 20px;
  line-height: 17px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #3f0326;
`
