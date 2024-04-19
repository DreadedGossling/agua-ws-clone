import React from 'react'

const Smarter = () => {

  const data = [
    {
      name: "Online Monitoring",
      image: "/onlineMonitoring.png",
      desc: "Monitor your entire water network, just using your smartphone"
    },
    {
      name: "Advanced Automation",
      image: "/advancedAutomation.png",
      desc: "Efficient distribution of water resources, with reduced operational costs"
    },
    {
      name: "Leakage Detection",
      image: "/leakageDetection.png",
      desc: "Efficient distribution of water resources, with reduced operational costs"
    },
    {
      name: "Quality Management",
      image: "/qualityManagement.png",
      desc: "Keep an eye on your health, subscribe to our water quality alerts"
    },
  ]

  return (
    <>
      <div className='py-20 md:px-8 xl:px-40 2xl:px-[335px] lg:w-full bg-[#f4fcff]'>
        <p className='font-bold text-4xl text-center  '>
          Make Your Water Infra Smarter
        </p>

        <div className='flex justify-center mt-4'>
          <div className='columns-2 xl:columns-4 mt-10 space-y-6 xl:w-full'>
            {
              data.map((item, index) => {
                return (
                  <div key={index} className='hover:scale-105 transition ease-in-out duration-500 '>
                    <div class="w-60 h-[400px] p-6 bg-white ">
                      <img src={item.image} alt="alt" className='w-full h-44'/>
                      <h5 class="mb-2 text-2xl font-bold text-black">
                        {item.name}
                      </h5>
                      <p class="mb-3 text-sm leading-4 text-black">
                        {item.desc}
                      </p>
                      <a href="#" class="mt-4 inline-flex items-center px-4 py-[6px] text-sm font-semibold text-center text-white bg-blue-600 rounded-md hover:bg-green-600">
                        Learn more
                      </a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default Smarter
