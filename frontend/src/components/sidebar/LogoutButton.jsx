import { RiLogoutCircleLine } from "react-icons/ri";
import React from 'react';
import useLogout from "../../hooks/useLogout";

// functional component for a logout button
const LogoutButton = () => {
  // hook to manage logout logic and loading state
  const { loading, logout } = useLogout();
  
  return (
    <div className='mt-auto items-center'>
      {/* display logout icon if not loading, otherwise show a loading spinner */}
      {!loading ? (
        <RiLogoutCircleLine
          className='w-5 h-5 text-amber-700 cursor-pointer'
          onClick={logout} // trigger logout function on click
        />
      ) : (
        <span className='loading loading-spinner'></span> // display spinner during loading
      )}
    </div>
  );
}

export default LogoutButton;
