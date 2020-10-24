import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import { CarouselItems } from './CarouselItems'
import { ArrowButton } from '../components'
import { CarouselContext } from '../context'

export const CentralBlocks = () => {
  const {
    items,
    oneTimeTranslation,
    autoPlay,
    setAutoPlay,
    currentTranslation,
    setCurrentTranslation,
  } = useContext(CarouselContext)

  const carouselList =
    items.length === 3
      ? items.slice(items.length - 1).concat(...items, items.slice(0, 2))
      : items
  const itemsAmount = carouselList.length

  const [firstIndex, setFirstIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(itemsAmount - 1)
  const [translatingItem, setTranslatingItem] = useState(0)

  useEffect(() => {
    setInitialTranslation()
  }, [])

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        rightArrowClick()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [currentTranslation, autoPlay])

  function setInitialTranslation() {
    const initTranslation = []
    for (var item = 0; item < itemsAmount; item++) {
      initTranslation.push(-oneTimeTranslation)
    }
    setCurrentTranslation(initTranslation)
  }

  function onMouseOn() {
    setAutoPlay(false)
  }

  function onMouseOut() {
    setAutoPlay(true)
  }

  function rightArrowClick() {
    firstIndex === itemsAmount - 1
      ? setInitialPosition()
      : setFirstIndex(firstIndex + 1)
    lastIndex === itemsAmount - 1
      ? setLastIndex(0)
      : setLastIndex(lastIndex + 1)
    const rightTranslation = currentTranslation.map(
      (translation) => translation - oneTimeTranslation,
    )
    rightTranslation[firstIndex] =
      rightTranslation[firstIndex] + oneTimeTranslation * itemsAmount
    setTranslatingItem(firstIndex)
    setCurrentTranslation(rightTranslation)
  }

  function leftArrowClick() {
    firstIndex === 0
      ? setFirstIndex(itemsAmount - 1)
      : setFirstIndex(firstIndex - 1)
    lastIndex === 0 ? setInitialPosition() : setLastIndex(lastIndex - 1)
    const leftTranslation = currentTranslation.map(
      (translation) => translation + oneTimeTranslation,
    )
    leftTranslation[lastIndex] =
      leftTranslation[lastIndex] - oneTimeTranslation * itemsAmount
    setTranslatingItem(lastIndex)
    setCurrentTranslation(leftTranslation)
  }

  function setInitialPosition() {
    setFirstIndex(0)
    setLastIndex(itemsAmount - 1)
    setInitialTranslation()
  }

  const carouselDataProps = {
    currentTranslation,
    carouselList,
    firstIndex,
    lastIndex,
    translatingItem,
    oneTimeTranslation,
  }

  return (
    <CentralBlockWrapper onMouseEnter={onMouseOn} onMouseLeave={onMouseOut}>
      <ArrowButton clickHandler={leftArrowClick} />

      <CarouselItems items={itemsAmount} {...carouselDataProps} />

      <ArrowButton type="right" clickHandler={rightArrowClick} />
    </CentralBlockWrapper>
  )
}

const CentralBlockWrapper = styled.div`
  width: 800px;
  display: grid;
  align-self: center;
  justify-self: center;
  grid-template-columns: 4% 92% 4%;
  grid-gap: 1em;
`
