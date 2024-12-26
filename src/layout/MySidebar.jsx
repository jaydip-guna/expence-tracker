import React from 'react'
import { Link } from 'react-router-dom'
const links=[
  {name:"Dashboard",to:"/"},
  {name:"Add transaction",to:"/transction/add "},
  {name:"Report",to:"/Report"},
]
function MySidebar() {
  return (
    <div className='border-r border-r-gray-300'>
      <ul>
        {
          links.map((value)=>{
            return(
              <li>
                <Link to={value.to} className='block p-4 border-b border-b-gray-300 hover:text-primary'>{value.name}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default MySidebar
