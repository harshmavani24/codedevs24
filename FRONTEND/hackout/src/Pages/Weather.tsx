import { Card, CardHeader, CardContent, CardTitle } from './Card';
import { WiThermometer, WiRaindrop, WiHumidity, WiStrongWind } from 'react-icons/wi';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Weather = () => {
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
    <section id="weather" className="container mx-auto mb-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-[#67AD5B] my-6">Weather</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border border-gray-300 bg-white bg-opacity-60 backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center">
          <CardHeader>
            <div className="flex items-center mb-2">
              <WiThermometer className="text-3xl text-red-500" />
              <CardTitle className="text-xl">Temperature</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-center">
          <div className='flex flex-col items-center'>
            <p className="text-3xl font-bold">22°C</p>
            <p className="text-sm">High: 25°C</p>
            <p className="text-sm">Low: 18°C</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-300 bg-white bg-opacity-60 backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center">
          <CardHeader>
            <div className="flex items-center mb-2">
              <WiRaindrop className="text-3xl text-blue-500" />
              <CardTitle className="text-xl">Precipitation</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-center flex flex-col items-center">
            <div className='flex flex-col items-center'>
            <p className="text-3xl font-bold">40%</p>
            <p className="text-sm">Rainfall: 5mm</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-300 bg-white bg-opacity-60 backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center">
          <CardHeader>
            <div className="flex items-center mb-2">
              <WiHumidity className="text-3xl text-green-500" />
              <CardTitle className="text-xl">Humidity</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-center p-4">
          <div className='flex flex-col items-center'>
            <p className="text-3xl font-bold">65%</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-300 bg-white bg-opacity-60 backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center">
          <CardHeader>
            <div className="flex items-center mb-2">
              <WiStrongWind className="text-3xl text-gray-500" />
              <CardTitle className="text-xl">Wind</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center">
          <div className='flex flex-col items-center'>
            <p className="text-3xl font-bold">10 km/h</p>
            <p className="text-sm">Direction: NW</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
    </motion.div>
  );
}

export default Weather;