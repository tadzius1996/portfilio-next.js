import React from 'react'
import styles from '../styles/Projects.module.css'
import {FaReact, FaDatabase} from 'react-icons/fa'
import {MdDesignServices} from 'react-icons/md'

const Technologies = () => {
  return (
    <div className='text-center mt-0 md:mt-5 px-10 md:px-20' id='technologies'>
      <h1 className={styles.listItem}><span className='text-[#9f9618]'>Skill</span> Set</h1>
      <div className='flex md:flex-row flex-col text-left justify-center gap-16 mt-12'>
      <div className='shadow-2xl p-5 cursor-pointer hover:scale-105 duration-100'>
        <FaReact className='text-3xl'/>
        <h2 className='text-3xl font-bold'>Front-End</h2>
        <p className='font-semibold text-slate-500 w-auto'>Experience with React.js, Next.js, JavaScript</p>
      </div>

      <div className='shadow-2xl p-5 cursor-pointer hover:scale-105 duration-100'>
        <FaDatabase className='text-3xl'/>
        <h2 className='text-3xl font-bold'>Back-End</h2>
        <p className='font-semibold text-slate-500 w-auto'>Experience with MongDb, GraphQL</p>
      </div>

      <div className='shadow-2xl p-5 cursor-pointer hover:scale-105 duration-100'>
        <MdDesignServices className='text-3xl'/>
        <h2 className='text-3xl font-bold'>UI/UX</h2>
        <p className='font-semibold text-slate-500 w-auto'>Experience with Figma, Adobe Illustrator</p>
      </div>
      </div>
    </div>
  )
}

export default Technologies