import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='px-4 text-white bg-[#12130f] md:px-8 xl:px-40 2xl:px-[335px] lg:w-full py-20'>

        <div className='lg:flex mb-8 lg:space-x-4'>

          <div className='w-1/3'>
            <div>
              <h1 className=' font-bold text-xl'>
                Head Office :
              </h1>
              <p>
                B-60(B) 3rd cross 1st stage Bommasandra Industrial Area, Bengaluru, Karnataka 560099
              </p>
            </div>

            <div>
              <h1 className='mt-6 font-bold text-xl'>
                Branch Office :
              </h1>
              <p>
                Plot no. 10, Second Floor, Inder Enclave, Main Rohtak Road, New Delhi-110087              </p>
            </div>

            <div >
              <h1 className='mt-6 font-bold text-xl'>
                Phone No. :
              </h1>
              <p>
                1800 3090 609
              </p>
            </div>
          </div>

          <div className='w-1/3 mt-8 lg:mt-0'>
            <div>
              <h1 className=' font-bold text-xl'>
                Follow Us On :
              </h1>
              <div className='flex space-x-4 cursor-pointer mt-4'>
                <img src="fb.svg" alt="fb" className='bg-white h-8 w-8 rounded-full p-1'/>
                <img src="insta.png" alt="insta" className='bg-white h-8 w-8 rounded-full p-1' />
                <img src="twitter.svg" alt="twitter" className='bg-white h-8 w-8 rounded-full p-1'/>
                <img src="linkedin.svg" alt="linkedin" className='bg-white h-8 w-8 rounded-full p-1'/>
              </div>
            </div>

            <div>
              <h1 className='mt-6 font-bold text-xl'>
                Drop Us A Mail :
              </h1>
              <div className='mt-6'>
                <img src="mail.png" alt="mail" className='bg-white h-8 w-8 rounded-full p-2'/>
              </div>
            </div>
          </div>

          <div className='w-1/3  mt-8 lg:mt-0'>
            <h1 className=' font-bold text-xl'>
              Join our newsletter
            </h1>
            <div className='flex mt-4'>
              <input type="text" className=' rounded-l-lg w-56 hover:bg-slate-500 h-10 bg-slate-300' />
              <button
                className='bg-white text-black px-4 rounded-r-lg text-sm hover:text-green-700'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr />
        <div className='mt-8'>
          &copy;2023 Agua Wireless Systems Private Limited. All Rights Reserved. Various Trademarks Held By Their Respective Owners.
          Designed and Developed By <a href="#" className=' underline'> The Ace Digital</a>
        </div>

      </div>
    </>
  )
}

export default Footer
