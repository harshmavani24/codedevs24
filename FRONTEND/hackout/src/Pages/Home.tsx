import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners'; // Import the spinner

function HomePage() {
  const [location, setLocation] = useState('');
  const [dataFetched, setDataFetched] = useState(false);
  const [locationData, setLocationData] = useState<{ latitude: string, longitude: string, address: string } | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [isInputValid, setIsInputValid] = useState(true); // State for input validation
  const [error, setError] = useState<string | null>(null); // State for error message
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLocation(value);
    setIsInputValid(value.trim() !== ''); // Validate input
    setError(null); // Clear error message on input change
  };

  const handleSearch = () => {
    if (!isInputValid) {
      setError('Please input something'); // Set error message if input is invalid
      return; // Prevent search if input is invalid
    }

    // Simulate a backend call to fetch location data
    setTimeout(() => {
      setLocationData({
        latitude: '37.7749', // Example latitude
        longitude: '-122.4194', // Example longitude
        address: 'San Francisco, CA' // Example address
      });
      setDataFetched(true);
    }, 1000);
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      navigate('/result'); // Replace with your actual route
    }, 2000); // Adjust the delay as needed
  };

  return (
    <div className="flex flex-col min-h-screen justify-between items-center text-gray-900 relative">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-5 bg-white">
        <div className="flex items-center">
          <img src="leaf.png" alt="Logo" className="w-10 h-10 mr-3 ml-5" />
          <h1 className="text-2xl font-bold text-[#67AD5B] header-font">AgroInsight</h1>
        </div>
        <div className="text-lg font-semibold text-[#67AD5B] ml-auto mr-5">
          HackOut 24
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow w-full px-4">
        <div className="relative p-12 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg text-center max-w-xl w-full border border-[#67AD5B]">
          <h2 className="text-4xl font-semibold mb-4 text-[#67AD5B] header-font">Welcome to AgroInsight</h2>
          <p className="text-lg mb-6 text-gray-500 body-font">Find the best crop suggestions and more.</p>

          {/* Search Bar */}
          <div className="relative flex items-center bg-white rounded-md shadow-lg overflow-hidden max-w-md mx-auto border border-1 mb-6">
            <input
              type="text"
              placeholder="Enter your location..."
              value={location}
              onChange={handleInputChange}
              className={`flex-grow p-3 text-gray-800 outline-none border-r border-gray-300 ${!isInputValid ? 'border-red-500' : ''}`}
            />
            <button
              onClick={handleSearch}
              disabled={!isInputValid}
              className={`flex items-center justify-center ${!isInputValid ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#67AD5B] text-white hover:bg-[#558d48]'} transition-all duration-300 ease-in-out h-12 px-4 md:px-6`}
              style={{ width: 'auto' }} // Ensure button width is auto to adapt to content
            >
              <FaSearch className="text-xl md:text-base" />
              <span className="hidden md:inline ml-2">Search</span>
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 mb-4">{error}</div>
          )}

          {/* Display Location Data */}
          {dataFetched && locationData && (
            <div className="mb-6 text-gray-700 body-font flex justify-between flex-col w-full items-center">
              <div className='w-60'>
                <p className="mb-1 flex justify-between flex-row"><b>Address:</b> {locationData.address}</p>
                <p className="mb-1 flex justify-between flex-row"><b>Latitude:</b> {locationData.latitude}</p>
                <p className="mb-1 flex justify-between flex-row"><b>Longitude:</b> {locationData.longitude}</p>
              </div>
            </div>
          )}

          {/* Analyze Button with Loading Animation */}
          {dataFetched && (
            <button
              onClick={handleAnalyze}
              className="mt-6 px-4 py-3 bg-[#67AD5B] text-white rounded-md hover:bg-[#558d48] transition duration-300 w-full flex items-center justify-center h-12"
            >
              {analyzing ? (
                <div className="flex items-center justify-center w-full h-full mb-3">
                  <PropagateLoader color="#ffffff" size={15} />
                </div>
              ) : (
                'Analyze'
              )}
            </button>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center p-5 text-gray-700">
        <div className="text-sm">Team</div>
        <div className="text-2xl font-bold text-[#67AD5B]">CodeDevs</div>
      </footer>
    </div>
  );
}

export default HomePage;
