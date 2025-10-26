// import { Card } from "daisyui"; // daisyUI provides nice card styling, optional
// You can import icons from react-icons
import React from "react";

const ServiceCard = ({ service }) => {
  const { icon: Icon, title, description } = service;
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
      <div className="text-4xl text-blue-600 mb-3">
        <Icon />
      </div>
      <h3 className="text-lg text-primary font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
