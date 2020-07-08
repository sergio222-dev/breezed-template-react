import {createContext, useContext} from 'react';

export interface Theme {
  mainTextColor: string;
  secondaryTextColor: string;
}

export const mainTheme: Theme = {
  mainTextColor: 'white',
  secondaryTextColor: 'black',
}

export const ThemeContext = createContext<Theme>(mainTheme);
export const ThemeProvider = ThemeContext.Provider;
export const useTheme = () => {
  return useContext<Theme>(ThemeContext);
}