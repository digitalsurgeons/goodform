import { ThemeProvider } from 'emotion-theming'
import Header from '../components/Header'

const theme = {
  spacing: 4,
  palette: {
    primary: '#007bff'
  }
}

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Header />
    {children}
  </ThemeProvider>
)
