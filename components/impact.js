import React from 'react'

const Impact = () => {
  return (
    <>
      <div className=' text-white bg-[#12130f] md:px-8 xl:px-40 2xl:px-[335px] lg:w-full py-16'>
        <h2 className='text-center font-bold text-4xl'>Impact that we created</h2>

        <div className='lg:flex justify-between pt-14'>
          <div>
            <p className='text-center font-bold text-5xl'>35%</p>
            <p className='mt-8 text-xl font-bold text-center'>Water and electricity saved</p>
          </div>
          <div className='mt-8 lg:mt-0'>
            <p className='text-center font-bold text-5xl'>3100000 <span className='text-lg'>Litres</span>
            </p>
            <p className='mt-8 text-xl text-center font-bold '>Water saved</p>
          </div>
          <div className='mt-8 lg:mt-0'>
            <p className='text-center font-bold text-5xl'>1023840 <span className='text-lg'>Kg</span> 
            </p>
            <p className='mt-8 text-xl text-center font-bold '>Carbon emission avoided</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Impact
