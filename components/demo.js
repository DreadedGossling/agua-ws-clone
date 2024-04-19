import React from 'react'

const Demo = () => {
  return (
    <>
      <div className='text-white bg-[#d1dab8] px-4 md:px-8 xl:px-40 2xl:px-[335px] lg:w-full py-20'>

        <h1 className='text-center font-bold text-4xl'>
          Take your first step towards sustainable water future
        </h1>

        <div className='flex justify-center space-x-4 md:space-x-20 mt-8' >
          <button
            className=' h-14 w-64 text-xl border-2 border-black font-extrabold bg-white text-black rounded-md p-2 my-10 m hover:bg-green-600 hover:text-white transition hover:duration-300 ease-in-out '>
            Book a demo
          </button>
          <button
            className='h-14 w-64 text-xl border-2 border-black font-extrabold bg-white text-black rounded-md p-2 my-10 m hover:bg-green-600 hover:text-white transition hover:duration-300 ease-in-out '>
            Protect catalogue
          </button>
        </div>
      </div>
    </>
  )
}

export default Demo
