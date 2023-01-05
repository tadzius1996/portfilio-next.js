import React from 'react'
import Image from 'next/image'

const ProjectCard = ({project}) => {
  console.log(project)
  
  return (
    <div className='bg-white w-11/12 md:w-1/2 lg:w-1/3 h-auto cursor-pointer shadow-xl hover:scale-105 duration-100'>
      <Image src={project.img} alt='project-logo' width={300} height={300}  className='w-full'/>
      <div className='text-left m-7'>
        <h3 className='text-2xl font-bold underline'>{project.name}</h3>
        <p className='font-semibold mt-2'>{project.description}</p>
        <h4 className='text-center font-bold mt-2 underline'>Stack</h4>
        <div className='flex justify-around mt-3'>
          {project.stack.map((stack, id) => (
            <div className='px-4 font-semibold' key={id}>
              <p>{stack}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-around pb-4'>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <a href={project.source} class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Code
          </a>
        </button>

        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <a href={project.site} class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Source
          </a>
        </button>
      </div>


    </div>
  )
}

export default ProjectCard