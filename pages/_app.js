import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import customTheme from '../theme/theme'

function MyApp({ Component, pageProps }) {
    return (
            <NextUIProvider theme={customTheme}>
                <Component {...pageProps} />
            </NextUIProvider>
    )
}

export default MyApp
