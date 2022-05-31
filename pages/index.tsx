import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import React from 'react'
import ServiceCard from '../components/ServiceCard';
import { services } from '../data'
import { motion } from 'framer-motion';
import { fade_in_Up, stagger } from '../animations';
import Head from 'next/head';

const index = () => {
  
  return (
    <div className='flex flex-col flex-grow px-6 pt-1'>

      <Head>
        <title>Ashish Mohanty | PortFolio</title>
      </Head>
      <h5 className='my-3 font-medium'>
        I am currently a final-year B.Tech student at Vellore Institute of Technology in Bhopal, 
        Madhya Pradesh, studying Computer Science and Engineering with a specialisation in Gaming Technology. 
        I am really enthusiastic about learning new technologies and have over two years of 
        experience producing games and dynamic websites. I aspire to become a Full Stack Web Developer.
      </h5>
      <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100' style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}>
        <h6 className='my-3 text-xl font-bold tracking-wide'>What I Offer</h6>
        <motion.div className='grid gap-6 lg:grid-cols-2' variants={stagger} initial="initial" animate="animate">
          {
            services.map(service=> (
            <motion.div variants={fade_in_Up} className='bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1' key={service.title}>
              <ServiceCard service={service}/>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default index;

//!called every time  the page refreshed
// export const getStaticProps = async (context:GetStaticPropsContext) => {

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log("SERVER", services);
  

//   return {
//     props:{ services: data.services}
//   }

// }

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }