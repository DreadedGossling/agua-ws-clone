import React from 'react'
import { Paper } from '@mui/material'
import Image from 'next/image';

const Item = ({ item }) => {
  return (
    <Paper className='text-center p-4 lg:pt-8 border-2 shadow-md shadow-gray-400'>
      <div className='flex space-x-4'>
        <Image
          src={item.image}
          alt={item.firstName + " " + item.lastName}
          width="0"
          height="0"
          sizes="100vw"
          className='h-14 w-14 lg:h-24 lg:w-24 rounded-full mt-4'
        />
        <div>
          <p className=' text-black text-sm lg:text-md mt-4 text-left'>{item.description}</p>
          <div className='flex justify-end'>
            <div className='text-sm font-semibold text-left w-48 p-4 text-black'>
              <p>{item.name}</p>
              <p>{item.designation}</p>
              <p>{item.company}</p>
            </div>
          </div>

        </div>
      </div>
    </Paper>
  )
}

export default Item