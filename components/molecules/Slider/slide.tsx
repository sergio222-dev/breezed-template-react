import React, {FunctionComponent, useState} from 'react';

interface OwnProps {
  index: number;
  currentIndex: number;
}

type Props = OwnProps;

const Slide: FunctionComponent<Props> = ({index, currentIndex}) => {
    return (
      <div>
        <style jsx>{`
          .slide {
            background-color: aqua;
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 95vh;
            transform: translateX(100%);
          }
        `}</style>
      </div>
    );
};

export default Slide;
