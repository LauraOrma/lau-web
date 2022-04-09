import Link from 'next/link'
import { Container } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Navbar from '../components/Layouts/Navbar'

const ContactPage = () => {
    return (
            <>
                <motion.div initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                    <Navbar/>
                    <Container>
                        <h1>Página de Contacto</h1>
                        <Link href={'/'}>
                            <a>Go back!</a>
                        </Link>
                    </Container>
                </motion.div>
            </>
    )
}

export default ContactPage