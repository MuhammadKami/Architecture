import React from 'react'
import { motion } from 'framer-motion'
function Certification() {
  return (
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  viewport={{ once: true }}
>
        <div className="m-20">
      <h1 className="text-gray-400 text-5xl font-thin">Company</h1>
      <h1 className="font-bold text-5xl tracking-wide">Certifications</h1>
     <div className="bg-gray-100 py-12 px-6 md:px-20 rounded-lg mt-20">
  <div className="max-w-6xl mx-auto ">
    {/* Cards Container */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow-md border-t-4 border-black-500 p-6 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          ISO 9001: Quality Management
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Our firm is ISO 9001 certified, ensuring that we consistently meet client expectations and regulatory requirements. This certification guarantees strong process management and continuous improvement in every project we undertake.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-md border-t-4 border-black-500 p-6 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          LEED Gold Certification
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          We are proud to have LEED Gold Certified projects under our portfolio, reflecting our dedication to sustainable architecture and energy-efficient design. These buildings promote environmental health and occupant well-being.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow-md border-t-4 border-black-500 p-6 hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Autodesk Certified Professionals
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Our design team holds official certifications in AutoCAD and Revit, equipping us with the advanced tools and technical precision required to bring innovative architectural concepts to life.
        </p>
      </div>

    </div>
  </div>
</div>

      </div>
      </motion.div>
  )
}

export default Certification