"use client"
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from './item';

const testimonials = [
  {
    name: "Lokesh pancholi",
    designation: "Design manager",
    description: "​Ashirwad by Ali Axis R&T Centre is associated with Agua Wireless for quite some now and we are working together on some cutting-edge technology projects.  Rohit and Kanish are really great and thorough professionals. We look forward to working with Agua on more projects creating meaningful solutions for our customers.",
    image: "/ashirvad.png"
  },
  {
    name: "Dharma Krishnappa",
    designation: "Director",
    description: "We deployed Agua's flow sensor in a residential apartment three years back. They have helped us with accurate billing of every house. These systems have not caused any malfunction till date.",
    image: "/dharma.png"
  },
  {
    name: "Mayank",
    designation: "Manager",
    company: "Drugvilla Pharmacy",
    description: "The water machine alarm system is working absolutely fine and it's really working well. It was installed in 2019 and since then we have not faced any issues in terms of functionality.",
    image: "/dharma.png"
  }
]

const TestimonialItems = () => {

  return (
    <div className='w-[700px]'>
      <Carousel className='py-4 px-2'>
        {
          testimonials.map((item, i) => <Item key={i} item={item} />)
        }
      </Carousel>
    </div>
  )
}

export default TestimonialItems