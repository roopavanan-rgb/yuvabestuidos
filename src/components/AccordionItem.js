// AccordionItem.js
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AccordionItem({ category, title, focus, experience, details }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden mb-4">
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-white hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <span className="bg-purple-200 text-purple-800 rounded px-2 py-1 text-sm font-semibold">
            {category}
          </span>
          <h3 className="text-lg font-semibold text-gray-900 mt-2">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">Focus: {focus}</p>
        </div>
        <div className="text-sm text-purple-800">{experience}</div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-purple-50 p-4 text-gray-800"
        >
          <h4 className="font-semibold">Description:</h4>
          <p className="mt-2">{details.description}</p>

          <h4 className="font-semibold mt-4">Key Responsibilities:</h4>
          <ul className="list-disc ml-6 mt-2">
            {details.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4 className="font-semibold mt-4">Requirements:</h4>
          <ul className="list-disc ml-6 mt-2">
            {details.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4 className="font-semibold mt-4">Benefits:</h4>
          <ul className="list-disc ml-6 mt-2">
            {details.benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}
