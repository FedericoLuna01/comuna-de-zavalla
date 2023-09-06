import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
        overflowX: 'hidden',
      },
      body: {
        overflowX: 'hidden',
      },
      '.image': {
        borderRadius: '10px',
        boxShadow: `5px 5px 0 #C4D42D`,
      }
    }
  },
  colors: {
    primary: {
      100: '#C4D42D',
    },
    secondary: {
      100: '#F2F2F2',
    },
    bg: {
      100: '#FBFBF9',
      200: '#FBFBF9',
    },
    logoYellow: {
      100: '#FEDB27'
    },
    logoBlue: {
      100: '#38CDED'
    },
    logoRed: {
      100: '#EA3D3F'
    },
    logoPurple: {
      100: '#D570B2'
    }
  },
  components: {
    Link: {
      baseStyle: {
        fontWeight: 'normal',
        _hover: {
          color: 'primary.100',
          textDecoration: 'underline',
          textDecorationColor: 'primary.100',
        }
      },
      variants: {
        'footer': {
          fontWeight: 'normal',
          color: 'gray.600',
        }
      }
    },
    Text: {
      baseStyle: {
        color: ''
      },
      variants: {
        'above-title': {
          color: 'primary.100',
          textTransform: 'uppercase',
          fontWeight: 'bold',
        }
      }
    },
    Button: {
      baseStyle: {
        borderRadius: '5px',
        ':hover': {
          filter: 'brightness(1.05)',
          boxShadow: '4px 4px 0 rgba(0,0,0,0.25)'
        },
        ':active': {
          filter: 'brightness(0.95)',
          boxShadow: 'none'
        }
      },
      variants: {
        'default': {
          background: 'primary.100',
          ':hover': {
            background: 'primary.100',
          },
          ':active': {
            filter: 'brightness(0.95)',
          }
        }
      }
    },
    Heading: {
      variants: {
        'title': {
          textDecoration: 'underline',
          textUnderlineOffset: 5,
          fontSize: '5xl',
          marginBottom: '5rem',
        }
      }
    }
  }
})
