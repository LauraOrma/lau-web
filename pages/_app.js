import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { darkCustom, lightTheme } from '../theme/theme'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
    console.log('Light => ', lightTheme)
    console.log('Dark => ', darkCustom)

    return (
            <>
                <NextThemesProvider
                        defaultTheme="system"
                        attribute="class"
                        value={{
                            light: lightTheme.className,
                            dark: darkCustom.className
                        }}
                >
                    <NextUIProvider>
                        <AnimatePresence exitBeforeEnter>
                            <Component {...pageProps} />
                        </AnimatePresence>
                    </NextUIProvider>
                </NextThemesProvider>
            </>
    )
}

export default MyApp
