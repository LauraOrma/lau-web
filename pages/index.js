import { useTheme } from '@nextui-org/react'
import Navbar from '../components/Layouts/Navbar'
import Link from 'next/link'
import { Container } from '@nextui-org/react'
import { motion } from 'framer-motion'

const Home = () => {
    const { theme } = useTheme()

    return (<>
                <motion.div initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                    <Navbar/>

                    <header style={{ background: theme.colors.primary.value }}>
                        <Container>
                            <h1>Hi all, I'm Laura Ortega</h1>
                            <p>I'm a <strong>UX/UI</strong> and front-end <strong>designer/developer</strong> living in
                                Malaga. I love <strong>multimedia development</strong> and I'm learning <strong>creative
                                    programming</strong>.
                            </p>
                            <Link href={'/contact'}>
                                <a> Página contacto</a>
                            </Link>
                        </Container>
                    </header>
                </motion.div>
            </>)
}

export default Home

