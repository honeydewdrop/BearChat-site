import { RiLogoutCircleLine } from "react-icons/ri";
import React from 'react'

const LogoutButton = () => {
  return (
    <div className='mt-auto items-center'>
        <RiLogoutCircleLine className='w-5 h-5 text-amber-700 cursor-pointer'/>
    </div>
  )
}

export default LogoutButton