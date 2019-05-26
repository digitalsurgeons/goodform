import { ThemeProvider } from 'emotion-theming'
import Header from '../components/Header'
import Head from 'next/head'
import { withTheme } from '@material-ui/core/styles'

const Dashboard = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @font-face {
            font-family: 'Graphik';
            src: url('/static/fonts/GraphikRegularWeb.eot');
            src: url('/static/fonts/GraphikRegularWeb.eot') format('embedded-opentype'),
              url('/static/fonts/GraphikRegularWeb.woff2') format('woff2'),
              url('/static/fonts/GraphikRegularWeb.woff') format('woff'),
              url('/static/fonts/GraphikRegularWeb.ttf') format('truetype'),
              url('/static/fonts/GraphikRegularWeb.svg#GraphikRegularWeb') format('svg');
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: 'Graphik';
            src: url('/static/fonts/GraphikMediumWeb.eot');
            src: url('/static/fonts/GraphikMediumWeb.eot') format('embedded-opentype'),
              url('/static/fonts/GraphikMediumWeb.woff2') format('woff2'),
              url('/static/fonts/GraphikMediumWeb.woff') format('woff'),
              url('/static/fonts/GraphikMediumWeb.ttf') format('truetype'),
              url('/static/fonts/GraphikMediumWeb.svg#GraphikMediumWeb') format('svg');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Graphik';
            src: url('/static/fonts/GraphikSemiboldWeb.eot');
            src: url('/static/fonts/GraphikSemiboldWeb.eot') format('embedded-opentype'),
              url('/static/fonts/GraphikSemiboldWeb.woff2') format('woff2'),
              url('/static/fonts/GraphikSemiboldWeb.woff') format('woff'),
              url('/static/fonts/GraphikSemiboldWeb.ttf') format('truetype'),
              url('/static/fonts/GraphikSemiboldWeb.svg#GraphikSemiboldWeb') format('svg');
            font-weight: 600;
            font-style: normal;
          }
          @font-face {
            font-family: 'Graphik';
            src: url('/static/fonts/GraphikBoldWeb.eot');
            src: url('/static/fonts/GraphikBoldWeb.eot') format('embedded-opentype'),
              url('/static/fonts/GraphikBoldWeb.woff2') format('woff2'),
              url('/static/fonts/GraphikBoldWeb.woff') format('woff'),
              url('/static/fonts/GraphikBoldWeb.ttf') format('truetype'),
              url('/static/fonts/GraphikBoldWeb.svg#GraphikBoldWeb') format('svg');
            font-weight: 700;
            font-style: normal;
          }
          @font-face {
            font-family: 'Graphik';
            src: url('/static/fonts/GraphikBlackWeb.eot');
            src: url('/static/fonts/GraphikBlackWeb.eot') format('embedded-opentype'),
              url('/static/fonts/GraphikBlackWeb.woff2') format('woff2'),
              url('/static/fonts/GraphikBlackWeb.woff') format('woff'),
              url('/static/fonts/GraphikBlackWeb.ttf') format('truetype'),
              url('/static/fonts/GraphikBlackWeb.svg#GraphikBlackWeb') format('svg');
            font-weight: 800;
            font-style: normal;
          }
          * {
            font-family: Graphik;
          }
          `
          }}
        />
      </Head>
      <Header />
      {children}
    </ThemeProvider>
  )
}

export default withTheme(Dashboard)
