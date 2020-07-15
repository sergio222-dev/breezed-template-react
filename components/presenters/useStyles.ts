import {resolve} from 'styled-jsx/css';

export const useStyles = (strStyles: string) => {
  const {className, styles} = resolve`${strStyles}`;
  return [className, styles];
}