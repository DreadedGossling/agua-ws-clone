import React from 'react'

const Technology = () => {
  return (
    <>
      <div className=' text-white bg-[#12130f] px-2 md:px-8 xl:px-40 2xl:px-[335px] lg:w-full py-10 lg:py-20'>
        <h2 className='text-center font-bold text-3xl lg:text-4xl'>Technology Integrations</h2>

        <div className='lg:flex w-full mt-12 px-6 lg:px-20'>

          <div className='lg:w-3/5 text-lg mt-6 lg:mr-8'>
            <h1>
              AGUA ONE, our IoT gateway is enabling sustainable water management across the water value chain. This state-of-the-art solution offers numerous benefits to our customers. Key features which make our gateway stand out:
            </h1>

            <ul className='mt-8 text-[16px] list-disc my-6 px-6'>
              <li>
                Seamless communication over advanced wireless protocols, like LoRa, 4G, GSM, WiFi and Bluetooth.
              </li>

              <li>
                Power options like AC power, solar power and battery backup, ensure uninterrupted operation.
              </li>

              <li>
                24/7 monitoring, Geotagging, Alert system and accurate data analytics, help you make data-driven decisions
              </li>
            </ul>

            <h1>
              With our reliable and accurate solutions, you can rest assured that you are choosing a solution that makes your facility future-ready.
            </h1>
          </div>
          

          <div className='lg:w-2/5 flex justify-center my-8 lg:my-0'>
            <img src="technology.png" alt="technology" className='w-60 h-60 lg:w-full lg:h-full' />
          </div>

        </div>

        <div className='flex justify-center mt-8 lg:mt-24'>
          <div className=' columns-2 lg:columns-4 space-y-6'>
            <img src="startup.png" alt="startup" className='w-36 lg:w-full lg:h-full'/>
            <img src="ip67.png" alt="ip67" className='w-36 lg:w-full lg:h-full' />
            <img src="iso.png" alt="iso" className='w-36 lg:w-full lg:h-full'/>
            <img src="iso40.png" alt="iso40" className='w-36 lg:w-full lg:h-full' />
          </div>
        </div>

      </div>
    </>
  )
}

export default Technology
