import React from 'react'
import styled from 'styled-components'

const oneTimeTranlation = 245

export default function CarouselItemsBlock({ items, ...carouselDataProps }) {
  return (
    <CarouselWrapper>
      <CarouselItemsBlockWrapper items={items}>
        <CarouselData {...carouselDataProps} />
      </CarouselItemsBlockWrapper>
    </CarouselWrapper>
  )
}

function CarouselData({
  currentTranslation,
  carouselList,
  firstIndex,
  lastIndex,
  translatingItem,
}) {
  const translation = Array.from(currentTranslation)
  return carouselList.map((item, index) => {
    const { image, name, description } = item
    const itemTranslation = translation[index]
    if (index === translatingItem) {
      var isTransliting = true
    }

    const carouselItemsProps = {
      itemTranslation,
      isTransliting,
      oneTimeTranlation,
    }

    return (
      <CarouselItem key={index} {...carouselItemsProps}>
        <CarouselItemImg src={image} alt="" draggable="false" />
        <CarouselItemName>{name}</CarouselItemName>
        <p>{description}</p>
      </CarouselItem>
    )
  })
}

const CarouselWrapper = styled.div`
  width: 732px;
  height: 300px;
  position: relative;
  overflow: hidden;
`

const CarouselItemsBlockWrapper = styled.div`
  position: relative;
  width: ${({ items }) => items * `${oneTimeTranlation}`}px;
  height: 300px;
  p {
    font-size: 1vw;
  }
`

const CarouselItem = styled.div`
  width: 240px;
  float: left;
  transform: translate(-245px);
  cursor: pointer;
  margin: 0 2.5px;
  transition: ${({ isTransliting }) => (isTransliting ? '0s' : '.35s')};
  transform: translate(${({ itemTranslation }) => itemTranslation}px);
`

const CarouselItemImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`

const CarouselItemName = styled.span`
  font-size: 1vw;
  text-decoration: underline;
  font-weight: bold;
`
