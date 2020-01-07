import React from 'react';

import { CarouselArrowImg, Button } from '../constants/styled.constants';

import leftArrow from '../assets/images/arrow.png'


export default function CarouselLeftArrow({ leftArrowClick }) {

    return (
        <Button onClick={leftArrowClick}>
            <CarouselArrowImg src={leftArrow} alt="" />
        </Button>
    )
}