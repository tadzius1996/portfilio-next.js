import React, {useState} from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross1} from 'react-icons/rx'
import Social from './Social'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <motion.div className='z-50 flex justify-between pt-7 mb-10 px-12' initial={{ y: -25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
    duration: 0.75,
    }}>

      <Link href='/' className='relative'><h3 className='text-3xl z-50'>Tachi</h3><span className='w-10 h-10 bg-amber-500 rounded-xl absolute top-0 left-7 z-0 opacity-50'>...</span></Link>

      <ul className='sm:flex gap-6 font-semibold hidden '>
        <Link href='#projects' scroll={false}><li className={styles.listItem}>Projects</li></Link>
        <Link href='#technologies' scroll={false}><li className={styles.listItem}>Technologies</li></Link>
        <Link href='#timeline' scroll={false}><li className={styles.listItem}>TimeLine</li></Link>
        <Link href='#contact' scroll={false}><li className={styles.listItem}>Contact</li></Link>
        <Link href='#about' scroll={false}><li className={styles.listItem}>About Me</li></Link>
      </ul>

      {!mobileOpen ? <GiHamburgerMenu className='text-4xl sm:hidden' onClick={() => setMobileOpen(!mobileOpen)}/> : (<RxCross1 className='text-4xl sm:hidden' onClick={() => setMobileOpen(!mobileOpen)}/> )}

      {mobileOpen && (
        <motion.div  className='z-50 absolute top-0 left-0 w-1/2 h-[45vh] bg-amber-500 p-7' initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
        duration: 0.75,
        }}>
          <Link href='/' className='relative'><h3 className='text-3xl font- z-10'>Tachi</h3><span className='w-10 h-10 bg-amber-500 rounded-xl absolute top-0 left-7 z-0 opacity-50'>...</span></Link>
          <ul className='sm:flex gap-6 font-semibold mt-5 text-xl mb-10'>
        <Link href='#projects' scroll={false}><li className={styles.listItem}>Projects</li></Link>
        <Link href='#technologies' scroll={false}><li className={styles.listItem}>Technologies</li></Link>
        <Link href='#timeline' scroll={false}><li className={styles.listItem}>TimeLine</li></Link>
        <Link href='#contact' scroll={false}><li className={styles.listItem}>Contact</li></Link>
        <Link href='#about' scroll={false}><li className={styles.listItem}>About Me</li></Link>
      </ul>
      <Social/>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Navbar