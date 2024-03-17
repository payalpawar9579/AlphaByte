import React from 'react';
import Lottie from 'react-lottie'; // Import the Lottie component
import animationData from '../assets/Animation - 1710524408585.json';// Import your Lottie animation JSON file

const Herosection = () => {
  // Define the options for the Lottie animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData // Pass the imported animationData
  };

  return (
    <div className='flex flex-col lg:flex-row items-center justify-center'>
      {/* Left section */}
      <div className='flex  flex-col  items-center mb-4 lg:mb-0 lg:mr-4 justify-start lg:flex-col '>
        <h1 className='text-center lg:text-left lg:pl-5 text-3xl lg:text-5xl font-bold font-poppins lg:ml-[200px] mt-5 justify-start'>
          THE FOREFRONT OF <span className='text-blue-500'>TALENT ACQUISITION</span>
        </h1>
        <p className="text-center lg:text-left  text-lg font-medium text-gray-600 mt-2 justify-end px-3 ">
          Elevating your recruitment experience with innovative solutions.
        </p>
        <div className="mt-4 flex justify-center lg:justify-start">
          <button className="bg-white text-gray-800 px-6 py-3 rounded-full shadow-lg mr-4">Enroll</button>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg">About Us</button>
        </div>
      </div>

      {/* Right section with Lottie animation */}
      <div className='flex lg:ml-auto justify-center pt-3 pr-2 lg:w-[1500px]'>
        {/* Render the Lottie animation */}
        <Lottie
          options={defaultOptions} // Pass the animation options
          // Specify different widths for small screens and laptops
        />
      </div>
      
    </div>
    
  );
};

export default Herosection;