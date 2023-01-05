import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../Layout'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Technologies from '../components/Technologies'
import TimeLine from '../components/TimeLine'
import Contact from '../components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <Layout>
        <Hero />
        <Projects/>
        <About />
        <Technologies />
        <TimeLine />
        <Contact />
     </Layout>
  )
}
