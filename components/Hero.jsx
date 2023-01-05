import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import logo from '../public/images/hero.svg'
import Social from '../components/Social'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { saveAs } from "file-saver";

const Hero = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1p9YuGx-ldGb2l-5EJ6ExYsz3j-qfDesz/view?usp=share_link",
      
    );
  };
  return (
    <motion.div className='z-10 px-8 md:px-32 h-[92vh] lg:text-left text-center' initial={{ y: 25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
    duration: 0.75,
    }}>
    <div className='flex flex-col lg:flex-row'>
      <div className='md:pt-20'>
        <h1 className='md:text-6xl font-bold text-5xl'>Welcome to The<br className='hidden md:block'/><a className={styles.listItem}>Tachi</a> Portfolio</h1>
        <p className='font-semibold mt-4 w-11/12 md:w-3/4 m-auto lg:mx-0 lg:w-2/3'>Web developer experienced with common and in demand front-end technologies.</p>
        <Link href='#contact' scroll={false}><button className='text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5 mr-3'>Let's Chat</button></Link>
        <button onClick={saveFile} className='text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5'>My CV</button>
      </div>
      <div className='flex justify-center lg:block mt-14 lg:mt-0 lg:w-2/3'>
      <Image src={logo} alt='heroImage' className='w-full h-auto ml-7 '/>
      </div>
    </div>
    <div className='md:flex justify-center lg:block mt-28 lg:mt-0 hidden'>
      <Social/>
    </div>
    </motion.div>
  )
}

export default Hero