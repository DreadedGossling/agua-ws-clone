import React from 'react'

const ConnectingWorlds = () => {
  return (
    <>
      <div className='py-10 lg:py-20 px-2 md:px-8 xl:px-40 2xl:px-[335px] lg:w-full'>
        <p className='font-bold text-3xl lg:text-4xl text-center text-black'>
          Connecting the Physical and Digital worlds
        </p>

        <div className='flex justify-center'>
          <div className='lg:flex mt-10 '>
            <div>
              <img src="connect1.png" alt="connect1" className='w-[500px] md:w-[600px] xl:w-full'/>
            </div>
            <div>
              <img src="connect2.png" alt="connect2" className='w-[500px] md:w-[600px] xl:w-full'/>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ConnectingWorlds
