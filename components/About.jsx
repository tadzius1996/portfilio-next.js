import React from 'react'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'
import logo from '../public/images/selfie.jpg'
import Social from './Social'
import { AnimatePresence, motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div className='h-auto text-center p-12 px-10 md:px-20' id='about' initial={{ y: 25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
    duration: 0.75,
    }}>
        <h1 className={styles.listItem}><span className='text-[#9f9618]'>About</span> Me</h1>
        <div className='mt-16 flex lg:flex-row flex-col lg:justify-evenly gap-5 lg:gap-0'>
          <div className='m-auto lg:m-0 relative'>
              <div className={`${styles.container} hidden lg:block`} />
              <Image src={logo} alt='logo' className='lg:w-80 w-96 h-auto rounded-3xl border-dashed border-4 border-amber-500 p-2' />
          </div>
            <div className='border-r-2 text-amber-500'/>
            <div className='text-center m-auto w-full md:w-auto lg:m-0 lg:text-left'>
                <h1 className='text-4xl lg:text-5xl tracking-wide'>Front End <br/>Web Developer</h1>
                <p className='w-72  md:w-2/3 m-auto lg:mx-0 lg:w-96 mt-5 text-md text-left'>Hi there! My name is Tadas, and I am a front-end developer with a strong passion for creating intuitive and engaging user experiences. With over 4 years of experience in the industry, I have had the opportunity to work with a variety of front-end technologies, including HTML, CSS, JavaScript, and frameworks such as React and Next.<br/> I am constantly striving to stay up-to-date with the latest developments in the field, and I am always looking for new challenges to help me grow as a developer. Whether it's designing a responsive website, implementing animations and interactions, or optimizing performance, I thrive in environments where I can use my skills to make a positive impact.</p>
                <div className=' text-start justify-center w-auto h-auto border-dashed border-2 mt-5 flex  flex-wrap hover:bg-amber-500 duration-150 cursor-pointer'>

                  <ul className='p-2'>
                    <li className='font-semibold'>Name: <span className='text-slate-500 text-sm md:text-md'>Tadas</span></li>
                    <li className='font-semibold'>Age: <span className='text-slate-500 text-sm md:text-md'>26</span></li>
                    <li className='font-semibold'>Address: <span className='text-slate-500 text-sm md:text-md'>Ha Long, Vietnam</span></li>
                  </ul>

                  <ul className='p-2'>
                    <li className='font-semibold'>Email: <span className='text-slate-500 text-sm md:text-md '>milonciustadas@gmail.com</span></li>
                    <li className='font-semibold'>Experience: <span className='text-slate-500 text-sm md:text-md'>4 years</span></li>
                    <li className='font-semibold'>GitHub: <span className='text-slate-500 text-sm md:text-md'>github.com/tadzius1996</span></li>
                  </ul>

                </div>

                <div className='mt-8 hidden lg:block'>
                  <Social/>
                </div>
            </div>
           

        </div>
        
       
        
    </motion.div>
  )
}

export default About