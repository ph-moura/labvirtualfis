import { ThemeProvider, DefaultTheme } from 'styled-components'
import { lightTheme, darkTheme, defaultTheme } from '../themes/myThemes'
import { Container } from '../components/sharedstyles'
import type { AppProps } from 'next/app'

import useThemeMode from '../scripts/useThemeMode'
import GlobalStyle from '../components/globalstyles'
import MyHeader from '../components/header'
import MyFooter from '../components/footer'
import NavBar from '../components/nav'

export default function App({ Component, pageProps }: AppProps) {
    const { theme, themeToggler } = useThemeMode();
    const themeMode = defaultTheme;
    return (
    <>
        <ThemeProvider theme={themeMode}>
            <GlobalStyle />
            <MyHeader/>       
            <NavBar/>
            <Container> 
                <Component {...pageProps} />
            </Container>
            <MyFooter/>
        </ThemeProvider>
    </>
    )
}
