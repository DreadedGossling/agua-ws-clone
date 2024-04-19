import React from 'react'

const Intro = () => {
  return (
    <>
      <div className='bg-[#12130f] lg:flex justify-between px-4 md:px-8 xl:px-40 2xl:px-[335px] lg:w-full py-16 lg:space-x-4'>

        <div className='lg:w-1/2'>
          <p className='text-6xl font-extrabold text-white'>
            “Let’s make your
            {/* <br /> */}
            <span className='text-[#6fccdd]'> water visible </span>
            and
            {/* <br /> */}
            <span className='text-[#57ad82]'> cost invisible</span>
            ”
          </p>

          <hr className='w-32 my-6' />

          <p className='text-white font-medium'>
            Imagine a Smart device that gives you insights about your entire water network, increases the lifespan of your water infrastructure, and saves you money on water. Whether you are a large water utility, industry, or housing complex, we have a solution for everyone !
          </p>

          <p className='text-white text-xl font-bold mt-6'>
            1300+ Clients are making money by using water right
          </p>
          <br />
          <button
            className='font-bold bg-white text-black rounded-sm p-2 px-6 my-10 m hover:bg-green-600 hover:text-white transition hover:duration-300 ease-in-out '>
            Book a demo
          </button>
        </div>

        <div className='lg:w-1/2 my-6 pb-8 md:pb-0 flex justify-center'>
          <img src="home.png" alt="aguaws" className=' shadow-md shadow-gray-400' />
        </div>

      </div>
    </>
  )
}

export default Intro
