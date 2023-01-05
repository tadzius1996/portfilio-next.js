import React from 'react'
import {AiOutlineGithub, AiOutlineFacebook} from 'react-icons/ai'

const Social = () => {
  return (
    <div>
        <ul className='flex gap-3 text-3xl'>
            <a href="https://github.com/tadzius1996?tab=repositories" className='hover:scale-125 duration-100'><AiOutlineGithub/></a>
            <a href="https://www.facebook.com/tadas.miloncius" className='hover:scale-125 duration-100'><AiOutlineFacebook/></a>
        </ul>

    </div>
  )
}

export default Social