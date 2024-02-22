import React,{useRef} from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import sahyadriLogo from '@/assets/images/sahyadri-logo.png'



const Navbar = () => {
  return (
    <div className='hidden md:flex justify-between pe-4 h-[5rem] items-center bg-blue-900'>
          <Image
          src={sahyadriLogo}
          height={60}
          width={60}
          alt="Logo"
          className="lg:pb-10"
          priority
        />

     

    </div>
  )
}

export default Navbar