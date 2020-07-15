import {createContext, useContext} from 'react';

export interface Theme {
  white: string;
  black: string;
  green: string;
}

export const mainTheme: Theme = {
  white: '#fff',
  black: '#000',
  green: '#5fb759',
}

export const ThemeContext = createContext<Theme>(mainTheme);
export const ThemeProvider = ThemeContext.Provider;
export const useTheme = () => {
  return useContext<Theme>(ThemeContext);
}