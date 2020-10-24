import React from 'react'
import styled from 'styled-components'

const oneTimeTranlation = 245

export const CarouselItems = ({ items, ...carouselDataProps }) => (
  <CarouselWrapper>
    <CarouselItemsBlockWrapper items={items}>
      <CarouselItem {...carouselDataProps} />
    </CarouselItemsBlockWrapper>
  </CarouselWrapper>
)

const CarouselItem = ({
  currentTranslation,
  carouselList,
  translatingItem,
}) => {
  return carouselList.map((item, index) => {
    const { image, name, description } = item
    const itemTranslation = currentTranslation[index]
    if (index === translatingItem) {
      var isTransliting = true
    }

    const carouselItemsProps = {
      itemTranslation,
      isTransliting,
      oneTimeTranlation,
    }

    return (
      <ItemWrapper key={index} {...carouselItemsProps}>
        <ItemImg src={image} alt="" draggable="false" />
        <ItemName>{name}</ItemName>
        <ItemDescription>{description}</ItemDescription>
      </ItemWrapper>
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
`

const ItemWrapper = styled.div`
  width: 240px;
  float: left;
  transform: translate(-245px);
  margin: 0 2.5px;
  transition: ${({ isTransliting }) => (isTransliting ? '0s' : '.35s')};
  transform: translate(${({ itemTranslation }) => itemTranslation}px);
`

const ItemImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`

const ItemName = styled.span`
  font-size: 1.2vw;
  text-decoration: underline;
  font-weight: bold;
  color: #3f0326;
`

const ItemDescription = styled.div`
  font-size: 1vw;
`
