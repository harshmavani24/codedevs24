import { FaLeaf, FaFlask, FaWater } from 'react-icons/fa';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const SoilImprove = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}  // Initial state
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}  // Animation based on visibility
      transition={{ duration: 0.6 }}   // Animation duration
    >
    <section id="soil-improvement" className="container mx-auto mb-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-[#67AD5B] mb-6">Soil Improvement</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="bg-white bg-opacity-30 backdrop-blur-md border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <FaLeaf className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-[#67AD5B] mb-2">Organic Matter</h3>
          <p className="text-gray-700 mb-4">Increasing organic matter in your soil is crucial for improving fertility. We recommend:</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Adding compost or well-rotted manure</li>
            <li>Planting cover crops to build soil organic matter</li>
            <li>Reducing tillage to preserve existing organic matter</li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-30 backdrop-blur-md border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <FaFlask className="text-4xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold text-[#67AD5B] mb-2">Soil Testing</h3>
          <p className="text-gray-700 mb-4">Regular soil testing helps in understanding soil conditions. We recommend:</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Testing soil every 2-3 years</li>
            <li>Adjusting soil amendments based on test results</li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-30 backdrop-blur-md border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <FaWater className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-[#67AD5B] mb-2">Water Management</h3>
          <p className="text-gray-700 mb-4">Proper water management is essential for soil health. We recommend:</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Implementing efficient irrigation systems</li>
            <li>Avoiding over-watering to prevent soil erosion</li>
            <li>Using mulch to retain soil moisture</li>
          </ul>
        </div>
        
      </div>
    </section>
    </motion.div>
  );
}

export default SoilImprove;