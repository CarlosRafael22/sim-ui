import { createStitches } from '@stitches/react'

export const { styled, css, config } = createStitches({
    theme: {
      colors: {
        gray500: 'hsl(206,10%,76%)',
        blue500: 'hsl(206,100%,50%)',
        purple500: 'hsl(252,78%,60%)',
        green500: 'hsl(148,60%,60%)',
        red500: 'hsl(352,100%,62%)',
        redPrimary: '#CF415D',
        redHover: 'rgb(235, 144, 145)',
        greenPrimary: '#16a085',
        greenHover: 'rgb(151, 207, 156)',
        bluePrimary: '#0276DB',
        blueHover: '#005EAF',
        grayPrimary: '#D1D7DD',
        grayHover: 'rgb(237, 237, 237)',
        grayDisabled: '#d1d7dd',
        whitePrimary: '#fff',
        blackPrimary: '#173753',
        violet: '#996DFF'
      },
      space: {
        1: '0.5rem',
        2: '0.875rem',
        3: '1rem',
      },
      fontSizes: {
        1: '0.75rem',
        2: '0.875rem',
        3: '1rem',
        4: '1.125rem',
      },
      fonts: {
        untitled: 'Untitled Sans, apple-system, sans-serif',
        mono: 'Söhne Mono, menlo, monospace',
        default: 'Roboto, sans-serif'
      },
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      sizes: {
          1: '0.25rem',
          2: '0.5rem',
          3: '0.75rem',
          4: '1rem',
          5: '1.25rem',
          6: '1.5rem',
          7: '1.75rem',
          8: '2rem'
      },
      borderWidths: {},
      borderStyles: {},
      radii: {
          1: '2px',
          2: '4px',
          3: '6px',
          4: '8px',
          full: '99999px'
      },
      shadows: {},
      zIndices: {},
      transitions: {},
    },
  });