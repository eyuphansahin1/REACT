import React from 'react'
import NavbarLeft from './navbarItem/NavbarLeft'
import NavbarRight from './navbarItem/NavbarRight'
function Navbar() {
  return (
    <div className=' flex items-center  justify-between my-5 border rounded-lg shadow-md p-4 px-6'>
      <NavbarLeft/>
      <NavbarRight/>
    </div>
  )
}

export default Navbar