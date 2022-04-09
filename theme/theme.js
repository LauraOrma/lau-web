import { createTheme } from '@nextui-org/react'

export const lightTheme = createTheme({
    type: 'light',
    theme: {
        colors: {
            text: '#333',
            primaryLight: '#fff',
            primary: '#f3daa8',
            primaryDark: '#7A755F',
            gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
            link: '#7884FA',
            background: '#FAF7EB'
        },
        space: {},
        fonts: {
            sans: "Lato, serif;",
            mono: "Space Mono, monospace;",
        },
        fontSizes: {
            xs: 1,
            sm: 1.25,
            md: 1.5,
            lg: 1.625,
            xl: 1.75
        }
    }
})

export const darkCustom = createTheme({
    type: 'darkCustom',
    theme: {
        colors: {
            primaryLight: '#fff',
            primary: '#333333',
            primaryDark: '#333333',
            link: '#f3daa8',
            text: '#FAF7EB',
            background: '#333'
        },
        space: {},
        fonts: {
            sans: "Lato, sans-serif;"
        }
    }
})


