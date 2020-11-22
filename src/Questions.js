import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ title, info }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={`mt-3 rounded-lg border-2 border-gray-200  p-4 ${
          isOpen && "shadow-lg"
        }`}
      >
        <div className="flex justify-between items-center">
          <h4 className="text-gray-800 tracking-wider font-semibold">
            {title}
          </h4>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        {isOpen && (
          <p className={`text-gray-600 leading-6 tracking-wide text-sm mt-2 transition duration-500 ease-in-out`}>
            {info}
          </p>
        )}
      </div>
    </div>
  );
};

export default SingleQuestion;
