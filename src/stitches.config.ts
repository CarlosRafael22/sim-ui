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
        blackPrimary: '#173753'
      },
      space: {
        1: '5px',
        2: '10px',
        3: '15px',
      },
      fontSizes: {
        1: '12px',
        2: '14px',
        3: '16px',
      },
      fonts: {
        untitled: 'Untitled Sans, apple-system, sans-serif',
        mono: 'Söhne Mono, menlo, monospace',
      },
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      sizes: {},
      borderWidths: {},
      borderStyles: {},
      radii: {
          1: '2px',
          2: '4px',
          3: '6px',
          4: '8px'
      },
      shadows: {},
      zIndices: {},
      transitions: {},
    },
  });