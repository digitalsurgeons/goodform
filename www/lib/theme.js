import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1E2A4B'
    },
    secondary: {
      main: '#E28390'
    },
    error: {
      main: red.A400
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        color: '#1E2A4B'
      }
    }
  }
})

export default theme
