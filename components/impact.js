import React from 'react'

const Impact = () => {
  return (
    <>
      <div className=' text-white bg-[#12130f] px-2 md:px-8 xl:px-40 2xl:px-[335px] lg:w-full py-10 lg:py-20'>
        <h2 className='text-center font-bold text-3xl lg:text-4xl'>Impact that we created</h2>

        <div className='lg:flex justify-between pt-8 lg:pt-14'>
          <div>
            <p className='text-center font-bold text-3xl lg:text-5xl'>35%</p>
            <p className='lg:mt-8 text-lg lg:text-xl font-bold text-center'>Water and electricity saved</p>
          </div>
          <div className='mt-4 lg:mt-0'>
            <p className='text-center font-bold text-3xl lg:text-5xl'>3100000 <span className='text-sm lg:text-lg'>Litres</span>
            </p>
            <p className='lg:mt-8 text-lg lg:text-xl font-bold text-center'>Water saved</p>
          </div>
          <div className='mt-4 lg:mt-0'>
            <p className='text-center font-bold text-3xl lg:text-5xl'>1023840 <span className='text-sm lg:text-lg'>Kg</span> 
            </p>
            <p className='lg:mt-8 text-lg lg:text-xl font-bold text-center '>Carbon emission avoided</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Impact
