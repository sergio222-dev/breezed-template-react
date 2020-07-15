import React, {FunctionComponent, useEffect, useState} from 'react';
import {Carousel}                                      from 'react-responsive-carousel';
import ArrowButton                                     from '@Atoms/Buttons/Arrow';
import {resolve} from 'styled-jsx/css';

const resolveStylesForArrows = (direction: 'left' | 'right') => {
  return resolve`
    a {
      position: absolute;
      top: 50%;
      ${direction === 'left' ? `left: 30px;` : `right: 30px;` }
    }
  `;
};

interface OwnProps {
}

type Props = OwnProps;

const Slider: FunctionComponent<Props> = ({}) => {
  const {className: leftClassName, styles: leftStyles} = resolveStylesForArrows('left')
  const {className: rightClassName, styles: rightStyles} = resolveStylesForArrows('right')
  return (
    <>
      <Carousel
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        renderArrowPrev={(onClick) => <ArrowButton onClick={onClick} className={leftClassName} direction={'left'} size={36} color={'white'}/>}
        renderArrowNext={(onClick) => <ArrowButton onClick={onClick} className={rightClassName} direction={'right'} size={36} color={'white'}/>}
        interval={3000}
        autoPlay={true}
        stopOnHover={false}
        transitionTime={800}
      >
        <div className={'slide'}>
          <img height={'100%'} src={'https://picsum.photos/1600/800'} />
        </div>
        <div className={'slide'}>
          <img src={'https://picsum.photos/1600/800'} />
        </div>
      </Carousel>
      {leftStyles}
      {rightStyles}
      <style jsx>{`
        .slide {

          width: 100%;
          height: 95vh;
          background-size: cover;
          position: relative;
          
          .button-a {
            position: absolute;
            top: 50%;
            z-index: 100;
          }
        }
      `}</style>
    </>
  );
};

export default Slider;
