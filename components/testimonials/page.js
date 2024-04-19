import React from 'react'
import TestimoniItem from './testimonial-items'

const Testimonials = () => {
  return (
    <>
      <div className='md:px-8 xl:px-40 2xl:px-[335px] lg:w-full py-16'>

        <h1 className='text-black text-center font-bold text-4xl'>
          Our customer stories
        </h1>

        <h2 className='text-black text-center font-bold text-md py-4'>
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
