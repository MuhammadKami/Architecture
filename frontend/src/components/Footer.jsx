import React from 'react'
import './nav.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white py-10 px-4 md:px-16 bottom-0">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="text-sm mt-5 logo">DIGITAL PROJECTS</div>
    <div>
      <h2 className="lg:text-2xl text-base font-semibold lg:mb-4 mb-2">Information</h2>
      <ul className="space-y-2  lg:text-base text-xs">
        <li><a href="#" className="hover:text-white  ml-2">Main</a></li>
        <li><a href="#" className="hover:text-white  ml-2">Gallery</a></li>
        <li><a href="#" className="hover:text-white  ml-2">Project</a></li>
        <li><a href="#" className="hover:text-white  ml-2">Certifications</a></li>
        <li><a href="#" className="hover:text-white  ml-2">Contact</a></li>
      </ul>
    </div>


    <div className="sm:col-span-2 lg:col-span-1">
      <h2 className="lg:text-2xl  font-semibold mb-4">Contact</h2>
      <ul className="space-y-2 lg:text-sm text-xs">
        <li className='lg:mb-8'>📍 1234 Sample Street, Austin Texas 1234</li>
        <li className='lg:mb-5'>📞 +1 123 456 0000</li>
        <li>📧 sampleemail@gmail.com</li>
      </ul>
    </div>


    <div>
      <h2 className="lg:text-lg font-semibold mb-4">Social Media</h2>
     <div className="flex gap-4 text-gray-500 text-xl">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="hover:text-blue-600 transition" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="hover:text-sky-500 transition" />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn className="hover:text-blue-800 transition" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="hover:text-pink-500 transition" />
  </a>
</div>
    </div>

  </div>
   
  <div className="mt-10 text-center text-sm text-gray-500 flex justify-center items-center ">
   <p className='border-t-1'> © 2025 All Rights Reserved</p>
  </div>
</footer>

  )
}

export default Footer