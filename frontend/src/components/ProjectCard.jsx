import React from 'react';

const ProjectCard = ({ image, title, description, buttonText }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-md overflow-hidden mt-10">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-light text-gray-500 mb-4">{title}</h2>
        <p className="text-sm text-gray-600 mb-6">
          {description}
        </p>
        <button className="w-fit px-6 py-3 text-sm text-gray-600 border tracking-wide border-gray-200 hover:bg-gray-100 transition-all duration-200">
          {buttonText} →
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
