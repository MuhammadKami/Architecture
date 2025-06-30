import React from 'react'
import { motion } from 'framer-motion'
function Gallery() {
  return (
   <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <div className="m-20">
  <h1 className="text-gray-400 text-5xl font-thin">Photo</h1>
  <h1 className="font-bold text-5xl tracking-wide">Gallery</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
    {[22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((num, i) => (
      <img
        key={i}
        src={`/Rectangle ${num}.png`}
        alt={`Gallery ${num}`}
        className="w-full h-auto object-cover rounded shadow transition-transform duration-300 hover:scale-105"
      />
    ))}
  </div>
    <div className="mt-20 flex items-center gap-4">
          <span className="text-2xl bg-white px-3 py-1 cursor-pointer border border-gray-400 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-110">
            &#8592;
          </span>
          <span className="text-2xl bg-white px-3 py-1 cursor-pointer border border-gray-400 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-110">
            &#8594;
          </span>
        </div>
</div>
</motion.div>

  )
}

export default Gallery