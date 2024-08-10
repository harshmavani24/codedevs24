// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [query, setQuery] = useState(''); // State for the search query
//   const [suggestions, setSuggestions] = useState([]);
//   const [locationData, setLocationData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSuggestions = async () => {
//       if (query.length > 2) {  // Trigger search only if query length is more than 2 characters
//         try {
//           const response = await axios.get(`/api/autocomplete?q=${query}`);
//           console.log('Response:', response); // Log the response
//           setSuggestions(response.data);
//         } catch (error) {
//           console.error('Error fetching location data:', error);
//           setError('Error fetching location data');
//         }
//       } else {
//         setSuggestions([]);
//       }
//     };

//     fetchSuggestions(); // Fetch suggestions when query changes
//   }, [query]);

//   const handleSuggestionClick = (suggestion) => {
//     setLocationData(suggestion);
//     setSuggestions([]);
//     setQuery(suggestion.display_name);
//   };

//   const handleGetLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           getLocationData(latitude, longitude);
//         },
//         (error) => {
//           switch (error.code) {
//             case error.PERMISSION_DENIED:
//               setError('User denied the request for Geolocation.');
//               break;
//             case error.POSITION_UNAVAILABLE:
//               setError('Location information is unavailable.');
//               break;
//             case error.TIMEOUT:
//               setError('The request to get user location timed out.');
//               break;
//             case error.UNKNOWN_ERROR:
//               setError('An unknown error occurred.');
//               break;
//             default:
//               setError('An unknown error occurred.');
//               break;
//           }
//         }
//       );
//     } else {
//       setError('Geolocation is not supported by this browser.');
//     }
//   };

//   const getLocationData = async (lat, lon) => {
//     try {
//       const response = await axios.post('/api/location/', {
//         latitude: lat,
//         longitude: lon,
//       });

//       console.log('Location Data:', response.data); // Log the data here
//       setLocationData(response.data);
//     } catch (error) {
//       console.error('Error fetching location data:', error);
//       setError('Error fetching location data');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Location Test App</h1>

//       <div>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Type an address..."
//         />
//       </div>

//       {suggestions.length > 0 && (
//         <ul>
//           {suggestions.map((suggestion, index) => (
//             <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//               {suggestion.display_name}
//             </li>
//           ))}
//         </ul>
//       )}

//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleGetLocation}>Get My Location</button>
//       </div>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {locationData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Location Data</h2>
//           <p><strong>Address:</strong> {locationData.address || 'N/A'}</p>
//           <p><strong>City:</strong> {locationData.city || 'N/A'}</p>
//           <p><strong>State:</strong> {locationData.state || 'N/A'}</p>
//           <p><strong>Country:</strong> {locationData.country || 'N/A'}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// ----------------------------------------------- working code -----------------------------------------------



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// function App() {
//   const [query, setQuery] = useState(''); // State for the search query
//   const [suggestions, setSuggestions] = useState([]);
//   const [locationData, setLocationData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSuggestions = async () => {
//       if (query.length > 2) {  // Trigger search only if query length is more than 2 characters
//         try {
//           const response = await axios.get(`/api/autocomplete?q=${query}`);
//           console.log('Response:', response); // Log the response
//           setSuggestions(response.data);
//         } catch (error) {
//           console.error('Error fetching location data:', error);
//           setError('Error fetching location data');
//         }
//       } else {
//         setSuggestions([]);
//       }
//     };

//     fetchSuggestions(); // Fetch suggestions when query changes
//   }, [query]);

//   const handleSuggestionClick = (suggestion) => {
//     setLocationData(suggestion);
//     setSuggestions([]);
//     setQuery(suggestion.display_name); // Ensure this is a string
    
//     // Set longitude and latitude in cookies
//     Cookies.set('latitude', suggestion.lat);
//     Cookies.set('longitude', suggestion.lon);
//   };

//   const handleGetLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           getLocationData(latitude, longitude);

//           // Set longitude and latitude in cookies
//           Cookies.set('latitude', latitude);
//           Cookies.set('longitude', longitude);
//         },
//         (error) => {
//           switch (error.code) {
//             case error.PERMISSION_DENIED:
//               setError('User denied the request for Geolocation.');
//               break;
//             case error.POSITION_UNAVAILABLE:
//               setError('Location information is unavailable.');
//               break;
//             case error.TIMEOUT:
//               setError('The request to get user location timed out.');
//               break;
//             case error.UNKNOWN_ERROR:
//               setError('An unknown error occurred.');
//               break;
//             default:
//               setError('An unknown error occurred.');
//               break;
//           }
//         }
//       );
//     } else {
//       setError('Geolocation is not supported by this browser.');
//     }
//   };

//   const getLocationData = async (lat, lon) => {
//     try {
//       const response = await axios.post('/api/location/', {
//         latitude: lat,
//         longitude: lon,
//       });

//       console.log('Location Data:', response.data); // Log the data here
//       setLocationData(response.data);
//     } catch (error) {
//       console.error('Error fetching location data:', error);
//       setError('Error fetching location data');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Location Test App</h1>

//       <div>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Type an address..."
//         />
//       </div>

//       {suggestions.length > 0 && (
//         <ul>
//           {suggestions.map((suggestion, index) => (
//             <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//               {suggestion.display_name} {/* Ensure this is a string */}
//             </li>
//           ))}
//         </ul>
//       )}

//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleGetLocation}>Get My Location</button>
//       </div>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {locationData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Location Data</h2>
//           <p><strong>Address:</strong> {locationData.display_name || 'N/A'}</p> {/* Use a string here */}
//           <p><strong>City:</strong> {locationData.city || 'N/A'}</p>
//           <p><strong>State:</strong> {locationData.state || 'N/A'}</p>
//           <p><strong>Country:</strong> {locationData.country || 'N/A'}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// function App() {
//   const [query, setQuery] = useState(''); // State for the search query
//   const [suggestions, setSuggestions] = useState([]);
//   const [locationData, setLocationData] = useState(null);
//   const [error, setError] = useState(null);

//   // Function to fetch location data using latitude and longitude
//   const getLocationData = async (lat, lon) => {
//     try {
//       const response = await axios.post('/api/location/', {
//         latitude: lat,
//         longitude: lon,
//       });
//       console.log('Location Data:', response.data); // Log the data here
//       setLocationData(response.data);
//     } catch (error) {
//       console.error('Error fetching location data:', error);
//       setError('Error fetching location data');
//     }
//   };

//   // On component mount, check if location is stored in cookies
//   useEffect(() => {
//     const latitude = Cookies.get('latitude');
//     const longitude = Cookies.get('longitude');

//     if (latitude && longitude) {
//       console.log('Fetching location from cookies:', latitude, longitude);
//       getLocationData(latitude, longitude);
//     }
//   }, []); // Empty dependency array means this runs once when the component mounts

//   useEffect(() => {
//     const fetchSuggestions = async () => {
//       if (query.length > 2) {  // Trigger search only if query length is more than 2 characters
//         try {
//           const response = await axios.get(`/api/autocomplete?q=${query}`);
//           console.log('Response:', response); // Log the response
//           setSuggestions(response.data);
//         } catch (error) {
//           console.error('Error fetching location data:', error);
//           setError('Error fetching location data');
//         }
//       } else {
//         setSuggestions([]);
//       }
//     };

//     fetchSuggestions(); // Fetch suggestions when query changes
//   }, [query]);

//   const handleSuggestionClick = (suggestion) => {
//     setLocationData(suggestion);
//     setSuggestions([]);
//     setQuery(suggestion.display_name); // Ensure this is a string
    
//     // Set longitude and latitude in cookies
//     Cookies.set('latitude', suggestion.lat);
//     Cookies.set('longitude', suggestion.lon);
//   };

//   const handleGetLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           getLocationData(latitude, longitude);

//           // Set longitude and latitude in cookies
//           Cookies.set('latitude', latitude);
//           Cookies.set('longitude', longitude);
//         },
//         (error) => {
//           switch (error.code) {
//             case error.PERMISSION_DENIED:
//               setError('User denied the request for Geolocation.');
//               break;
//             case error.POSITION_UNAVAILABLE:
//               setError('Location information is unavailable.');
//               break;
//             case error.TIMEOUT:
//               setError('The request to get user location timed out.');
//               break;
//             case error.UNKNOWN_ERROR:
//               setError('An unknown error occurred.');
//               break;
//             default:
//               setError('An unknown error occurred.');
//               break;
//           }
//         }
//       );
//     } else {
//       setError('Geolocation is not supported by this browser.');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Location Test App</h1>

//       <div>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Type an address..."
//         />
//       </div>

//       {suggestions.length > 0 && (
//         <ul>
//           {suggestions.map((suggestion, index) => (
//             <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//               {suggestion.display_name} {/* Ensure this is a string */}
//             </li>
//           ))}
//         </ul>
//       )}

//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleGetLocation}>Get My Location</button>
//       </div>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {locationData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Location Data</h2>
//           <><strong>Address:</strong> {locationData.address  || locationData.display_name || 'N/A'}</>
//           <p><strong>City:</strong> {locationData.city || 'N/A'}</p>
//           <p><strong>State:</strong> {locationData.state || 'N/A'}</p>
//           <p><strong>Country:</strong> {locationData.country || 'N/A'}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// function App() {
//   const [query, setQuery] = useState(''); // State for the search query
//   const [suggestions, setSuggestions] = useState([]);
//   const [locationData, setLocationData] = useState(null);
//   const [error, setError] = useState(null);

//   // Function to fetch location data using latitude and longitude
//   const getLocationData = async (lat, lon) => {
//     try {
//       const response = await axios.post('/api/location/', {
//         latitude: lat,
//         longitude: lon,
//       });
//       console.log('Location Data:', response.data); // Log the data here
//       setLocationData(response.data);
//     } catch (error) {
//       console.error('Error fetching location data:', error);
//       setError('Error fetching location data');
//     }
//   };

//   // On component mount, check if location is stored in cookies
//   useEffect(() => {
//     const latitude = Cookies.get('latitude');
//     const longitude = Cookies.get('longitude');

//     if (latitude && longitude) {
//       console.log('Fetching location from cookies:', latitude, longitude);
//       getLocationData(latitude, longitude);
//     }
//   }, []); // Empty dependency array means this runs once when the component mounts

//   useEffect(() => {
//     const fetchSuggestions = async () => {
//       if (query.length > 2) {  // Trigger search only if query length is more than 2 characters
//         try {
//           const response = await axios.get(`/api/autocomplete?q=${query}`);
//           console.log('Response:', response); // Log the response
//           setSuggestions(response.data);
//         } catch (error) {
//           console.error('Error fetching location data:', error);
//           setError('Error fetching location data');
//         }
//       } else {
//         setSuggestions([]);
//       }
//     };

//     fetchSuggestions(); // Fetch suggestions when query changes
//   }, [query]);

//   const handleSuggestionClick = (suggestion) => {
//     setLocationData(suggestion);
//     setSuggestions([]);
//     setQuery(suggestion.display_name); // Ensure this is a string
    
//     // Set longitude and latitude in cookies
//     Cookies.set('latitude', suggestion.lat);
//     Cookies.set('longitude', suggestion.lon);
//   };

//   const handleGetLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           getLocationData(latitude, longitude);

//           // Set longitude and latitude in cookies
//           Cookies.set('latitude', latitude);
//           Cookies.set('longitude', longitude);
//         },
//         (error) => {
//           switch (error.code) {
//             case error.PERMISSION_DENIED:
//               setError('User denied the request for Geolocation.');
//               break;
//             case error.POSITION_UNAVAILABLE:
//               setError('Location information is unavailable.');
//               break;
//             case error.TIMEOUT:
//               setError('The request to get user location timed out.');
//               break;
//             case error.UNKNOWN_ERROR:
//               setError('An unknown error occurred.');
//               break;
//             default:
//               setError('An unknown error occurred.');
//               break;
//           }
//         }
//       );
//     } else {
//       setError('Geolocation is not supported by this browser.');
//     }
//   };

//   // Helper function to construct a readable address from an object
//   const renderAddress = (address) => {
//     if (typeof address === 'object') {
//       const { road, city, state, postcode, country } = address;
//       return `${road || ''}, ${city || ''}, ${state || ''}, ${postcode || ''}, ${country || ''}`.trim();
//     }
//     return address || 'N/A';
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Location Test App</h1>

//       <div>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Type an address..."
//         />
//       </div>

//       {suggestions.length > 0 && (
//         <ul>
//           {suggestions.map((suggestion, index) => (
//             <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//               {suggestion.display_name} {/* Ensure this is a string */}
//             </li>
//           ))}
//         </ul>
//       )}

//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleGetLocation}>Get My Location</button>
//       </div>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {locationData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Location Data</h2>
//           <p><strong>Address:</strong> {renderAddress(locationData.address)}</p> {/* Use helper to render address */}
//           <><strong>City:</strong> {locationData.city || renderAddress(locationData.city) || 'N/A'}</>
//           <p><strong>State:</strong> {locationData.state || renderAddress(locationData.state) || 'N/A'}</p>
//           <p><strong>Country:</strong> {locationData.country || renderAddress(locationData.country) || 'N/A'}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// function App() {
//   const [query, setQuery] = useState(''); // State for the search query
//   const [suggestions, setSuggestions] = useState([]);
//   const [locationData, setLocationData] = useState(null);
//   const [error, setError] = useState(null);

//   // Function to fetch location data using latitude and longitude
//   const getLocationData = async (lat, lon) => {
//     try {
//       const response = await axios.post('/api/location/', {
//         latitude: lat,
//         longitude: lon,
//       });
//       console.log('Location Data:', response.data); // Log the data here
//       setLocationData(response.data);
//     } catch (error) {
//       console.error('Error fetching location data:', error);
//       setError('Error fetching location data');
//     }
//   };

//   // On component mount, check if location is stored in cookies
//   useEffect(() => {
//     const latitude = Cookies.get('latitude');
//     const longitude = Cookies.get('longitude');

//     if (latitude && longitude) {
//       console.log('Fetching location from cookies:', latitude, longitude);
//       getLocationData(latitude, longitude);
//     }
//   }, []); // Empty dependency array means this runs once when the component mounts

//   useEffect(() => {
//     const fetchSuggestions = async () => {
//       if (query.length > 2) {  // Trigger search only if query length is more than 2 characters
//         try {
//           const response = await axios.get(`/api/autocomplete?q=${query}`);
//           console.log('Response:', response); // Log the response
//           setSuggestions(response.data);
//         } catch (error) {
//           console.error('Error fetching location data:', error);
//           setError('Error fetching location data');
//         }
//       } else {
//         setSuggestions([]);
//       }
//     };

//     fetchSuggestions(); // Fetch suggestions when query changes
//   }, [query]);

//   const handleSuggestionClick = async (suggestion) => {
//     // Re-fetch full location data using the suggestion's coordinates
//     await getLocationData(suggestion.lat, suggestion.lon);

//     // Set longitude and latitude in cookies
//     Cookies.set('latitude', suggestion.lat);
//     Cookies.set('longitude', suggestion.lon);
//   };

//   const handleGetLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           getLocationData(latitude, longitude);

//           // Set longitude and latitude in cookies
//           Cookies.set('latitude', latitude);
//           Cookies.set('longitude', longitude);
//         },
//         (error) => {
//           switch (error.code) {
//             case error.PERMISSION_DENIED:
//               setError('User denied the request for Geolocation.');
//               break;
//             case error.POSITION_UNAVAILABLE:
//               setError('Location information is unavailable.');
//               break;
//             case error.TIMEOUT:
//               setError('The request to get user location timed out.');
//               break;
//             case error.UNKNOWN_ERROR:
//               setError('An unknown error occurred.');
//               break;
//             default:
//               setError('An unknown error occurred.');
//               break;
//           }
//         }
//       );
//     } else {
//       setError('Geolocation is not supported by this browser.');
//     }
//   };

//   // Helper function to construct a readable address from an object
//   const renderAddress = (address) => {
//     if (typeof address === 'object') {
//       const { road, city, town, village, state, postcode, country } = address;
//       return `${road || ''}, ${city || town || village || ''}, ${state || ''}, ${postcode || ''}, ${country || ''}`.trim();
//     }
//     return address || 'N/A';
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Location Test App</h1>

//       <div>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Type an address..."
//         />
//       </div>

//       {suggestions.length > 0 && (
//         <ul>
//           {suggestions.map((suggestion, index) => (
//             <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//               {suggestion.display_name} {/* Ensure this is a string */}
//             </li>
//           ))}
//         </ul>
//       )}

//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleGetLocation}>Get My Location</button>
//       </div>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {locationData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Location Data</h2>
//           <p><strong>Address:</strong> {renderAddress(locationData.address)}</p> {/* Use helper to render address */}
//           <p><strong>City:</strong> {locationData.city || locationData.district || 'N/A'}</p>
//           <p><strong>State:</strong> {locationData.state || 'N/A'}</p>
//           <p><strong>Country:</strong> {locationData.country || 'N/A'}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// function App() {
//   const [query, setQuery] = useState(''); // State for the search query
//   const [suggestions, setSuggestions] = useState([]);
//   const [locationData, setLocationData] = useState(null);
//   const [historicalData, setHistoricalData] = useState(null);
//   const [forecastData, setForecastData] = useState(null);
//   const [error, setError] = useState(null);

//   // Function to fetch location data using latitude and longitude
//   const getLocationData = async (lat, lon) => {
//     try {
//       const response = await axios.post('/api/location/', {
//         latitude: lat,
//         longitude: lon,
//       });
//       console.log('Location Data:', response.data); // Log the data here
//       setLocationData(response.data);

//       // Fetch Historical Ag-Weather Data
//       fetchHistoricalAgWeather(lat, lon);

//       // Fetch Ag-Weather Forecast Data
//       fetchAgWeatherForecast(lat, lon);

//     } catch (error) {
//       console.error('Error fetching location data:', error);
//       setError('Error fetching location data');
//     }
//   };

//   const fetchHistoricalAgWeather = async (lat, lon) => {
//     try {
//       const startDate = '2024-08-01'; // Example start date
//       const endDate = '2024-08-07'; // Example end date
//       const response = await axios.get('/api/historical-ag-weather/', {
//         params: {
//           lat,
//           lon,
//           start_date: startDate,
//           end_date: endDate
//         }
//       });
//       console.log('Historical Ag-Weather Data:', response.data); // Log historical data
//       setHistoricalData(response.data);
//     } catch (error) {
//       console.error('Error fetching historical ag-weather data:', error);
//       setError('Error fetching historical ag-weather data');
//     }
//   };

//   const fetchAgWeatherForecast = async (lat, lon) => {
//     try {
//       const response = await axios.get('/api/ag-weather-forecast/', {
//         params: {
//           lat,
//           lon,
//         }
//       });
//       console.log('Ag-Weather Forecast Data:', response.data); // Log forecast data
//       setForecastData(response.data);
//     } catch (error) {
//       console.error('Error fetching ag-weather forecast data:', error);
//       setError('Error fetching ag-weather forecast data');
//     }
//   };

//   // On component mount, check if location is stored in cookies
//   useEffect(() => {
//     const latitude = Cookies.get('latitude');
//     const longitude = Cookies.get('longitude');

//     if (latitude && longitude) {
//       console.log('Fetching location from cookies:', latitude, longitude);
//       getLocationData(latitude, longitude);
//     }
//   }, []); // Empty dependency array means this runs once when the component mounts

//   useEffect(() => {
//     const fetchSuggestions = async () => {
//       if (query.length > 2) {  // Trigger search only if query length is more than 2 characters
//         try {
//           const response = await axios.get(`/api/autocomplete?q=${query}`);
//           console.log('Response:', response); // Log the response
//           setSuggestions(response.data);
//         } catch (error) {
//           console.error('Error fetching location data:', error);
//           setError('Error fetching location data');
//         }
//       } else {
//         setSuggestions([]);
//       }
//     };

//     fetchSuggestions(); // Fetch suggestions when query changes
//   }, [query]);

//   const handleSuggestionClick = async (suggestion) => {
//     // Re-fetch full location data using the suggestion's coordinates
//     await getLocationData(suggestion.lat, suggestion.lon);

//     // Set longitude and latitude in cookies
//     Cookies.set('latitude', suggestion.lat);
//     Cookies.set('longitude', suggestion.lon);
//   };

//   const handleGetLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           getLocationData(latitude, longitude);

//           // Set longitude and latitude in cookies
//           Cookies.set('latitude', latitude);
//           Cookies.set('longitude', longitude);
//         },
//         (error) => {
//           switch (error.code) {
//             case error.PERMISSION_DENIED:
//               setError('User denied the request for Geolocation.');
//               break;
//             case error.POSITION_UNAVAILABLE:
//               setError('Location information is unavailable.');
//               break;
//             case error.TIMEOUT:
//               setError('The request to get user location timed out.');
//               break;
//             case error.UNKNOWN_ERROR:
//               setError('An unknown error occurred.');
//               break;
//             default:
//               setError('An unknown error occurred.');
//               break;
//           }
//         }
//       );
//     } else {
//       setError('Geolocation is not supported by this browser.');
//     }
//   };

//   // Helper function to construct a readable address from an object
//   const renderAddress = (address) => {
//     if (typeof address === 'object') {
//       const { road, city, town, village, state, postcode, country } = address;
//       return `${road || ''}, ${city || town || village || ''}, ${state || ''}, ${postcode || ''}, ${country || ''}`.trim();
//     }
//     return address || 'N/A';
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Location and Agricultural Weather Information</h1>

//       <div>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Type an address..."
//         />
//       </div>

//       {suggestions.length > 0 && (
//         <ul>
//           {suggestions.map((suggestion, index) => (
//             <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//               {suggestion.display_name} {/* Ensure this is a string */}
//             </li>
//           ))}
//         </ul>
//       )}

//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleGetLocation}>Get My Location</button>
//       </div>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {locationData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Location Data</h2>
//           <p><strong>Address:</strong> {renderAddress(locationData.address)}</p> {/* Use helper to render address */}
//           <p><strong>City:</strong> {locationData.city || locationData.district || 'N/A'}</p>
//           <p><strong>State:</strong> {locationData.state || 'N/A'}</p>
//           <p><strong>Country:</strong> {locationData.country || 'N/A'}</p>
//         </div>
//       )}

//       {historicalData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Historical Ag-Weather Data</h2>
//           <pre>{JSON.stringify(historicalData, null, 2)}</pre> {/* Display historical data */}
//         </div>
//       )}

//       {forecastData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Ag-Weather Forecast Data</h2>
//           <pre>{JSON.stringify(forecastData, null, 2)}</pre> {/* Display forecast data */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// function App() {
//   const [query, setQuery] = useState(''); // State for the search query
//   const [suggestions, setSuggestions] = useState([]);
//   const [locationData, setLocationData] = useState(null);
//   const [historicalData, setHistoricalData] = useState(null);
//   const [forecastData, setForecastData] = useState(null);
//   const [airQualityData, setAirQualityData] = useState(null); // State for air quality data
//   const [soilData, setSoilData] = useState(null); // State for soil data
//   const [error, setError] = useState(null);

//   const fetchSoilData = async (lat, lon) => {
//     try {
//       const response = await axios.get('/api/soil-data/', {
//         params: {
//           lat,
//           lon,
//           depths: [
//             '0-5cm', '0-30cm', '5-15cm', '15-30cm', '30-60cm', '60-100cm', '100-200cm'
//           ],
//           properties: [
//             'bdod', 'cec', 'cfvo', 'clay', 'nitrogen', 'ocd', 'ocs', 'phh2o',
//             'sand', 'silt', 'soc', 'wv0010', 'wv0033', 'wv1500'
//           ],
//           values: ['Q0.5', 'Q0.05', 'Q0.95', 'mean', 'uncertainty']
//         }
//       });
//       console.log('Soil Data:', response.data); // Log soil data
//       setSoilData(response.data);
//     } catch (error) {
//       console.error('Error fetching soil data:', error);
//       setError('Error fetching soil data');
//     }
//   };
  
//   // Function to fetch location data using latitude and longitude
//   const getLocationData = async (lat, lon) => {
//     try {
//       const response = await axios.post('/api/location/', {
//         latitude: lat,
//         longitude: lon,
//       });
//       console.log('Location Data:', response.data); // Log the data here
//       setLocationData(response.data);

//       // Fetch Historical Ag-Weather Data
//       fetchHistoricalAgWeather(lat, lon);

//       // Fetch Ag-Weather Forecast Data
//       fetchAgWeatherForecast(lat, lon);

//       // Fetch Current Air Quality Data
//       fetchCurrentAirQuality(lat, lon);

//       // Fetch Soil Data
//       fetchSoilData(lat, lon);

//     } catch (error) {
//       console.error('Error fetching location data:', error);
//       setError('Error fetching location data');
//     }
//   };

//   const fetchHistoricalAgWeather = async (lat, lon) => {
//     try {
//       const startDate = '2024-08-09'; // Example start date
//       const endDate = '2024-08-10'; // Example end date
//       const response = await axios.get('/api/historical-ag-weather/', {
//         params: {
//           lat,
//           lon,
//           start_date: startDate,
//           end_date: endDate
//         }
//       });
//       console.log('Historical Ag-Weather Data:', response.data); // Log historical data
//       setHistoricalData(response.data);
//     } catch (error) {
//       console.error('Error fetching historical ag-weather data:', error);
//       setError('Error fetching historical ag-weather data');
//     }
//   };

//   const fetchAgWeatherForecast = async (lat, lon) => {
//     try {
//       const response = await axios.get('/api/ag-weather-forecast/', {
//         params: {
//           lat,
//           lon,
//         }
//       });
//       console.log('Ag-Weather Forecast Data:', response.data); // Log forecast data
//       setForecastData(response.data);
//     } catch (error) {
//       console.error('Error fetching ag-weather forecast data:', error);
//       setError('Error fetching ag-weather forecast data');
//     }
//   };

//   const fetchCurrentAirQuality = async (lat, lon) => {
//     try {
//       const response = await axios.get('/api/current-air-quality/', {
//         params: { lat, lon }
//       });
//       console.log('Current Air Quality Data:', response.data); // Log air quality data
//       setAirQualityData(response.data);
//     } catch (error) {
//       console.error('Error fetching air quality data:', error);
//       setError('Error fetching air quality data');
//     }
//   };

//   // On component mount, check if location is stored in cookies
//   useEffect(() => {
//     const latitude = Cookies.get('latitude');
//     const longitude = Cookies.get('longitude');

//     if (latitude && longitude) {
//       console.log('Fetching location from cookies:', latitude, longitude);
//       getLocationData(latitude, longitude);
//     }
//   }, []); // Empty dependency array means this runs once when the component mounts

//   useEffect(() => {
//     const fetchSuggestions = async () => {
//       if (query.length > 2) {  // Trigger search only if query length is more than 2 characters
//         try {
//           const response = await axios.get(`/api/autocomplete?q=${query}`);
//           console.log('Response:', response); // Log the response
//           setSuggestions(response.data);
//         } catch (error) {
//           console.error('Error fetching location data:', error);
//           setError('Error fetching location data');
//         }
//       } else {
//         setSuggestions([]);
//       }
//     };

//     fetchSuggestions(); // Fetch suggestions when query changes
//   }, [query]);

//   const handleSuggestionClick = async (suggestion) => {
//     // Re-fetch full location data using the suggestion's coordinates
//     await getLocationData(suggestion.lat, suggestion.lon);

//     // Set longitude and latitude in cookies
//     Cookies.set('latitude', suggestion.lat);
//     Cookies.set('longitude', suggestion.lon);
//   };

//   const handleGetLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           getLocationData(latitude, longitude);

//           // Set longitude and latitude in cookies
//           Cookies.set('latitude', latitude);
//           Cookies.set('longitude', longitude);
//         },
//         (error) => {
//           switch (error.code) {
//             case error.PERMISSION_DENIED:
//               setError('User denied the request for Geolocation.');
//               break;
//             case error.POSITION_UNAVAILABLE:
//               setError('Location information is unavailable.');
//               break;
//             case error.TIMEOUT:
//               setError('The request to get user location timed out.');
//               break;
//             case error.UNKNOWN_ERROR:
//               setError('An unknown error occurred.');
//               break;
//             default:
//               setError('An unknown error occurred.');
//               break;
//           }
//         }
//       );
//     } else {
//       setError('Geolocation is not supported by this browser.');
//     }
//   };

//   // Helper function to construct a readable address from an object
//   const renderAddress = (address) => {
//     if (typeof address === 'object') {
//       const { road, city, town, village, state, postcode, country } = address;
//       return `${road || ''}, ${city || town || village || ''}, ${state || ''}, ${postcode || ''}, ${country || ''}`.trim();
//     }
//     return address || 'N/A';
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Location, Air Quality, and Agricultural Weather Information</h1>

//       <div>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Type an address..."
//         />
//       </div>

//       {suggestions.length > 0 && (
//         <ul>
//           {suggestions.map((suggestion, index) => (
//             <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//               {suggestion.display_name} {/* Ensure this is a string */}
//             </li>
//           ))}
//         </ul>
//       )}

//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleGetLocation}>Get My Location</button>
//       </div>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {locationData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Location Data</h2>
//           <p><strong>Address:</strong> {renderAddress(locationData.address)}</p> {/* Use helper to render address */}
//           <p><strong>City:</strong> {locationData.city || locationData.district || 'N/A'}</p>
//           <p><strong>State:</strong> {locationData.state || 'N/A'}</p>
//           <p><strong>Country:</strong> {locationData.country || 'N/A'}</p>
//         </div>
//       )}

//       {historicalData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Historical Ag-Weather Data</h2>
//           <pre>{JSON.stringify(historicalData, null, 2)}</pre> {/* Display historical data */}
//         </div>
//       )}

//       {forecastData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Ag-Weather Forecast Data</h2>
//           <pre>{JSON.stringify(forecastData, null, 2)}</pre> {/* Display forecast data */}
//         </div>
//       )}

//       {airQualityData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Current Air Quality Data</h2>
//           <pre>{JSON.stringify(airQualityData, null, 2)}</pre> {/* Display air quality data */}
//         </div>
//       )}

//       {soilData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Soil Data</h2>
//           <pre>{JSON.stringify(soilData, null, 2)}</pre> {/* Display soil data */}
//         </div>
//       )}
//     </div>

//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// function App() {
//   const [query, setQuery] = useState(''); // State for the search query
//   const [suggestions, setSuggestions] = useState([]);
//   const [locationData, setLocationData] = useState(null);
//   const [historicalData, setHistoricalData] = useState(null);
//   const [forecastData, setForecastData] = useState(null);
//   const [airQualityData, setAirQualityData] = useState(null); // State for air quality data
//   const [soilData, setSoilData] = useState(null); // State for soil data
//   const [error, setError] = useState(null);

//   // Function to fetch soil data using latitude and longitude
//   const fetchSoilData = async (lat, lon) => {
//     try {
//       const response = await axios.get('/api/soil-property/', {
//         params: {
//           lat,
//           lon,
//           depths: [
//             '0-5cm', '0-30cm', '5-15cm', '15-30cm', '30-60cm', '60-100cm', '100-200cm'
//           ],
//           properties: [
//             'bdod', 'cec', 'cfvo', 'clay', 'nitrogen', 'ocd', 'ocs', 'phh2o',
//             'sand', 'silt', 'soc', 'wv0010', 'wv0033', 'wv1500'
//           ],
//           values: ['Q0.5', 'Q0.05', 'Q0.95', 'mean', 'uncertainty']
//         }
//       });
//       console.log('Soil Data:', response.data); // Log soil data
//       setSoilData(response.data);
//     } catch (error) {
//       console.error('Error fetching soil data:', error);
//       setError('Error fetching soil data');
//     }
//   };

  
  

//   // Function to fetch location data using latitude and longitude
//   const getLocationData = async (lat, lon) => {
//     try {
//       const response = await axios.post('/api/location/', {
//         latitude: lat,
//         longitude: lon,
//       });
//       console.log('Location Data:', response.data); // Log the data here
//       setLocationData(response.data);

//       // Fetch Historical Ag-Weather Data
//       fetchHistoricalAgWeather(lat, lon);

//       // Fetch Ag-Weather Forecast Data
//       fetchAgWeatherForecast(lat, lon);

//       // Fetch Current Air Quality Data
//       fetchCurrentAirQuality(lat, lon);

//       // Fetch Soil Data
//       fetchSoilData(lat, lon);

//     } catch (error) {
//       console.error('Error fetching location data:', error);
//       setError('Error fetching location data');
//     }
//   };

//   const fetchHistoricalAgWeather = async (lat, lon) => {
//     try {
//       const startDate = '2024-08-09'; // Example start date
//       const endDate = '2024-08-10'; // Example end date
//       const response = await axios.get('/api/historical-ag-weather/', {
//         params: {
//           lat,
//           lon,
//           start_date: startDate,
//           end_date: endDate
//         }
//       });
//       console.log('Historical Ag-Weather Data:', response.data); // Log historical data
//       setHistoricalData(response.data);
//     } catch (error) {
//       console.error('Error fetching historical ag-weather data:', error);
//       setError('Error fetching historical ag-weather data');
//     }
//   };

//   const fetchAgWeatherForecast = async (lat, lon) => {
//     try {
//       const response = await axios.get('/api/ag-weather-forecast/', {
//         params: {
//           lat,
//           lon,
//         }
//       });
//       console.log('Ag-Weather Forecast Data:', response.data); // Log forecast data
//       setForecastData(response.data);
//     } catch (error) {
//       console.error('Error fetching ag-weather forecast data:', error);
//       setError('Error fetching ag-weather forecast data');
//     }
//   };

//   const fetchCurrentAirQuality = async (lat, lon) => {
//     try {
//       const response = await axios.get('/api/current-air-quality/', {
//         params: { lat, lon }
//       });
//       console.log('Current Air Quality Data:', response.data); // Log air quality data
//       setAirQualityData(response.data);
//     } catch (error) {
//       console.error('Error fetching air quality data:', error);
//       setError('Error fetching air quality data');
//     }
//   };

//   // On component mount, check if location is stored in cookies
//   useEffect(() => {
//     const latitude = Cookies.get('latitude');
//     const longitude = Cookies.get('longitude');

//     if (latitude && longitude) {
//       console.log('Fetching location from cookies:', latitude, longitude);
//       getLocationData(latitude, longitude);
//     }
//   }, []); // Empty dependency array means this runs once when the component mounts

//   useEffect(() => {
//     const fetchSuggestions = async () => {
//       if (query.length > 2) {  // Trigger search only if query length is more than 2 characters
//         try {
//           const response = await axios.get(`/api/autocomplete?q=${query}`);
//           console.log('Response:', response); // Log the response
//           setSuggestions(response.data);
//         } catch (error) {
//           console.error('Error fetching location data:', error);
//           setError('Error fetching location data');
//         }
//       } else {
//         setSuggestions([]);
//       }
//     };

//     fetchSuggestions(); // Fetch suggestions when query changes
//   }, [query]);

//   const handleSuggestionClick = async (suggestion) => {
//     // Re-fetch full location data using the suggestion's coordinates
//     await getLocationData(suggestion.lat, suggestion.lon);

//     // Set longitude and latitude in cookies
//     Cookies.set('latitude', suggestion.lat);
//     Cookies.set('longitude', suggestion.lon);
//   };

//   const handleGetLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           getLocationData(latitude, longitude);

//           // Set longitude and latitude in cookies
//           Cookies.set('latitude', latitude);
//           Cookies.set('longitude', longitude);
//         },
//         (error) => {
//           switch (error.code) {
//             case error.PERMISSION_DENIED:
//               setError('User denied the request for Geolocation.');
//               break;
//             case error.POSITION_UNAVAILABLE:
//               setError('Location information is unavailable.');
//               break;
//             case error.TIMEOUT:
//               setError('The request to get user location timed out.');
//               break;
//             case error.UNKNOWN_ERROR:
//               setError('An unknown error occurred.');
//               break;
//             default:
//               setError('An unknown error occurred.');
//               break;
//           }
//         }
//       );
//     } else {
//       setError('Geolocation is not supported by this browser.');
//     }
//   };

//   // Helper function to construct a readable address from an object
//   const renderAddress = (address) => {
//     if (typeof address === 'object') {
//       const { road, city, town, village, state, postcode, country } = address;
//       return `${road || ''}, ${city || town || village || ''}, ${state || ''}, ${postcode || ''}, ${country || ''}`.trim();
//     }
//     return address || 'N/A';
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Location, Air Quality, and Agricultural Weather Information</h1>

//       <div>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Type an address..."
//         />
//       </div>

//       {suggestions.length > 0 && (
//         <ul>
//           {suggestions.map((suggestion, index) => (
//             <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//               {suggestion.display_name} {/* Ensure this is a string */}
//             </li>
//           ))}
//         </ul>
//       )}

//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleGetLocation}>Get My Location</button>
//       </div>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {locationData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Location Data</h2>
//           <p><strong>Address:</strong> {renderAddress(locationData.address)}</p> {/* Use helper to render address */}
//           <p><strong>City:</strong> {locationData.city || locationData.district || 'N/A'}</p>
//           <p><strong>State:</strong> {locationData.state || 'N/A'}</p>
//           <p><strong>Country:</strong> {locationData.country || 'N/A'}</p>
//         </div>
//       )}

//       {historicalData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Historical Ag-Weather Data</h2>
//           <pre>{JSON.stringify(historicalData, null, 2)}</pre> {/* Display historical data */}
//         </div>
//       )}

//       {forecastData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Ag-Weather Forecast Data</h2>
//           <pre>{JSON.stringify(forecastData, null, 2)}</pre> {/* Display forecast data */}
//         </div>
//       )}

//       {airQualityData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Current Air Quality Data</h2>
//           <pre>{JSON.stringify(airQualityData, null, 2)}</pre> {/* Display air quality data */}
//         </div>
//       )}

//       {soilData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Soil Data</h2>
//           <pre>{JSON.stringify(soilData, null, 2)}</pre> {/* Display soil data */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// function App() {
//   const [query, setQuery] = useState(''); // State for the search query
//   const [suggestions, setSuggestions] = useState([]);
//   const [locationData, setLocationData] = useState(null);
//   const [historicalData, setHistoricalData] = useState(null);
//   const [forecastData, setForecastData] = useState(null);
//   const [airQualityData, setAirQualityData] = useState(null); // State for air quality data
//   const [soilData, setSoilData] = useState(null); // State for soil data
//   const [soilTypeData, setSoilTypeData] = useState(null); // State for soil type data
//   const [error, setError] = useState(null);

//   // Function to fetch soil data using latitude and longitude
//   const fetchSoilData = async (lat, lon) => {
//     try {
//       const response = await axios.get('/api/soil-property/', {
//         params: {
//           lat,
//           lon,
//           depths: [
//             '0-5cm', '0-30cm', '5-15cm', '15-30cm', '30-60cm', '60-100cm', '100-200cm'
//           ],
//           properties: [
//             'bdod', 'cec', 'cfvo', 'clay', 'nitrogen', 'ocd', 'ocs', 'phh2o',
//             'sand', 'silt', 'soc', 'wv0010', 'wv0033', 'wv1500'
//           ],
//           values: ['Q0.5', 'Q0.05', 'Q0.95', 'mean', 'uncertainty']
//         }
//       });
//       console.log('Soil Data:', response.data); // Log soil data
//       setSoilData(response.data);
//     } catch (error) {
//       console.error('Error fetching soil data:', error);
//       setError('Error fetching soil data');
//     }
//   };

//   // Function to fetch soil type data using latitude and longitude
//   const fetchSoilTypeData = async (lat, lon, top_k = 1) => {
//     try {
//       const response = await axios.get('/api/soil-type/', {
//         params: { lat, lon, top_k }
//       });
//       console.log('Soil Type Data:', response.data); // Log soil type data
//       setSoilTypeData(response.data);
//     } catch (error) {
//       console.error('Error fetching soil type data:', error);
//       setError('Error fetching soil type data');
//     }
//   };

//   // Function to fetch location data using latitude and longitude
//   const getLocationData = async (lat, lon) => {
//     try {
//       const response = await axios.post('/api/location/', {
//         latitude: lat,
//         longitude: lon,
//       });
//       console.log('Location Data:', response.data); // Log the data here
//       setLocationData(response.data);

//       // Fetch Historical Ag-Weather Data
//       fetchHistoricalAgWeather(lat, lon);

//       // Fetch Ag-Weather Forecast Data
//       fetchAgWeatherForecast(lat, lon);

//       // Fetch Current Air Quality Data
//       fetchCurrentAirQuality(lat, lon);

//       // Fetch Soil Data
//       fetchSoilData(lat, lon);

//       // Fetch Soil Type Data
//       fetchSoilTypeData(lat, lon); // Optionally, you can pass a different value for top_k

//     } catch (error) {
//       console.error('Error fetching location data:', error);
//       setError('Error fetching location data');
//     }
//   };

//   const fetchHistoricalAgWeather = async (lat, lon) => {
//     try {
//       const startDate = '2024-08-09'; // Example start date
//       const endDate = '2024-08-10'; // Example end date
//       const response = await axios.get('/api/historical-ag-weather/', {
//         params: {
//           lat,
//           lon,
//           start_date: startDate,
//           end_date: endDate
//         }
//       });
//       console.log('Historical Ag-Weather Data:', response.data); // Log historical data
//       setHistoricalData(response.data);
//     } catch (error) {
//       console.error('Error fetching historical ag-weather data:', error);
//       setError('Error fetching historical ag-weather data');
//     }
//   };

//   const fetchAgWeatherForecast = async (lat, lon) => {
//     try {
//       const response = await axios.get('/api/ag-weather-forecast/', {
//         params: {
//           lat,
//           lon,
//         }
//       });
//       console.log('Ag-Weather Forecast Data:', response.data); // Log forecast data
//       setForecastData(response.data);
//     } catch (error) {
//       console.error('Error fetching ag-weather forecast data:', error);
//       setError('Error fetching ag-weather forecast data');
//     }
//   };

//   const fetchCurrentAirQuality = async (lat, lon) => {
//     try {
//       const response = await axios.get('/api/current-air-quality/', {
//         params: { lat, lon }
//       });
//       console.log('Current Air Quality Data:', response.data); // Log air quality data
//       setAirQualityData(response.data);
//     } catch (error) {
//       console.error('Error fetching air quality data:', error);
//       setError('Error fetching air quality data');
//     }
//   };

//   // On component mount, check if location is stored in cookies
//   useEffect(() => {
//     const latitude = Cookies.get('latitude');
//     const longitude = Cookies.get('longitude');

//     if (latitude && longitude) {
//       console.log('Fetching location from cookies:', latitude, longitude);
//       getLocationData(latitude, longitude);
//     }
//   }, []); // Empty dependency array means this runs once when the component mounts

//   useEffect(() => {
//     const fetchSuggestions = async () => {
//       if (query.length > 2) {  // Trigger search only if query length is more than 2 characters
//         try {
//           const response = await axios.get(`/api/autocomplete?q=${query}`);
//           console.log('Response:', response); // Log the response
//           setSuggestions(response.data);
//         } catch (error) {
//           console.error('Error fetching location data:', error);
//           setError('Error fetching location data');
//         }
//       } else {
//         setSuggestions([]);
//       }
//     };

//     fetchSuggestions(); // Fetch suggestions when query changes
//   }, [query]);

//   const handleSuggestionClick = async (suggestion) => {
//     // Re-fetch full location data using the suggestion's coordinates
//     await getLocationData(suggestion.lat, suggestion.lon);

//     // Set longitude and latitude in cookies
//     Cookies.set('latitude', suggestion.lat);
//     Cookies.set('longitude', suggestion.lon);
//   };

//   const handleGetLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           getLocationData(latitude, longitude);

//           // Set longitude and latitude in cookies
//           Cookies.set('latitude', latitude);
//           Cookies.set('longitude', longitude);
//         },
//         (error) => {
//           switch (error.code) {
//             case error.PERMISSION_DENIED:
//               setError('User denied the request for Geolocation.');
//               break;
//             case error.POSITION_UNAVAILABLE:
//               setError('Location information is unavailable.');
//               break;
//             case error.TIMEOUT:
//               setError('The request to get user location timed out.');
//               break;
//             case error.UNKNOWN_ERROR:
//               setError('An unknown error occurred.');
//               break;
//             default:
//               setError('An unknown error occurred.');
//               break;
//           }
//         }
//       );
//     } else {
//       setError('Geolocation is not supported by this browser.');
//     }
//   };

//   // Helper function to construct a readable address from an object
//   const renderAddress = (address) => {
//     if (typeof address === 'object') {
//       const { road, city, town, village, state, postcode, country } = address;
//       return `${road || ''}, ${city || town || village || ''}, ${state || ''}, ${postcode || ''}, ${country || ''}`.trim();
//     }
//     return address || 'N/A';
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Location, Air Quality, and Agricultural Weather Information</h1>

//       <div>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Type an address..."
//         />
//       </div>

//       {suggestions.length > 0 && (
//         <ul>
//           {suggestions.map((suggestion, index) => (
//             <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//               {suggestion.display_name} {/* Ensure this is a string */}
//             </li>
//           ))}
//         </ul>
//       )}

//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleGetLocation}>Get My Location</button>
//       </div>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {locationData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Location Data</h2>
//           <p><strong>Address:</strong> {renderAddress(locationData.address)}</p> {/* Use helper to render address */}
//           <p><strong>City:</strong> {locationData.city || locationData.district || 'N/A'}</p>
//           <p><strong>State:</strong> {locationData.state || 'N/A'}</p>
//           <p><strong>Country:</strong> {locationData.country || 'N/A'}</p>
//         </div>
//       )}

//       {historicalData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Historical Ag-Weather Data</h2>
//           <pre>{JSON.stringify(historicalData, null, 2)}</pre> {/* Display historical data */}
//         </div>
//       )}

//       {forecastData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Ag-Weather Forecast Data</h2>
//           <pre>{JSON.stringify(forecastData, null, 2)}</pre> {/* Display forecast data */}
//         </div>
//       )}

//       {airQualityData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Current Air Quality Data</h2>
//           <pre>{JSON.stringify(airQualityData, null, 2)}</pre> {/* Display air quality data */}
//         </div>
//       )}

//       {soilData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Soil Data</h2>
//           <pre>{JSON.stringify(soilData, null, 2)}</pre> {/* Display soil data */}
//         </div>
//       )}

//       {soilTypeData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Soil Type Data</h2>
//           <pre>{JSON.stringify(soilTypeData, null, 2)}</pre> {/* Display soil type data */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// function App() {
//   const [query, setQuery] = useState(''); // State for the search query
//   const [suggestions, setSuggestions] = useState([]);
//   const [locationData, setLocationData] = useState(null);
//   const [historicalData, setHistoricalData] = useState(null);
//   const [forecastData, setForecastData] = useState(null);
//   const [airQualityData, setAirQualityData] = useState(null); // State for air quality data
//   const [soilData, setSoilData] = useState(null); // State for soil data
//   const [soilTypeData, setSoilTypeData] = useState(null); // State for soil type data
//   const [cropPrediction, setCropPrediction] = useState(null); // State for crop prediction data
//   const [error, setError] = useState(null);

//   // Function to fetch soil data using latitude and longitude
//   const fetchSoilData = async (lat, lon) => {
//     try {
//       const response = await axios.get('/api/soil-property/', {
//         params: {
//           lat,
//           lon,
//           depths: [
//             '0-5cm', '0-30cm', '5-15cm', '15-30cm', '30-60cm', '60-100cm', '100-200cm'
//           ],
//           properties: [
//             'bdod', 'cec', 'cfvo', 'clay', 'nitrogen', 'ocd', 'ocs', 'phh2o',
//             'sand', 'silt', 'soc', 'wv0010', 'wv0033', 'wv1500'
//           ],
//           values: ['Q0.5', 'Q0.05', 'Q0.95', 'mean', 'uncertainty']
//         }
//       });
//       console.log('Soil Data:', response.data); // Log soil data
//       setSoilData(response.data);
//     } catch (error) {
//       console.error('Error fetching soil data:', error);
//       setError('Error fetching soil data');
//     }
//   };

//   // Function to fetch soil type data using latitude and longitude
//   const fetchSoilTypeData = async (lat, lon, top_k = 1) => {
//     try {
//       const response = await axios.get('/api/soil-type/', {
//         params: { lat, lon, top_k }
//       });
//       console.log('Soil Type Data:', response.data); // Log soil type data
//       setSoilTypeData(response.data);
//     } catch (error) {
//       console.error('Error fetching soil type data:', error);
//       setError('Error fetching soil type data');
//     }
//   };

//   // Function to fetch location data using latitude and longitude
//   const getLocationData = async (lat, lon) => {
//     try {
//       const response = await axios.post('/api/location/', {
//         latitude: lat,
//         longitude: lon,
//       });
//       console.log('Location Data:', response.data); // Log the data here
//       setLocationData(response.data);

//       // Fetch Historical Ag-Weather Data
//       fetchHistoricalAgWeather(lat, lon);

//       // Fetch Ag-Weather Forecast Data
//       fetchAgWeatherForecast(lat, lon);

//       // Fetch Current Air Quality Data
//       fetchCurrentAirQuality(lat, lon);

//       // Fetch Soil Data
//       fetchSoilData(lat, lon);

//       // Fetch Soil Type Data
//       fetchSoilTypeData(lat, lon); // Optionally, you can pass a different value for top_k

//       // Fetch Crop Prediction
//       fetchCropPrediction(lat, lon); // Fetch the crop prediction

//     } catch (error) {
//       console.error('Error fetching location data:', error);
//       setError('Error fetching location data');
//     }
//   };

//   const fetchHistoricalAgWeather = async (lat, lon) => {
//     try {
//       const startDate = '2024-08-09'; // Example start date
//       const endDate = '2024-08-10'; // Example end date
//       const response = await axios.get('/api/historical-ag-weather/', {
//         params: {
//           lat,
//           lon,
//           start_date: startDate,
//           end_date: endDate
//         }
//       });
//       console.log('Historical Ag-Weather Data:', response.data); // Log historical data
//       setHistoricalData(response.data);
//     } catch (error) {
//       console.error('Error fetching historical ag-weather data:', error);
//       setError('Error fetching historical ag-weather data');
//     }
//   };

//   const fetchAgWeatherForecast = async (lat, lon) => {
//     try {
//       const response = await axios.get('/api/ag-weather-forecast/', {
//         params: {
//           lat,
//           lon,
//         }
//       });
//       console.log('Ag-Weather Forecast Data:', response.data); // Log forecast data
//       setForecastData(response.data);
//     } catch (error) {
//       console.error('Error fetching ag-weather forecast data:', error);
//       setError('Error fetching ag-weather forecast data');
//     }
//   };

//   const fetchCurrentAirQuality = async (lat, lon) => {
//     try {
//       const response = await axios.get('/api/current-air-quality/', {
//         params: { lat, lon }
//       });
//       console.log('Current Air Quality Data:', response.data); // Log air quality data
//       setAirQualityData(response.data);
//     } catch (error) {
//       console.error('Error fetching air quality data:', error);
//       setError('Error fetching air quality data');
//     }
//   };

//   const fetchCropPrediction = async (lat, lon) => {
//     try {
//       const response = await axios.post('/api/crop-prediction/', {
//         latitude: lat,
//         longitude: lon,
//       });
//       console.log('Crop Prediction Data:', response.data); // Log crop prediction data
//       setCropPrediction(response.data);
//     } catch (error) {
//       console.error('Error fetching crop prediction data:', error);
//       setError('Error fetching crop prediction data');
//     }
//   };

//   // On component mount, check if location is stored in cookies
//   useEffect(() => {
//     const latitude = Cookies.get('latitude');
//     const longitude = Cookies.get('longitude');

//     if (latitude && longitude) {
//       console.log('Fetching location from cookies:', latitude, longitude);
//       getLocationData(latitude, longitude);
//     }
//   }, []); // Empty dependency array means this runs once when the component mounts

//   useEffect(() => {
//     const fetchSuggestions = async () => {
//       if (query.length > 2) {  // Trigger search only if query length is more than 2 characters
//         try {
//           const response = await axios.get(`/api/autocomplete?q=${query}`);
//           console.log('Response:', response); // Log the response
//           setSuggestions(response.data);
//         } catch (error) {
//           console.error('Error fetching location data:', error);
//           setError('Error fetching location data');
//         }
//       } else {
//         setSuggestions([]);
//       }
//     };

//     fetchSuggestions(); // Fetch suggestions when query changes
//   }, [query]);

//   const handleSuggestionClick = async (suggestion) => {
//     // Re-fetch full location data using the suggestion's coordinates
//     await getLocationData(suggestion.lat, suggestion.lon);

//     // Set longitude and latitude in cookies
//     Cookies.set('latitude', suggestion.lat);
//     Cookies.set('longitude', suggestion.lon);
//   };

//   const handleGetLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           getLocationData(latitude, longitude);

//           // Set longitude and latitude in cookies
//           Cookies.set('latitude', latitude);
//           Cookies.set('longitude', longitude);
//         },
//         (error) => {
//           switch (error.code) {
//             case error.PERMISSION_DENIED:
//               setError('User denied the request for Geolocation.');
//               break;
//             case error.POSITION_UNAVAILABLE:
//               setError('Location information is unavailable.');
//               break;
//             case error.TIMEOUT:
//               setError('The request to get user location timed out.');
//               break;
//             case error.UNKNOWN_ERROR:
//               setError('An unknown error occurred.');
//               break;
//             default:
//               setError('An unknown error occurred.');
//               break;
//           }
//         }
//       );
//     } else {
//       setError('Geolocation is not supported by this browser.');
//     }
//   };

//   // Helper function to construct a readable address from an object
//   const renderAddress = (address) => {
//     if (typeof address === 'object') {
//       const { road, city, town, village, state, postcode, country } = address;
//       return `${road || ''}, ${city || town || village || ''}, ${state || ''}, ${postcode || ''}, ${country || ''}`.trim();
//     }
//     return address || 'N/A';
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Location, Air Quality, and Agricultural Weather Information</h1>

//       <div>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Type an address..."
//         />
//       </div>

//       {suggestions.length > 0 && (
//         <ul>
//           {suggestions.map((suggestion, index) => (
//             <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//               {suggestion.display_name} {/* Ensure this is a string */}
//             </li>
//           ))}
//         </ul>
//       )}

//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleGetLocation}>Get My Location</button>
//       </div>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {locationData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Location Data</h2>
//           <p><strong>Address:</strong> {renderAddress(locationData.address)}</p> {/* Use helper to render address */}
//           <p><strong>City:</strong> {locationData.city || locationData.district || 'N/A'}</p>
//           <p><strong>State:</strong> {locationData.state || 'N/A'}</p>
//           <p><strong>Country:</strong> {locationData.country || 'N/A'}</p>
//         </div>
//       )}

//       {historicalData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Historical Ag-Weather Data</h2>
//           <pre>{JSON.stringify(historicalData, null, 2)}</pre> {/* Display historical data */}
//         </div>
//       )}

//       {forecastData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Ag-Weather Forecast Data</h2>
//           <pre>{JSON.stringify(forecastData, null, 2)}</pre> {/* Display forecast data */}
//         </div>
//       )}

//       {airQualityData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Current Air Quality Data</h2>
//           <pre>{JSON.stringify(airQualityData, null, 2)}</pre> {/* Display air quality data */}
//         </div>
//       )}

//       {soilData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Soil Data</h2>
//           <pre>{JSON.stringify(soilData, null, 2)}</pre> {/* Display soil data */}
//         </div>
//       )}

//       {soilTypeData && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Soil Type Data</h2>
//           <pre>{JSON.stringify(soilTypeData, null, 2)}</pre> {/* Display soil type data */}
//         </div>
//       )}

//       {cropPrediction && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>Crop Prediction</h2>
//           <pre>{JSON.stringify(cropPrediction, null, 2)}</pre> {/* Display crop prediction data */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function App() {
  const [query, setQuery] = useState(''); // State for the search query
  const [suggestions, setSuggestions] = useState([]);
  const [locationData, setLocationData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);
  const [soilData, setSoilData] = useState(null);
  const [soilTypeData, setSoilTypeData] = useState(null);
  const [cropPrediction, setCropPrediction] = useState(null); // State for crop prediction data
  const [error, setError] = useState(null);
  const [isSoilDataFetched, setIsSoilDataFetched] = useState(false); // State to track if soil data is fetched

  // Function to fetch soil data using latitude and longitude
  const fetchSoilData = async (lat, lon) => {
    try {
      const response = await axios.get('/api/soil-property/', {
        params: {
          lat,
          lon,
          depths: [
            '0-5cm', '0-30cm', '5-15cm', '15-30cm', '30-60cm', '60-100cm', '100-200cm'
          ],
          properties: [
            'bdod', 'cec', 'cfvo', 'clay', 'nitrogen', 'ocd', 'ocs', 'phh2o',
            'sand', 'silt', 'soc', 'wv0010', 'wv0033', 'wv1500'
          ],
          values: ['Q0.5', 'Q0.05', 'Q0.95', 'mean', 'uncertainty']
        }
      });
      console.log('Soil Data:', response.data); // Log soil data
      setSoilData(response.data);
      setIsSoilDataFetched(true); // Set to true once soil data is fetched
    } catch (error) {
      console.error('Error fetching soil data:', error);
      setError('Error fetching soil data');
    }
  };

  const fetchSoilTypeData = async (lat, lon, top_k = 1) => {
    try {
      const response = await axios.get('/api/soil-type/', {
        params: { lat, lon, top_k }
      });
      console.log('Soil Type Data:', response.data); // Log soil type data
      setSoilTypeData(response.data);
    } catch (error) {
      console.error('Error fetching soil type data:', error);
      setError('Error fetching soil type data');
    }
  };
  

  // Function to fetch crop prediction using soil data
  const fetchCropPrediction = async (lat, lon) => {
    try {
      const response = await axios.post('/api/crop-prediction/', {
        latitude: lat,
        longitude: lon,
        // Example static values, you can replace them with dynamic inputs if necessary
        N: 90,
        P: 42,
        K: 43,
        temperature: 20.87,
        humidity: 82.00,
        ph: 6.50,
        rainfall: 202.93,
      });
      console.log('Crop Prediction Data:', response.data); // Log crop prediction data
      setCropPrediction(response.data);
    } catch (error) {
      console.error('Error fetching crop prediction data:', error);
      setError('Error fetching crop prediction data');
    }
  };

  // Function to fetch location data using latitude and longitude
  const getLocationData = async (lat, lon) => {
    try {
      const response = await axios.post('/api/location/', {
        latitude: lat,
        longitude: lon,
      });
      console.log('Location Data:', response.data); // Log the data here
      setLocationData(response.data);

      // Fetch Historical Ag-Weather Data
      fetchHistoricalAgWeather(lat, lon);

      // Fetch Ag-Weather Forecast Data
      fetchAgWeatherForecast(lat, lon);

      // Fetch Current Air Quality Data
      fetchCurrentAirQuality(lat, lon);

      // Fetch Soil Data
      fetchSoilData(lat, lon);

      // Fetch Soil Type Data
      fetchSoilTypeData(lat, lon);

    } catch (error) {
      console.error('Error fetching location data:', error);
      setError('Error fetching location data');
    }
  };

  const fetchHistoricalAgWeather = async (lat, lon) => {
    try {
      const startDate = '2024-08-09'; // Example start date
      const endDate = '2024-08-10'; // Example end date
      const response = await axios.get('/api/historical-ag-weather/', {
        params: {
          lat,
          lon,
          start_date: startDate,
          end_date: endDate
        }
      });
      console.log('Historical Ag-Weather Data:', response.data); // Log historical data
      setHistoricalData(response.data);
    } catch (error) {
      console.error('Error fetching historical ag-weather data:', error);
      setError('Error fetching historical ag-weather data');
    }
  };

  const fetchAgWeatherForecast = async (lat, lon) => {
    try {
      const response = await axios.get('/api/ag-weather-forecast/', {
        params: {
          lat,
          lon,
        }
      });
      console.log('Ag-Weather Forecast Data:', response.data); // Log forecast data
      setForecastData(response.data);
    } catch (error) {
      console.error('Error fetching ag-weather forecast data:', error);
      setError('Error fetching ag-weather forecast data');
    }
  };

  const fetchCurrentAirQuality = async (lat, lon) => {
    try {
      const response = await axios.get('/api/current-air-quality/', {
        params: { lat, lon }
      });
      console.log('Current Air Quality Data:', response.data); // Log air quality data
      setAirQualityData(response.data);
    } catch (error) {
      console.error('Error fetching air quality data:', error);
      setError('Error fetching air quality data');
    }
  };

  useEffect(() => {
    const latitude = Cookies.get('latitude');
    const longitude = Cookies.get('longitude');

    if (latitude && longitude) {
      console.log('Fetching location from cookies:', latitude, longitude);
      getLocationData(latitude, longitude);
    }
  }, []);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length > 2) {  // Trigger search only if query length is more than 2 characters
        try {
          const response = await axios.get(`/api/autocomplete?q=${query}`);
          console.log('Response:', response); // Log the response
          setSuggestions(response.data);
        } catch (error) {
          console.error('Error fetching location data:', error);
          setError('Error fetching location data');
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions(); // Fetch suggestions when query changes
  }, [query]);

  const handleSuggestionClick = async (suggestion) => {
    await getLocationData(suggestion.lat, suggestion.lon);

    Cookies.set('latitude', suggestion.lat);
    Cookies.set('longitude', suggestion.lon);
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getLocationData(latitude, longitude);

          Cookies.set('latitude', latitude);
          Cookies.set('longitude', longitude);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setError('User denied the request for Geolocation.');
              break;
            case error.POSITION_UNAVAILABLE:
              setError('Location information is unavailable.');
              break;
            case error.TIMEOUT:
              setError('The request to get user location timed out.');
              break;
            case error.UNKNOWN_ERROR:
              setError('An unknown error occurred.');
              break;
            default:
              setError('An unknown error occurred.');
              break;
          }
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  const renderAddress = (address) => {
    if (typeof address === 'object') {
      const { road, city, town, village, state, postcode, country } = address;
      return `${road || ''}, ${city || town || village || ''}, ${state || ''}, ${postcode || ''}, ${country || ''}`.trim();
    }
    return address || 'N/A';
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Location, Air Quality, and Agricultural Weather Information</h1>

      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type an address..."
        />
      </div>

      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: '20px' }}>
        <button onClick={handleGetLocation}>Get My Location</button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {locationData && (
        <div style={{ marginTop: '20px' }}>
          <h2>Location Data</h2>
          <p><strong>Address:</strong> {renderAddress(locationData.address)}</p>
          <p><strong>City:</strong> {locationData.city || locationData.district || 'N/A'}</p>
          <p><strong>State:</strong> {locationData.state || 'N/A'}</p>
          <p><strong>Country:</strong> {locationData.country || 'N/A'}</p>
        </div>
      )}

      {historicalData && (
        <div style={{ marginTop: '20px' }}>
          <h2>Historical Ag-Weather Data</h2>
          <pre>{JSON.stringify(historicalData, null, 2)}</pre>
        </div>
      )}

      {forecastData && (
        <div style={{ marginTop: '20px' }}>
          <h2>Ag-Weather Forecast Data</h2>
          <pre>{JSON.stringify(forecastData, null, 2)}</pre>
        </div>
      )}

      {airQualityData && (
        <div style={{ marginTop: '20px' }}>
          <h2>Current Air Quality Data</h2>
          <pre>{JSON.stringify(airQualityData, null, 2)}</pre>
        </div>
      )}

      {soilData && (
        <div style={{ marginTop: '20px' }}>
          <h2>Soil Data</h2>
          <pre>{JSON.stringify(soilData, null, 2)}</pre>
        </div>
      )}

      {soilTypeData && (
        <div style={{ marginTop: '20px' }}>
          <h2>Soil Type Data</h2>
          <pre>{JSON.stringify(soilTypeData, null, 2)}</pre>
        </div>
      )}

      {isSoilDataFetched && (
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => fetchCropPrediction(Cookies.get('latitude'), Cookies.get('longitude'))}>
            Predict Crop
          </button>
        </div>
      )}

      {cropPrediction && (
        <div style={{ marginTop: '20px' }}>
          <h2>Crop Prediction</h2>
          <pre>{JSON.stringify(cropPrediction, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
