import React from 'react'
import styles from '../styles/Projects.module.css'
import {projects} from '../constants/projects'
import ProjectCard from '../components/ProjectCard'
import { AnimatePresence, motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.div initial={{ y: 25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
    duration: 0.75,
    }}className='bg-[#1ECBE1] h-auto] text-center py-12' id='projects'>
        <h1 className={styles.listItem}><span className='text-[#9f9618]'>My</span> Portfolio</h1>
        <div className='flex flex-wrap gap-5 mt-10 justify-center'>
            {projects.map((project) => (
                <ProjectCard project={project} key={project.name}/>
            ))}

        </div>


    </motion.div>
  )
}

export default Projects