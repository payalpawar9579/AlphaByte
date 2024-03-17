import React from 'react';

interface CardProps {
  heading: string;
  img: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ heading, img, description }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-md w-full mt-6 p-4 lg:mt-0 lg:w-80">
        <img src={img} alt="" className="rounded-t-2xl shadow-2xl w-full h-60 object-cover lg:h-44" />
        <div className="bg-white shadow-2xl rounded-b-3xl p-6 lg:p-10">
          <h2 className="text-center text-gray-800 text-xl lg:text-2xl font-bold mb-4">{heading}</h2>
          <p className="text-center text-gray-500">{description}</p>
          <div className="flex justify-center mt-6">
            <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-500">Proceed to Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
