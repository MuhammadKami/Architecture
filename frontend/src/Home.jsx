import { motion } from "framer-motion";
import { useState } from "react";
export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on typing
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.interest.trim()) newErrors.interest = "Interest is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      formData.name = "";
      formData.email = "";
      formData.interest = "";
      formData.message = "";
      formData.phone = "";
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };
  return (
    <>
      {/* Project Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 m-8"
      >
        <div className="lg:w-3/4 lg:mt-20">
          <div className="mt-20 ml-20">
            <h1 className="text-gray-300 text-5xl">PROJECT</h1>
            <h1 className="font-bold text-5xl">DesignLayer</h1>

            <div className="mt-20 flex items-center gap-4">
              <span className="text-2xl bg-white px-3 py-1 cursor-pointer border border-gray-400 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-110">
                ←
              </span>
              <span className="text-2xl bg-white px-3 py-1 cursor-pointer border border-gray-400 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-110">
                →
              </span>
            </div>

            <div className="mt-20 flex items-center gap-4 text-gray-400 text-2xl">
              <span>01</span>
              <span>/</span>
              <span>02</span>
            </div>
          </div>
        </div>
        <div
          className="mr-20 bg-cover bg-center h-[629px] transition-all duration-700 ease-in-out"
          style={{ backgroundImage: "url('/Rectangle 6.png')" }}
        ></div>
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="lg:grid lg:grid-cols-2 grid-cols-1 bg-[#C4C4C4] m-10 rounded-md"
      >
        <div className="grid grid-cols-2 gap-8 m-8 mt-10">
          <div className="grid grid-rows-2 gap-5 items-center">
            <img
              src="/Rectangle 8.png"
              alt=""
              className="w-60 transition-transform duration-300 hover:scale-105"
            />
            <img
              src="/Rectangle 10.png"
              alt=""
              className="w-60 transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex items-center">
            <img
              src="/Rectangle 9.png"
              alt=""
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        <div className="m-8 mt-12">
          <h1 className="text-gray-300 text-[50px]">About</h1>
          <p className="tracking-wide mt-5 text-start">
            At projects, we believe architecture is more than just buildings —
            it’s about creating spaces that inspire, connect, and endure...
          </p>
          <button className="px-5 py-2 bg-white mt-8 transition-all duration-300 hover:bg-gray-200 flex items-center gap-1 group mb-5">
            Read more
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-gray-300 text-[50px] m-8">
          Main Focus/Mission Statement
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {[1, 2].map((num) => (
            <div
              key={num}
              className="flex justify-center items-center m-8 gap-8"
            >
              <h1 className="text-gray-300 text-[120px] bg-[#C4C4C4] font-bold px-6 py-2 rounded transition-transform duration-300 hover:scale-110">
                {num}
              </h1>
              <p>
                We believe great architecture shapes the way people experience
                the world... (mission content)
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Our Projects */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="m-8"
      >
        <h1 className="text-gray-500 text-[50px] mx-8 font-thin">
          Our Projects
        </h1>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-cover bg-center text-white h-[300px] transition-transform duration-500 hover:scale-105 flex flex-col justify-center"
              style={{ backgroundImage: "url('/Rectangle 17.png')" }}
            >
              <h1 className="ml-20 pt-10 text-5xl font-bold leading-snug">
                Sample
                <br />
                Projects
              </h1>
              <p className="ml-20 mt-6 text-lg">View More →</p>
            </div>
            <img
              src="/image 15.png"
              alt="Project Preview"
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {["18", "16", "17"].map((img, i) => (
              <img
                key={i}
                src={`/image ${img}.png`}
                alt={`Sample ${i + 1}`}
                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end items-center">
          <button className="mt-4 bg-black text-white px-6 py-3 flex items-center gap-2 text-sm tracking-wide transition-all duration-300 hover:bg-gray-800 group">
            View All Projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </motion.div>

      {/* Contact Us */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white px-8 py-16 lg:flex lg:justify-between lg:items-center m-8 rounded-sm"
      >
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-[60px] text-gray-400 font-light mb-8">
            Contact Us
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-100 px-4 py-2 outline-none transition-all duration-200 focus:ring-2 focus:ring-black"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-100 px-4 py-2 outline-none transition-all duration-200 focus:ring-2 focus:ring-black"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-100 px-4 py-2 outline-none transition-all duration-200 focus:ring-2 focus:ring-black"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="interest"
                placeholder="Interested In"
                value={formData.interest}
                onChange={handleChange}
                className="w-full bg-gray-100 px-4 py-2 outline-none transition-all duration-200 focus:ring-2 focus:ring-black"
              />
              {errors.interest && (
                <p className="text-red-500 text-sm">{errors.interest}</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message*"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-100 px-4 py-2 outline-none transition-all duration-200 focus:ring-2 focus:ring-black"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="mt-4 bg-black text-white px-6 py-3 flex items-center gap-2 text-sm tracking-wide transition-all duration-300 hover:bg-gray-800 group"
            >
              SEND EMAIL
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>
        </div>

        <div className="lg:w-1/2">
          <img
            src="/image 12.png"
            alt="Contact"
            className="w-full h-auto  object-cover rounded transition-transform duration-500 hover:scale-105 ml-5 mt-15"
          />
        </div>
      </motion.div>
    </>
  );
}
