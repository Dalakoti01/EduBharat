"use client";
import { StarIcon } from "lucide-react";

/**
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.location
 * @param {string} props.image
 * @param {string} props.quote
 * @param {number} props.rating
 */
const TestimonialCard = ({
  name,
  location,
  image,
  quote,
  rating,
}) => {
  return (
    <div className="bg-[#F5F5DC] p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-[#059669]"
        />
        <div className="ml-4">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-600 text-sm">{location}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4 italic">"{quote}"</p>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-[#F97316] fill-[#F97316]' : 'text-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;