import React from 'react'
import TestimoniItem from './testimonial-items'

const Testimonials = () => {
  return (
    <>
      <div className='px-2 md:px-8 xl:px-40 2xl:px-[335px] lg:w-full py-10 lg:py-20'>

        <h1 className='text-black text-center font-bold text-3xl lg:text-4xl'>
          Our customer stories
        </h1>

        <h2 className='text-black text-center font-bold text-sm lg:text-md py-4'>
          We are trusted among industry leaders
        </h2>

        <div className=' flex justify-center'>
          <TestimoniItem />
        </div>
      </div>
    </>
  )
}

export default Testimonials
