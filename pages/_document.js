import Document, { Head, Html, Main, NextScript } from 'next/document'
import { CssBaseline, useTheme } from '@nextui-org/react'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: <>{initialProps.styles}</>
        }
    }

    render() {
        return (
                <Html lang="es">
                    <Head>
                        <meta name="author" content="Laura Ortega"/>
                        <meta name="copyright" content="Laura Ortega"/>
                        <link rel="preconnect" href="https://fonts.googleapis.com"/>
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                        <link href="https://fonts.googleapis.com/css2?family=Cambo&family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Space+Mono&display=swap"
                              rel="stylesheet"/>
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                        {CssBaseline.flush()}
                    </Head>

                    <body>
                    <Main/>
                    <NextScript/>
                    </body>

                </Html>
        )
    }
}

export default MyDocument
