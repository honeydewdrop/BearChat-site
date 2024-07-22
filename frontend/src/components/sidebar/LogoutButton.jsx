import { RiLogoutCircleLine } from "react-icons/ri";
import React from 'react'
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const {loading,logout} = useLogout();
  return (
    <div className='mt-auto items-center'>
        {!loading? ( <RiLogoutCircleLine className='w-5 h-5 text-amber-700 cursor-pointer'
        onClick={logout}
        />
      ) : (
          <span className= 'loading loading-spinner'></span>
        )}
    </div>
  )
}

export default LogoutButton