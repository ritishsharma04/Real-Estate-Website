import React from 'react'

const Title = ({heading, subheading, description}) => {
  return (
   <>
   <h2 className='text-4xl text-center max-sm:text-2xl font-extrabold mb-4'>
    {heading}
    <span className='underline decoration-1 underline-offset-5 font-normal'>{subheading}</span>
    </h2>
   <p className='max-sm:w-6/6  font-medium text-center w-2/6 text-gray-500'>{description}</p>
   </>
  )
}

export default Title