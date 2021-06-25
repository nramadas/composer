import { DEFAULT as DEFAULT_COLORS } from '#lib/theme/createColors';
import {
  createCssColorVarsFromTheme,
  createCssShadowVars,
} from '#lib/theme/createCssVars';

function printCssVars<O extends object>(vars: O) {
  return Object.entries(vars)
    .map(([name, value]) => `${name}: ${value};`)
    .join('\n');
}

export function createCss() {
  return `
    <style>
      html {
        ${printCssVars(createCssShadowVars())}
        ${printCssVars(createCssColorVarsFromTheme(DEFAULT_COLORS.light))}
        --style-background: var(--color-elevation-3);
        --style-backdrop-filter: none;
        background-color: var(--color-canvas);
        font-family: var(--font-body);
      }

      @media (prefers-color-scheme: dark) {
        html {
          ${printCssVars(createCssColorVarsFromTheme(DEFAULT_COLORS.dark))}
        }
      }

      @supports ((-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))) {
        html {
          --style-background: var(--color-backgroundTransparent);
          --style-backdrop-filter: blur(20px);
        }
      }
    </style>
  `;
}
