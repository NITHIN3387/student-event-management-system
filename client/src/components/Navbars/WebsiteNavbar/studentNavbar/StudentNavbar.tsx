import React, { FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import sahyadriLogo from"@/assets/images/sahyadri-logo.png"
const StudentNavbar: FC = (): JSX.Element => {
  return (
    <div className='hidden md:flex justify-between pe-4 h-[5rem]  items-center bg-gray-900 '>
     <Image src={sahyadriLogo}
     alt='logo'
     width={60}
     height={60}
     />
     <div className='flex xl:gap-[2rem] lg:gap-[1.75rem] gap-[1rem] items-center'>

     </div>
    </div>
    
  )
}

export default StudentNavbar