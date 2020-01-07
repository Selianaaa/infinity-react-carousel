import React from 'react';

import { CarouselArrowImg, Button } from '../constants/styled.constants';

import rightArrow from '../assets/images/arrow.png'


export default function CarouselRightArrow({ rightArrowClick }) {
    return (
        <Button onClick={rightArrowClick}>
            <CarouselArrowImg src={rightArrow} alt="" style={{ transform: 'rotateZ(180deg)' }} />
        </Button>
    )
}
