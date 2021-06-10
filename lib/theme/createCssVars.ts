import { Theme } from '#lib/theme/createColors';

type CssColorVar = `--color-${keyof Theme}`;

export function createCssColorVarsFromTheme(theme: Theme) {
  const keys = Object.keys(theme) as (keyof Theme)[];
  return keys.reduce((acc, key) => {
    const color = theme[key];
    const colorKey = `--color-${key}` as const;
    acc[colorKey] = color;
    return acc;
  }, {} as { [K in CssColorVar]: string });
}

export function createCssShadowVars() {
  return {
    '--font-body':
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    '--shadow-elevation-0': 'none',
    '--shadow-elevation-1':
      '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
    '--shadow-elevation-2':
      '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20)',
    '--shadow-elevation-3':
      '0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20)',
    '--shadow-elevation-4':
      '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)',
    '--shadow-elevation-5':
      '0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20)',
    '--shadow-elevation-6':
      '0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20)',
    '--shadow-elevation-7':
      '0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20)',
    '--shadow-elevation-8':
      '0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12), 0 7px 8px -4px rgba(0,0,0,0.20)',
    '--shadow-elevation-9':
      '0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.20)',
    '--shadow-elevation-10':
      '0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.20)',
    '--drop-shadow-elevation-1':
      'drop-shadow(0 1px 1px rgba(0,0,0,0.14)) drop-shadow(0 2px 1px rgba(0,0,0,0.12)) drop-shadow(0 1px 3px rgba(0,0,0,0.20))',
    '--drop-shadow-elevation-2':
      'drop-shadow(0 2px 2px rgba(0,0,0,0.14)) drop-shadow(0 3px 1px rgba(0,0,0,0.12)) drop-shadow(0 1px 5px rgba(0,0,0,0.20))',
    '--drop-shadow-elevation-3':
      'drop-shadow(0 3px 4px rgba(0,0,0,0.14)) drop-shadow(0 3px 3px rgba(0,0,0,0.12)) drop-shadow(0 1px 8px rgba(0,0,0,0.20))',
    '--drop-shadow-elevation-4':
      'drop-shadow(0 4px 5px rgba(0,0,0,0.14)) drop-shadow(0 1px 10px rgba(0,0,0,0.12)) drop-shadow(0 2px 4px rgba(0,0,0,0.20))',
    '--drop-shadow-elevation-5':
      'drop-shadow(0 6px 10px rgba(0,0,0,0.14)) drop-shadow(0 1px 18px rgba(0,0,0,0.12)) drop-shadow(0 3px 5px rgba(0,0,0,0.20))',
    '--drop-shadow-elevation-6':
      'drop-shadow(0 8px 10px rgba(0,0,0,0.14)) drop-shadow(0 3px 14px rgba(0,0,0,0.12)) drop-shadow(0 5px 5px rgba(0,0,0,0.20))',
    '--drop-shadow-elevation-7':
      'drop-shadow(0 9px 12px rgba(0,0,0,0.14)) drop-shadow(0 3px 16px rgba(0,0,0,0.12)) drop-shadow(0 5px 6px rgba(0,0,0,0.20))',
    '--drop-shadow-elevation-8':
      'drop-shadow(0 12px 17px rgba(0,0,0,0.14)) drop-shadow(0 5px 22px rgba(0,0,0,0.12)) drop-shadow(0 7px 8px rgba(0,0,0,0.20))',
    '--drop-shadow-elevation-9':
      'drop-shadow(0 16px 24px rgba(0,0,0,0.14)) drop-shadow(0 6px 30px rgba(0,0,0,0.12)) drop-shadow(0 8px 10px rgba(0,0,0,0.20))',
    '--drop-shadow-elevation-10':
      'drop-shadow(0 24px 38px rgba(0,0,0,0.14)) drop-shadow(0 9px 46px rgba(0,0,0,0.12)) drop-shadow(0 11px 15px rgba(0,0,0,0.20))',
    '--width-content-max': '960px',
    '--z-header': '100',
  } as const;
}
