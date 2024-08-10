import { Card, CardHeader, CardContent, CardTitle } from './Card';
import { FaLeaf, FaWater, FaSeedling } from 'react-icons/fa';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const SoilFertility = () => {
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
      className="mt-12"
    >
    <section id="soil-fertility" className="container mx-auto mb-12 px-4 md:px-8 w-full">
      <h2 className="text-3xl font-bold text-[#67AD5B] animate-fade-in-up my-4">Soil Fertility</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border border-gray-300 bg-white bg-opacity-30 backdrop-blur-md animate-fade-in-up p-4">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <FaLeaf className="text-[#67AD5B] text-2xl" />
              <CardTitle>Soil Composition</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Your soil is composed of:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>45% Sand</li>
              <li>35% Silt</li>
              <li>20% Clay</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="border border-gray-300 bg-white bg-opacity-30 backdrop-blur-md animate-fade-in-up p-4">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <FaWater className="text-[#67AD5B] text-2xl" />
              <CardTitle>Nutrient Levels</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Your soil has the following nutrient levels:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Nitrogen: 20 ppm</li>
              <li>Phosphorus: 15 ppm</li>
              <li>Potassium: 180 ppm</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="border border-gray-300 bg-white bg-opacity-30 backdrop-blur-md animate-fade-in-up p-4">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <FaSeedling className="text-[#67AD5B] text-2xl" />
              <CardTitle>Recommendations</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">To improve your soil fertility, we recommend:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Adding compost to increase organic matter</li>
              <li>Applying a balanced fertilizer with N-P-K ratio of 10-10-10</li>
              <li>Rotating your crops to maintain nutrient balance</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
    </motion.div>
  );
}

export default SoilFertility;