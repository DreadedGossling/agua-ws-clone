"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';

const Nav = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className='bg-[#12130f] top-0 sticky z-50 py-4 px-4 '>

      <div className='my-auto md:hidden flex justify-between'>
        <img src="aguaws.png" alt="aguaws" />

        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuIcon className='text-white mr-6'></MenuIcon>
        </Button>
        <Menu
          anchorEl={anchorEl}
          className='-ml-8'
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem>
            <Link
              href={'#'}
              className='hover:text-[#5cbbdd] no-underline text-black text-xs font-semibold'>
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href={'#'}
              className='hover:text-[#5cbbdd] no-underline text-black text-xs font-semibold'>
              About Us
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href={'/#'}
              className='hover:text-[#5cbbdd] no-underline text-black text-xs font-semibold'>
              Features
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href={'/#'}
              className='hover:text-[#5cbbdd] no-underline text-black text-xs font-semibold'>
              FAQ
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href={'/#'}
              className='hover:text-[#5cbbdd] no-underline text-black text-xs font-semibold'>
              Contact Us
            </Link>
          </MenuItem>
          <MenuItem>
              <Link
                href={"/appointment-form"}
                className=' p-2 capitalize text-black bg-white border border-black hover:bg-green-600 hover:text-white rounded-none font-semibold text-xs'>
                Book a demo
              </Link>
            </MenuItem>

        </Menu>
      </div>




      <div className='md:flex justify-between hidden md:px-8 xl:px-40 2xl:px-[335px]'>
        <img src="aguaws.png" alt="aguaws" />

        <div>
          <ul className='mt-8 flex text-white font-bold md:gap-x-3 lg:gap-x-8'>
            <li className='hover:text-[#5cbbdd]'>Home</li>
            <li className='hover:text-[#5cbbdd]'>About Us</li>
            <li className='hover:text-[#5cbbdd]'>Features</li>
            <li className='hover:text-[#5cbbdd]'>FAQ</li>
            <li className='hover:text-[#5cbbdd]'>Contact Us</li>
            <button
              className='bg-white text-black rounded-sm p-2 px-6 -mt-2 hover:bg-green-600 hover:text-white transition hover:duration-300 ease-in-out '>
              Book a demo
            </button>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Nav
