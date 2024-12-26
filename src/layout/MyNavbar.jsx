import { Navbar } from 'flowbite-react'
import React from 'react'
import { Company_Name, Logo } from '../const/Const'

function MyNavbar() {
  return (
    <>
    <Navbar fluid rounded border>
      <Navbar.Brand href="/">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt={Company_Name} />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          {Company_Name}
        </span>
      </Navbar.Brand>
    </Navbar>
  </>
  )
}

export default MyNavbar
