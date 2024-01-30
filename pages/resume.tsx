import React from 'react'
import Bar from '../components/Bar'
import { languages, tools } from '../data'
import { motion } from 'framer-motion'
import { fade_in_Up } from '../animations'
import Head from 'next/head'

const resume = () => {

  

  return (
    <div className='px-6 py-2'>

      <Head>
        <title>Ashish Mohanty | Resume | PortFolio</title>
      </Head>

      {/* //Education and Experience */}
      <div className='grid gap-6 md:grid-cols-2'>
        <motion.div variants={fade_in_Up} initial="initial" animate="animate">
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div>
            <h5 className='my-2 text-xl font-semibold'>B.TECH - Computer Science and Engineering with Specialization in Gaming Technology</h5>
            <p className='font-bold'>Vellore Institute of Technology (2019- 2023)</p>
          </div>
        </motion.div>

        <motion.div variants={fade_in_Up} initial="initial" animate="animate">
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>FullStack Web Developer</h5>
            <p className='font-semibold'>NullClass Company (Mar 2022 - May 2022)</p>
            <p className='my-3'>Learned and made FullStack Projects Using MongoDb, ExpressJS, ReactJs, NodeJs as well as Firebase</p>
          </div>
          <div>
            <h5 className='my-2 text-xl font-bold'>SDET</h5>
            <p className='font-semibold'>Mad Street Den (Dec 2022 - March 2024)</p>
            <p className='my-3'>Learned to write test cases and execute them for various features, performed API Testing and 
            Automation using Postman and Python, and gained proficiency in BDD Framework and Cucumber for web application automation</p>
          </div>
        </motion.div>
      </div>

      {/* //Languages and Tools */}

      <div className='grid gap-6 md:grid-cols-2'>

      <div>
        <h5 className='my-3 text-2xl font-bold'>Languages & FrameWorks</h5>
        <div className='my-2'>
          {
            languages.map((language) => <Bar data={language} key={language.name}/>)
          }
        </div>
      </div>

      <div>
        <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
        <div className='my-2'>
          {
            tools.map((tool) => <Bar data={tool} key={tool.name}/>)
          }
        </div>
      </div>

      </div>
    </div>
  )
}

export default resume