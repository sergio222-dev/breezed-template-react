import {MutableRefObject, useLayoutEffect, useRef} from 'react';

const isBrowser = typeof window !== 'undefined';

type ScrollPositionOptions = {
  element?: MutableRefObject<Element>;
  useWindow: boolean;
};

type ScrollPositionType = { x: number, y: number };
type EffectOptions = {
  currentPosition: ScrollPositionType;
  previousPosition: ScrollPositionType;
}
type EffectCallable = (options: EffectOptions) => void;

const getScrollPosition = ({element, useWindow}: ScrollPositionOptions): ScrollPositionType => {
  if (!isBrowser) return {x: 0, y: 0};

  const target: Element = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? {x: window.scrollX, y: window.scrollY}
    : {x: position.left, y: position.top}
}

export const useScroll = (
  effect: EffectCallable, deps: ReadonlyArray<any>, element?: MutableRefObject<Element>, useWindow?: boolean, wait?: number
) => {
  const position = useRef(getScrollPosition({useWindow}));

  let throttleTimeout = null;

  const callBack = () => {
    const currentPosition = getScrollPosition({element, useWindow});
    effect({currentPosition, previousPosition: position.current});
    position.current = currentPosition;
    throttleTimeout = null;
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (!wait) callBack();
      if (throttleTimeout === null) {
        throttleTimeout = setTimeout(callBack, wait);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, deps);
}