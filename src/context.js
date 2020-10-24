import React, { useState, createContext } from 'react'

import otter from './assets/images/otter.jpg'
import dog from './assets/images/dog.jpg'
import tiger from './assets/images/tiger.jpg'

export const CarouselContext = createContext()

export const CarouselProvider = ({ children }) => {
  const [state, setState] = useState({
    items: [
      {
        image: otter,
        name: 'Otter',
        description:
          'Otters are carnivorous mammals in the subfamily Lutrinae. The 13 extant otter species are all semiaquatic, aquatic or marine, with diets based on fish and invertebrates.',
      },
      {
        image: dog,
        name: 'Samoyed',
        description:
          'Samoyed is a breed of large herding dog that descended from the Nenets herding laika, a spitz-type dog, with a thick, white, double-layer coat.',
      },
      {
        image: tiger,
        name: 'Tiger',
        description:
          'Tiger is the largest species among the Felidae and classified in the genus Panthera. It is most recognisable for its dark vertical stripes on orangish-brown fur with a lighter underside.',
      },
    ],
    oneTimeTranslation: 245,
    autoPlay: true,
    // translatingItem: 0,
    currentTranslation: [],
  })

  function setAutoPlay($boolean) {
    setState({
      ...state,
      autoPlay: $boolean,
    })
  }

  function setCurrentTranslation($translation) {
    setState({
      ...state,
      currentTranslation: $translation,
    })
  }

  // function setTranslatingItem($itemIndex) {
  //   setState({
  //     ...state,
  //     translatingItem: $itemIndex,
  //   })
  // }

  return (
    <CarouselContext.Provider
      value={{
        ...state,
        setAutoPlay,
        setCurrentTranslation,
      }}
    >
      {children}
    </CarouselContext.Provider>
  )
}
