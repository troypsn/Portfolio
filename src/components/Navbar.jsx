import React from 'react'
import dayjs from 'dayjs';

import { navLinks } from '../constants';



function Navbar() {


  return ( 
  <nav>
    <div className="flex flex-row gap-10 ">
      <p className="font-bold ml-5">Troy's Portfolio</p>
      <ul className="flex flex-row gap-5" >
          {navLinks.map((navLink) => (
            <li key={navLink.id}>{navLink.name}</li>
          ))}
      </ul>
    </div>
    <div></div>
    <div className="mr-5">
      <time>{dayjs().format(`MM ${"-"} DD ${"-"} YYYY h:mm A`)}</time>
    </div>
  </nav>
  )
}

export default Navbar;