import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import otter from '../assets/images/otter.jpg'
import dog from '../assets/images/dog.jpg'
import tiger from '../assets/images/tiger.jpg'

import CarouselItemsBlock from './CarouselItemsBlock'
import { ArrowButton } from '../components'


export default function CarouselCentralBlock() {

    return (
        <Container>
            <Title>Infinity React Functional Carousel</Title>
            <CentralBlock />
        </Container>
    )
}


function CentralBlock() {
    const carouselItems = [
        {
            image: otter,
            name: 'Otter',
            description: 'Otters are carnivorous mammals in the subfamily Lutrinae. The 13 extant otter species are all semiaquatic, aquatic or marine, with diets based on fish and invertebrates.'
        },
        {
            image: dog,
            name: 'Samoyed',
            description: 'Samoyed is a breed of large herding dog that descended from the Nenets herding laika, a spitz-type dog, with a thick, white, double-layer coat.'
        },
        {
            image: tiger,
            name: 'Tiger',
            description: 'Tiger is the largest species among the Felidae and classified in the genus Panthera. It is most recognisable for its dark vertical stripes on orangish-brown fur with a lighter underside.'
        }
    ];

    const oneTimeTranlation = 245;

    const [carouselList] = useState(setCarouselItems);
    const itemsAmount = carouselList.length;

    const [firstIndex, setFirstIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(itemsAmount - 1);
    const [translatingItem, setTranslatingItem] = useState(0);

    const [currentTranslation, setCurrentTranslation] = useState([]);
    const [autoPlay, setAutoPlay] = useState(true);


    useEffect(() => {
        setInitialTranslation();
    },[]);


    useEffect(() => {
        if (autoPlay) {
            const interval = setInterval(() => {
                rightArrowClick();
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [currentTranslation, autoPlay]);


    function setCarouselItems() {
        return (carouselItems.length === 3)
            ? carouselItems.slice(carouselItems.length - 1).concat(...carouselItems, carouselItems.slice(0,2))
            : carouselItems;
    }


    function setInitialTranslation() {
        const initTranslation = [];
        for (var item = 0; item < itemsAmount; item++) {
            initTranslation.push(-oneTimeTranlation);
        };
        setCurrentTranslation(initTranslation);
    }


    function onMouseOn() {
        setAutoPlay(false);
    }


    function onMouseOut() {
        setAutoPlay(true);
    }


    function rightArrowClick() {
        (firstIndex === itemsAmount - 1) ? setInitialPosition() : setFirstIndex(firstIndex + 1);
        (lastIndex === itemsAmount - 1) ? setLastIndex(0) : setLastIndex(lastIndex + 1);
        const rightTranslation = currentTranslation.map(translation => translation - oneTimeTranlation);
        rightTranslation[firstIndex] = rightTranslation[firstIndex] + oneTimeTranlation * itemsAmount;
        setTranslatingItem(firstIndex);
        setCurrentTranslation(rightTranslation);
    }


    function leftArrowClick() {
        (firstIndex === 0) ? setFirstIndex(itemsAmount - 1) : setFirstIndex(firstIndex - 1);
        (lastIndex === 0) ? setInitialPosition() : setLastIndex(lastIndex - 1);
        const leftTranslation = currentTranslation.map(translation => translation + oneTimeTranlation);
        leftTranslation[lastIndex] = leftTranslation[lastIndex] - oneTimeTranlation * itemsAmount;
        setTranslatingItem(lastIndex);
        setCurrentTranslation(leftTranslation);
    }


    function setInitialPosition() {
        setFirstIndex(0);
        setLastIndex(itemsAmount - 1);
        setInitialTranslation();
    }


    const carouselDataProps = {
        currentTranslation,
        carouselList,
        firstIndex,
        lastIndex,
        translatingItem,
        oneTimeTranlation
    };


    return (
        <CentralBlockWrapper
            onMouseEnter={onMouseOn}
            onMouseLeave={onMouseOut}
        >
        <ArrowButton clickHandler={leftArrowClick} />
        <CarouselItemsBlock
            items={itemsAmount}
            {...carouselDataProps}
        />
        <ArrowButton type='right' clickHandler={rightArrowClick} />
        </CentralBlockWrapper>
    )
}

const Container = styled.section`
    display: grid;
    grid-template-rows: 0.5fr 2fr;
    align-self: center;
    justify-self: center;
    text-align: center;

`

const Title = styled.h3`
    font-size: calc( (100vw - 1280px)/(1919 - 1280) * (25 - 20) + 20px);
    font-weight: 700;
    line-height: 204.3%;
`

const CentralBlockWrapper = styled.div`
    width: 800px;
    display: grid;
    align-self: center;
    justify-self: center;
    grid-template-columns: 4% 92% 4%;
    grid-gap: 1em;
`
