// import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { ThemeProvider } from '@anchor/react-components'
// import customTheme from "../customTheme"
// import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // <ThemeProvider theme= {customTheme}>
  return <Component {...pageProps} />;
  // </ThemeProvider>
}
export default MyApp;
