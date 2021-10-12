import { ColorSchemeName } from 'react-native';

export type Palette = {
  light_tint: string;
  light: string;
  light_shadow: string;
  dark_tint: string;
  dark: string;
  dark_shadow: string;
  dark_shadow2: string;
};

const COLORS: Record<Exclude<ColorSchemeName, null | undefined>, Palette> = {
  light: {
    light_tint: '#FEFAE0',
    light: '#FAEDCD',
    light_shadow: '#582F0E',
    dark_tint: '#E9EDC9',
    dark: '#CCD5AE',
    dark_shadow: '#656D4A',
    dark_shadow2: '#333D29',
  },
  dark: {
    light_tint: '#14213d', // background
    light: '#4a4e69', // secondary tone
    light_shadow: '#fff', // text color
    dark_tint: '#9a8c98', // icon color
    dark: '#9a8c98', // form background
    dark_shadow: '#fff', // font color
    dark_shadow2: '#f2e9e4', // title color
  },
};

export default COLORS;
