/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from 'next/image'
import React from 'react'

const Card = ({ item }: any) => {
  return (
    <div className='h-80 rounded-xl relative overflow-hidden group scale-100 hover:scale-105 transition-all duration-500 shadow-xl border border-black/10 max-w-xl w-full'>
      <Image src={item.image} alt={item.name} fill className='z-10' />
      <div className='group-hover:flex hidden flex-col gap-8 absolute z-20 justify-center items-center top-0 bottom-0 w-full hover:backdrop-blur-sm hover:bg-black/30'>
        {/* <a href='https://github.com/rohitbkanish8/hulu_rohit_clone' target='_blank' rel='noreferrer' className="w-fit rounded-md bg-gradient-to-r from-green-400 from-lime-800 px-4 py-2 font-medium text-white duration-300 ease-in hover:scale-105">
          Code
        </a> */}
        {/* <h1 className='font-bold text-2xl'>{item.title}</h1> */}
        <a href={item.link} target='_blank' rel='noreferrer' className="w-fit rounded-md bg-gradient-to-r from-green-400 from-lime-800 px-4 py-2 font-medium text-white duration-300 ease-in hover:scale-105">
          View
        </a>
      </div>
    </div>
  )
}

export default Card