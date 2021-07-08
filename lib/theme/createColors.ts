import {
  darken,
  lighten,
  mix,
  readableColor,
  parseToRgb,
  transparentize,
} from 'polished';

interface ThemeInputs {
  background: string;
  backgroundDark: string;
  primary: string;
  secondary: string;
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
  disabled: string;
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
  error: string;
  field: string;
  fieldError: string;
  fieldFocused: string;
  primary: string;
  primaryDisabled: string;
  primaryHovered: string;
  primaryFocused: string;
  primaryPressed: string;
  primaryRGB: string;
  secondary: string;
  secondaryDisabled: string;
  secondaryHovered: string;
  secondaryFocused: string;
  secondaryPressed: string;
  secondaryRGB: string;
  onBackground: string;
  onBackgroundFaded: string;
  onDisabled: string;
  onPrimary: string;
  recording: string;
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
  const darkSecondary = darken(0.08, inputs.secondary);
  const disabled = darken(0.24, inputs.background);
  const darkDisabled = lighten(0.24, inputs.backgroundDark);

  return {
    light: {
      background: inputs.background,
      backgroundRGB: rgbStr(inputs.background),
      backgroundTransparent: transparentize(0.25, inputs.background),
      brand: '#1976D2',
      brandRGB: rgbStr('#1976D2'),
      brandHalo: '#448AFF',
      canvas: '#ECEFF1',
      canvasRGB: rgbStr('#ECEFF1'),
      disabled,
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
      error: '#b00020',
      field: 'rgba(0, 0, 0, 0.05)',
      fieldError: lighten(0.25, '#b00020'),
      fieldFocused: darken(0.12, inputs.background),
      primary: inputs.primary,
      primaryDisabled: mix(0.5, inputs.background, inputs.primary),
      primaryHovered: lighten(0.08, inputs.primary),
      primaryFocused: lighten(0.24, inputs.primary),
      primaryPressed: lighten(0.2, inputs.primary),
      primaryRGB: rgbStr(inputs.primary),
      secondary: inputs.secondary,
      secondaryDisabled: mix(0.5, inputs.background, inputs.secondary),
      secondaryHovered: lighten(0.08, inputs.secondary),
      secondaryFocused: lighten(0.24, inputs.secondary),
      secondaryPressed: lighten(0.2, inputs.secondary),
      secondaryRGB: rgbStr(inputs.secondary),
      onBackground: readableColor(inputs.background),
      onBackgroundFaded: mix(
        0.5,
        inputs.background,
        readableColor(inputs.background),
      ),
      onDisabled: readableColor(disabled),
      onPrimary: readableColor(inputs.primary),
      recording: '#FF5520',
    },
    dark: {
      background: inputs.backgroundDark,
      backgroundRGB: rgbStr(inputs.backgroundDark),
      backgroundTransparent: transparentize(0.35, inputs.backgroundDark),
      brand: '#ffab00',
      brandRGB: rgbStr('#ffab00'),
      brandHalo: '#FFD600',
      canvas: '#212121',
      canvasRGB: rgbStr('#212121'),
      disabled: darkDisabled,
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
      error: '#b00020',
      field: 'rgba(255, 255, 255, 0.05)',
      fieldError: darken(0.25, '#b00020'),
      fieldFocused: lighten(0.12, inputs.backgroundDark),
      primary: darkPrimary,
      primaryDisabled: mix(0.5, inputs.backgroundDark, darkPrimary),
      primaryHovered: lighten(0.08, darkPrimary),
      primaryFocused: lighten(0.24, darkPrimary),
      primaryPressed: lighten(0.2, darkPrimary),
      primaryRGB: rgbStr(darkPrimary),
      secondary: darkSecondary,
      secondaryDisabled: mix(0.5, inputs.backgroundDark, darkSecondary),
      secondaryHovered: lighten(0.08, darkSecondary),
      secondaryFocused: lighten(0.24, darkSecondary),
      secondaryPressed: lighten(0.2, darkSecondary),
      secondaryRGB: rgbStr(darkSecondary),
      onBackground: readableColor(inputs.backgroundDark),
      onBackgroundFaded: mix(
        0.5,
        inputs.backgroundDark,
        readableColor(inputs.backgroundDark),
      ),
      onDisabled: readableColor(darkDisabled),
      onPrimary: readableColor(darkPrimary),
      recording: '#FF5520',
    },
  };
}

export const DEFAULT = createColors({
  background: '#ffffff',
  backgroundDark: '#121212',
  primary: '#6c5b7b',
  secondary: darken(0.4, '#ffffff'),
});
