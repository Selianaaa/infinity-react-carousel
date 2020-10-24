import React from 'react'
import styled from 'styled-components'

import arrow from '../assets/images/arrow.png'

export const ArrowButton = ({ clickHandler, type }) => (
  <ButtonWrapper onClick={clickHandler}>
    <CarouselArrowImg src={arrow} type={type} alt="arrow" />
  </ButtonWrapper>
)

const CarouselArrowImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  transform: ${({ type }) => (type === 'right' ? 'rotateZ(180deg)' : '')};
`

const ButtonWrapper = styled.div`
  position: relative;
  cursor: pointer;
  align-self: center;
  justify-self: center;
`
