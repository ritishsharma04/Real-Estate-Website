import React from 'react'
import Title from './Title'
import { projectsData } from '../assets/assets'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1440px] mx-auto flex flex-col items-center max-sm:px-8  max-md:pt-15 xl:pt-25 sm:px-12 lg:px-24 xl:px-40 dark:bg-gray-950'>

            <Title heading="Projects" subheading="Completed" description="Crafting Spaces, Building Legacies—Explore Our Portfolio" />
            
            <div
            className=' flex max-sm:flex-wrap items-center gap-4 pt-4 max-sm:gap-2 sm:pt-15'>

                {projectsData.map((data, index)=> (
                    <div className='w-full h-full flex flex-col items-center' key={index}>

                        <img className='z-1' src={data.image}/>

                        <div className='relative z-2 -top-10 bg-white  px-4 py-2 shadow'>
                            <h4 className='font-extrabold text-lg'>{data.title}</h4>
                            <p className='text-sm text-gray-600'>{data.price} | {data.location}</p>
                        </div>

                    </div>
                ))}

            </div>


    </div>
  )
}

export default Projects