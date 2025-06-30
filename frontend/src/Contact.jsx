// import React, { useState,useEffect } from "react";
import { motion } from 'framer-motion'
function Contact() {
  
  return (
        <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
        <div className="bg-white px-10 py-16 lg:flex lg:justify-between lg:items-start rounded-sm m-8">
      {/* Left: Contact Info */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-gray-400 text-5xl font-light">Contact</h1>
        <h2 className="text-black text-5xl font-bold mb-6">Information</h2>

        <p className="font-semibold">Company Name</p>
        <p className="text-sm mb-4">1234 Sample Street, Austin Texas 76401</p>

        <p className="font-bold text-lg mb-2">512.333.2222</p>
        <p className="text-sm mb-6">sampleemail@gmail.com</p>

        <button className="bg-black text-white px-6 py-3 text-sm tracking-wide uppercase">
          Contact Us
        </button>
      </div>

      {/* Right: Map Image */}
      <div className="lg:w-1/2">
        <img
          src="/image 14.png" // Replace with your actual image path
          alt="Map"
          className="w-full h-auto object-cover border border-gray-300"
        />
      </div>
    </div>
    </motion.div>
    
  );
}

export default Contact;
