import React, { FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

<<<<<<< HEAD
import sahyadriLogo from"@/assets/images/sahyadri-logo.png"
const StudentNavbar: FC = (): JSX.Element => {
  return (
    <div className='hidden md:flex justify-between pe-4 h-[5rem]  items-center bg-gray-900 '>
     <Image src={sahyadriLogo}
     alt='logo'
     width={60}
     height={60}
     />
    </div>
=======

const StudentNavbar: FC = (): JSX.Element => {
  return (
    <div className='hidden md:flex justify-between pe-4 h-[5rem]  items-center bg-gray-900 '></div>
>>>>>>> spoorthi
  )
}

export default StudentNavbar