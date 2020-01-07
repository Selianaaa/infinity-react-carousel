import React from 'react'
import styled from 'styled-components'

import { colors } from '../../../constants/color.constants'

import CarouselCentralBlock from './CarouselCentralBlock'


export default function Carousel() {

    return (
        <Container>
            <GridWrapper>
                <TitleBlock />
                <CarouselCentralBlock />
            </GridWrapper>
        </Container>
    )
}

function TitleBlock() {
    return (
        <TitleBlockWrapper>
            Статьи
        </TitleBlockWrapper>
    )
}


const Container = styled.article`
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
`

const GridWrapper = styled.div`
    display: grid;
    width: 70%;
    padding: 5% 0;
`

const TitleBlockWrapper = styled.div`
    margin-left: 5%;
    margin-bottom: 3%;
    font-size: 2vw;
    font-weight: 400;
`
