import { useState } from 'react';

const cropRecommendations = {
  recommendedCrops: [
    'Corn', 'Wheat', 'Soybeans', 'Barley', 'Oats'
  ],
  cropSuitability: [
    'Tomatoes', 'Peppers', 'Lettuce', 'Spinach', 'Cucumbers'
  ],
  cropRotation: [
    'Legumes', 'Grains', 'Root Crops', 'Cover Crops'
  ]
};

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Crop = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });
  const [activeTab, setActiveTab] = useState<'recommended' | 'suitability' | 'rotation'>('recommended');

  const handleTabChange = (tab: 'recommended' | 'suitability' | 'rotation') => {
    setActiveTab(tab);
  };

  const renderCropList = (crops: string[]) => (
    <div className="flex flex-wrap gap-4 justify-center">
      {crops.map((crop) => (
        <button key={crop} className="bg-white text-green-500 border border-gray-300 rounded-lg px-4 py-2 shadow-md hover:bg-green-50 transition-colors duration-300 text-sm sm:text-base">
          {crop}
        </button>
      ))}
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}  // Initial state
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}  // Animation based on visibility
      transition={{ duration: 0.6 }}   // Animation duration

    >
    <section id="crop-recommendations" className="container mx-auto mb-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-[#67AD5B] my-4 text-center sm:text-left">Crop Recommendations</h2>
      <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-4 border border-gray-300">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button
            onClick={() => handleTabChange('recommended')}
            className={`px-4 py-2 rounded-lg border border-gray-300 font-medium ${activeTab === 'recommended' ? 'bg-[#67AD5B] text-white' : 'bg-gray-100 text-gray-700'} transition-colors duration-300 text-sm sm:text-base`}
          >
            Recommended Crops
          </button>
          <button
            onClick={() => handleTabChange('suitability')}
            className={`px-4 py-2 rounded-lg border border-gray-300 font-medium ${activeTab === 'suitability' ? 'bg-[#67AD5B] text-white' : 'bg-gray-100 text-gray-700'} transition-colors duration-300 text-sm sm:text-base`}
          >
            Crop Suitability
          </button>
          <button
            onClick={() => handleTabChange('rotation')}
            className={`px-4 py-2 rounded-lg border border-gray-300 font-medium ${activeTab === 'rotation' ? 'bg-[#67AD5B] text-white' : 'bg-gray-100 text-gray-700'} transition-colors duration-300 text-sm sm:text-base`}
          >
            Crop Rotation
          </button>
        </div>
        <div className="mt-4">
          {activeTab === 'recommended' && (
            <>
              <p className="text-gray-700 mb-4 text-center sm:text-left">
                Based on your soil conditions, the following crops are recommended for optimal growth and yield. These crops are selected to match your soil's fertility and structure.
              </p>
              {renderCropList(cropRecommendations.recommendedCrops)}
            </>
          )}
          {activeTab === 'suitability' && (
            <>
              <p className="text-gray-700 mb-4 text-center sm:text-left">
                These crops are particularly suited for your area considering local climate and environmental conditions. Selecting suitable crops ensures better adaptation and productivity.
              </p>
              {renderCropList(cropRecommendations.cropSuitability)}
            </>
          )}
          {activeTab === 'rotation' && (
            <>
              <p className="text-gray-700 mb-4 text-center sm:text-left">
                Implementing crop rotation helps in maintaining soil health and fertility. Here are some effective crop rotation strategies to enhance soil structure and nutrient balance.
              </p>
              {renderCropList(cropRecommendations.cropRotation)}
            </>
          )}
        </div>
      </div>
    </section>
    </motion.div>
  );
}

export default Crop;