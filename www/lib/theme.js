const theme = {
  palette: {
    background: {
      default: '#fff'
    },
    primary: { dark: '#00eb88', main: '#00eb88' },
    secondary: { dark: '#00eb88', main: '#00eb88' },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
      disabled: '#ffffff',
      hint: '#ffffff'
    },
    action: {
      hoverOpacity: 0.0
    }
  },
  typography: {
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    useNextVariants: true,
    fontFamily: 'Graphik'
  },
  gutter: 20,
  overrides: {
    MuiFormControl: {
      root: {
        marginBottom: '40px'
      }
    },
    MuiInput: {
      root: {
        lineHeight: '24px'
      }
    },
    MuiInputLabel: {
      shrink: {
        transform: 'translateY(0)',
        position: 'relative'
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: 16,
        fontWeight: 500
      }
    },
    MuiRadio: {
      root: {
        paddingTop: 0,
        paddingBottom: 0
      }
    },
    MuiFormGroup: {
      root: {
        marginTop: 24
      }
    },
    MuiButton: {
      root: {
        paddingLeft: 24,
        paddingRight: 24
      }
    }
  }
}

export default theme
