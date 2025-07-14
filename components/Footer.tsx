// "use client"
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
<div className='w-full absolute left-0 bottom-0 min-h-96 '>
    <Image src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-50' width={100} height={100} />
</div>
<div className='flex flex-col items-center justify-center container'>
    <h1 className='heading !text-2xl md:!text-4xl lg:!text-5xl'>
        Ready to take <span className='text-[#f5b17b]'>your</span> digital presence to the next level?
    </h1>
    <p className='text-white-200 md:mt-10 my-5 text-center'>
        Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>
    <a href="mailto:mdasad.mash@gmail.com">
        <MagicButton
        title='Let&apos;s get in touch'
        icon={<FaLocationArrow/>}
        position='right'
        />
    </a>
</div>

<div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
    <p className='md:text-base text-sm md:font-normal font-light'> © 2025 asadmash</p>

   
</div>
    </footer>
  )
}

// export default Footer