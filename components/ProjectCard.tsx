import React, { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { Project } from '../types'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fade_in_Up, stagger } from '../animations';

const ProjectCard:FunctionComponent<{
    project: Project;
    showDetail: null|number,
    setShowDetail: (id:number|null)=>void

}> = ({
    project:{
        name,
        image_path,
        category,
        Github_url,
        deployed_url,
        description,
        key_tech,
        id
    },
    showDetail,
    setShowDetail,
}) => {

   

  return (
    <div>
        <Image src={image_path} alt={name} className='cursor-pointer' onClick={() => setShowDetail(id)} width="300" height="150" layout='responsive'/>
        {/* <img src={image_path} alt={name} className='cursor-pointer' onClick={() => setShowDetail(true)}/> */}
        <p className='my-2 text-center'>{name}</p>


{
    showDetail === id && (
        <div className='absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100'>
            <motion.div variants={stagger} initial="initial" animate="animate">
            {/* <img src={image_path} alt={name}/> */}
            <motion.div variants={fade_in_Up} className='border-4 border-gray-100'>
                <Image src={image_path} alt={name} width="300" height="150" layout='responsive'/>
            </motion.div>
                

            <motion.div className='flex justify-center my-4 space-x-3' variants={fade_in_Up}>
                <a href={Github_url} className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'>
                    <AiFillGithub/> <span>Github</span>
                </a>
                <a href={deployed_url} className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'>
                    <AiFillProject/> <span>Project Link</span>
                </a>
            </motion.div>
            </motion.div>


            <motion.div variants={stagger} initial="initial" animate="animate">
                <motion.h2  variants={fade_in_Up} className='mb-3 text-xl font-medium md:text-2xl'>{name}</motion.h2>
                <motion.h3  variants={fade_in_Up} className='mb-3 font-medium'>{description}</motion.h3>
                <motion.div  variants={fade_in_Up} className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
                    {
                        key_tech.map(tech => <span key={tech} className='px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200'>
                            {tech}
                        </span>)
                    }
                </motion.div>
            </motion.div>

            <button>
                <MdClose size={30} onClick={() => setShowDetail(null)} className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200'/>
            </button>
        </div>
)}

    </div>
  )
}

export default ProjectCard