import { FaLeaf, FaSprayCan, FaRecycle } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const FertilizerPesticide = () => {
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
    <section id="fertilizer-pesticide" className="container mx-auto mb-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-[#67AD5B] mb-6">Fertilizer & Pesticide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="bg-white bg-opacity-30 backdrop-blur-md border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <FaLeaf className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-[#67AD5B] mb-2">Fertilizer Recommendations</h3>
          <p className="text-gray-700 mb-4">Based on your soil nutrient levels, we recommend using:</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Nitrogen-Phosphorus-Potassium (N-P-K) ratio of 10-10-10</li>
            <li>Apply at a rate of 200 lbs per acre</li>
            <li>Apply before planting and again mid-season</li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-30 backdrop-blur-md border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <FaSprayCan className="text-4xl text-red-500 mb-4" />
          <h3 className="text-xl font-semibold text-[#67AD5B] mb-2">Pesticide Recommendations</h3>
          <p className="text-gray-700 mb-4">To control pests and diseases in your crops, we recommend:</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Organic insecticide: Neem oil</li>
            <li>Fungicide: Copper-based fungicide</li>
            <li>Apply according to product instructions</li>
          </ul>
        </div>

        <div className="bg-white bg-opacity-30 backdrop-blur-md border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <FaRecycle className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-[#67AD5B] mb-2">Sustainable Practices</h3>
          <p className="text-gray-700 mb-4">To promote long-term soil health, we recommend:</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Using integrated pest management (IPM)</li>
            <li>Applying fertilizers and pesticides responsibly</li>
            <li>Reducing chemical use and opting for organic alternatives</li>
          </ul>
        </div>
        
      </div>
    </section>
    </motion.div>
  );
}
export default FertilizerPesticide;