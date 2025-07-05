"use client";
import { BookOpenIcon, ClockIcon, TagIcon } from "lucide-react";

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.image
 * @param {string} props.price
 * @param {string} props.category
 * @param {string} props.duration
 * @param {() => void} props.onEnroll
 */
const CourseCard = ({
  title,
  description,
  image,
  price,
  category,
  duration,
  onEnroll,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="bg-[#8B5CF6] text-white text-xs px-2 py-1 rounded-full">
            {category}
          </span>
          <span className="ml-2 flex items-center text-gray-500 text-sm">
            <ClockIcon className="h-4 w-4 mr-1" /> {duration}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm h-20 overflow-hidden">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[#059669] font-bold text-lg">{price}</span>
          <button
            onClick={onEnroll}
            className="bg-[#F97316] hover:bg-orange-600 text-white px-4 py-2 rounded font-medium text-sm"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;