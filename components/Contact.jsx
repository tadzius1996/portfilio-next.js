import React from 'react'
import styles from '../styles/Projects.module.css'
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'

const Contact = () => {
  const buttonClick = () => {
    navigator.clipboard.writeText('milonciustadas@gmail.com')
    alert('Copied!')}

  return (
    <div className='mb-12 px-5 md:px-0' id='contact'>
        <div className='text-center'>
          <h1 className={styles.listItem}><span className='text-[#9f9618]'>Contact</span> Me</h1>
        </div>
        <div className='flex justify-center gap-20 mt-10'>
            <AiOutlineMail className='text-[#1ecbe1] text-7xl cursor-pointer hover:scale-105 duration-100' onClick={buttonClick}  />
            <BsMessenger className=' text-7xl cursor-pointer hover:scale-105 duration-100' onClick={buttonClick}/>
            <AiOutlinePhone className='text-[#1ecbe1] text-7xl cursor-pointer hover:scale-105 duration-100' onClick={buttonClick}/>
        </div>
        <h2 className='text-center mt-3 font-semibold underline'>click to copy</h2>
        

    </div>
  )
}

export default Contact