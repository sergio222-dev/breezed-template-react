import React, {FunctionComponent, HTMLAttributes, useEffect} from 'react';
import {useSpring, animated as A, config}                            from 'react-spring';
import css                                                   from 'styled-jsx/css';
import {usePrev}                                             from '@Presenters/usePrev';

interface OwnProps {
  position: number;
  color: string;
  currPosition: number;
  scrollSize: number;
}

type Props = OwnProps & HTMLAttributes<HTMLDivElement>;

const resolveStyle = (color, position) => {
  return css.resolve`
    div { 
      width: 400px;
      height: ${(position + 1) * 10}vh;
      background-image: url("https://picsum.photos/200/300");
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
    }
  `;
}

const minMax = (val, min, max, is = false) => {
  if (is) return val < min ? true : val > max;
  return val < min ? min : val > max ? max : val;
}

function calculatePosition(cur, pos) {
  if (pos - cur < -1) return 1;
  if (pos - cur > 1 ) return -1;
  return pos - cur;
}

const Slide: FunctionComponent<Props> = ({color, position, currPosition, scrollSize, ...rest}) => {
  const {className, styles} = resolveStyle(color, position);
  const prevPos = usePrev(currPosition);
  const [{translateX}, start] = useSpring({
    translateX: `${calculatePosition(currPosition, position) * 100}%`,
    config: config.stiff,
  }, []);

  useEffect(() => {
    if (prevPos !== currPosition) {

      // reset scroll from right to left
      if (prevPos > currPosition && currPosition === 0) {
        // I'm the last?
        if (position === scrollSize) {
          start({
            translateX: `-100%`,
          })
          return;
        }

        if (position === 0) {
          start({
            translateX: `0%`,
          })
        } else {
          start({
            translateX: `100%`,
            immediate: true,
          })
        }
      }

      // reset scroll from left to right
      if(prevPos < currPosition && currPosition === scrollSize) {

      }

      // moving from right to left
      if (prevPos < currPosition && !(prevPos === 0 && currPosition === scrollSize)) {

        // I'm the last?
        if(prevPos === 0 && position === scrollSize) {
          start({
            translateX: '100%',
            immediate: true,
          })
          return;
        }

        // I'm next?
        if(currPosition === scrollSize && position === 0) {
          start({
            translateX: '100%',
            immediate: true,
          })
          return;
        }

        if ((position - currPosition) < -1) {
          start({
            translateX: `-100%`,
            immediate: true,
          })
        } else {
          start({
            translateX: `${(position - currPosition) * 100}%`,
          })
        }

      }

      // moving from left to right
      // if (prevPos > currPosition) {
      //
      //   // I'm the last?
      //   if(currPosition === 0 && position === scrollSize) {
      //     start({
      //       translateX: '-100%',
      //       immediate: true,
      //     })
      //     return;
      //   }
      //
      //   if ((position - currPosition) > 1) {
      //     start({
      //       translateX: `100%`,
      //       immediate: true,
      //     })
      //   } else {
      //     start({
      //       translateX: `${(position - currPosition) * 100}%`,
      //     })
      //   }
      // }
    }
  }, [currPosition])

  // useEffect(() => {
  //   start();
  //   console.log(position - currPosition)
  // }, [currPosition]);

  return (
    <A.div className={className} {...rest} style={{translateX}}>
      {styles}
    </A.div>
  );
};

export default Slide;
