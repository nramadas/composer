import {
  darken,
  lighten,
  readableColor,
  parseToRgb,
  transparentize,
} from 'polished';

interface ThemeInputs {
  background: string;
  backgroundDark: string;
  primary: string;
}

export interface Theme {
  background: string;
  backgroundRGB: string;
  backgroundTransparent: string;
  brand: string;
  brandRGB: string;
  brandHalo: string;
  canvas: string;
  canvasRGB: string;
  'elevation-0': string;
  'elevation-1': string;
  'elevation-2': string;
  'elevation-3': string;
  'elevation-4': string;
  'elevation-5': string;
  'elevation-6': string;
  'elevation-7': string;
  'elevation-8': string;
  'elevation-9': string;
  primary: string;
  primaryRGB: string;
  onBackground: string;
  onPrimary: string;
}

interface Colors {
  light: Theme;
  dark: Theme;
}

function rgbStr(hexColor: string) {
  const { red, green, blue } = parseToRgb(hexColor);
  return `${red},${green},${blue}`;
}

export function createColors(inputs: ThemeInputs): Colors {
  const darkPrimary = darken(0.08, inputs.primary);

  return {
    light: {
      background: inputs.background,
      backgroundRGB: rgbStr(inputs.background),
      backgroundTransparent: transparentize(0.18, inputs.background),
      brand: '#1976D2',
      brandRGB: rgbStr('#1976D2'),
      brandHalo: '#448AFF',
      canvas: '#E3EDF7',
      canvasRGB: rgbStr('#E3EDF7'),
      'elevation-0': inputs.background,
      'elevation-1': lighten(0.05, inputs.background),
      'elevation-2': lighten(0.07, inputs.background),
      'elevation-3': lighten(0.08, inputs.background),
      'elevation-4': lighten(0.09, inputs.background),
      'elevation-5': lighten(0.11, inputs.background),
      'elevation-6': lighten(0.12, inputs.background),
      'elevation-7': lighten(0.14, inputs.background),
      'elevation-8': lighten(0.15, inputs.background),
      'elevation-9': lighten(0.16, inputs.background),
      primary: inputs.primary,
      primaryRGB: rgbStr(inputs.primary),
      onBackground: readableColor(inputs.background),
      onPrimary: readableColor(inputs.primary),
    },
    dark: {
      background: inputs.backgroundDark,
      backgroundRGB: rgbStr(inputs.backgroundDark),
      backgroundTransparent: transparentize(0.18, inputs.backgroundDark),
      brand: '#ffab00',
      brandRGB: rgbStr('#ffab00'),
      brandHalo: '#FFD600',
      canvas: '#212121',
      canvasRGB: rgbStr('#212121'),
      'elevation-0': inputs.backgroundDark,
      'elevation-1': lighten(0.05, inputs.backgroundDark),
      'elevation-2': lighten(0.07, inputs.backgroundDark),
      'elevation-3': lighten(0.08, inputs.backgroundDark),
      'elevation-4': lighten(0.09, inputs.backgroundDark),
      'elevation-5': lighten(0.11, inputs.backgroundDark),
      'elevation-6': lighten(0.12, inputs.backgroundDark),
      'elevation-7': lighten(0.14, inputs.backgroundDark),
      'elevation-8': lighten(0.15, inputs.backgroundDark),
      'elevation-9': lighten(0.16, inputs.backgroundDark),
      primary: darkPrimary,
      primaryRGB: rgbStr(darkPrimary),
      onBackground: readableColor(inputs.backgroundDark),
      onPrimary: readableColor(darkPrimary),
    },
  };
}

export const DEFAULT = createColors({
  background: '#ffffff',
  backgroundDark: '#121212',
  primary: '#ffab00',
});
