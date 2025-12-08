import { FaHome, FaPhone, FaCoffee } from "react-icons/fa";
import { MdMenu, MdInfo } from "react-icons/md";
import React from 'react'


const Header = () => {
  return (
    <header>
      <h2>Coffee Shop </h2>
      <ul>
      <li class="li"><span class="Home"><FaHome /></span> Home</li>
      <li class="li"><span class="Info"><MdInfo /></span> About</li>
      <li class="li"><span class="Phone"><FaPhone /></span> Contact</li>
      <li class="li"><span class="Coffee"><FaCoffee /></span> Menu</li>
    </ul>
    </header>
  )
}

export default Header




