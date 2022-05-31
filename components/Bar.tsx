import React, { FunctionComponent } from 'react'
import { Skill } from '../types'
import { motion } from 'framer-motion'

const Bar:FunctionComponent<{
    data:Skill
}> = ({ data:{Icon,level,name}}) => {

  const variants = {
    initial: {
      width: 0
    },
    animate: {
      width: level,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className='my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300'>
        <motion.div className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600'
        style={{ 
          width: level
        }}
        variants={variants}
        initial="initial"
        animate="animate"
        >
            <Icon className='mr-3'/>
            {name}
        </motion.div>
    </div>
  )
}

export default Bar