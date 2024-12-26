import { Footer } from 'flowbite-react'
import React from 'react'
import { Company_Name, Logo } from '../const/Const'
function MyFooter() {
  return (
    <div>
       <Footer container className="border-t">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src={Logo}
            alt={Company_Name}
            name={Company_Name}
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by={Company_Name} year={2022} />
      </div>
    </Footer>

    </div>
  )
}

export default MyFooter
