import React, { useState, useEffect } from 'react';
import '../index.css';
import { Dropdown } from 'primereact/dropdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HotelCard = ({ hotel }) => {
  const generateRandomRatingsCount = () => Math.floor(Math.random() * 1000) + 1;

  const getReviewWord = (rating) => {
    if (rating >= 0 && rating < 1) {
      return 'Poor';
    } else if (rating >= 1 && rating < 2) {
      return 'Fair';
    } else if (rating >= 2 && rating < 3) {
      return 'Decent';
    } else if (rating >= 3 && rating < 4) {
      return 'Good';
    } else {
      return 'Very Good';
    }
  };

  return (
    <div className="hotel-card border border-gray-300 rounded-lg overflow-hidden flex">
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">{hotel.name}</h2>
          <div className="rating bg-blue-500 text-white px-2 py-1 rounded-md text-sm">
            {hotel.rating}
          </div>
        </div>
        <div className="mb-2">
          <p className="text-gray-600">{hotel.location.split(',')[0]}</p>
          <p className="text-green-500 text-sm">
            {hotel.amenities.map((amenity, index) => (
              <span key={index}>
                {amenity}
                {index !== hotel.amenities.length - 1 && ', '}
              </span>
            ))}
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-sm">
            {generateRandomRatingsCount()} ratings{' '}
            <span className="text-gray-600">
              {getReviewWord(hotel.rating)}
            </span>
          </p>
        </div>
        <div className="mt-auto">
          <p className="text-lg font-semibold">
            Avg. Cost Per Night: ${hotel.avgCostPerNight}
          </p>
          <p className="text-sm text-gray-600">
            Additional taxes and charges included
          </p>
        </div>
      </div>
      <div className="flex-1">
        <img
          src={hotel.images[0]}
          alt={hotel.name}
          className="w-full h-auto"
        />
        <div className="flex justify-between px-4 mt-2 space-x-1">
          {hotel.images.slice(1, 6).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={hotel.name}
              className="w-16 h-14 object-cover" // Increased size and added object-cover
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Hotels = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [cityOptions, setCityOptions] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [sortOption, setSortOption] = useState('rating'); // State for sorting option

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const projectId = 'YOUR_PROJECT_ID';
        const response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/city?limit=40`, {
          headers: {
            projectId: projectId
          }
        });
        const data = await response.json();
        const cities = data.data.cities.map(city => ({ label: city.cityState.split(',')[0], value: city.cityState.split(',')[0] }));
        setCityOptions(cities);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  useEffect(() => {
    if (selectedCity) {
      handleSearch();
    }
  }, [selectedCity, sortOption]); // Trigger search on city or sort option change

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${selectedCity}"}`, {
        headers: {
          projectId: 'YOUR_PROJECT_ID'
        }
      });
      const data = await response.json();
      const sortedHotels = sortHotels(data.data.hotels, sortOption);
      setHotels(sortedHotels);
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };

  const sortHotels = (hotels, option) => {
    if (option === 'rating') {
      return hotels.sort((a, b) => b.rating - a.rating);
    } else if (option === 'priceHigh') {
      return hotels.sort((a, b) => b.avgCostPerNight - a.avgCostPerNight);
    } else if (option === 'priceLow') {
      return hotels.sort((a, b) => a.avgCostPerNight - b.avgCostPerNight);
    }
    return hotels;
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleLogout = () => {
    toast.success('User logged out successfully');
    setTimeout(() => {
      window.location.href = '/home';
    }, 2000);
  };

  return (
    <div>
      <ToastContainer />
      <nav className="flex justify-between items-center bg-white p-4">
        <img 
          src="https://mir-s3-cdn-cf.behance.net/projects/404/3f767b75871141.Y3JvcCw4MDgsNjMyLDAsMA.png" 
          alt='mainlogo' 
          className="h-12" 
        />
        <div className="flex items-center space-x-4">
          <img 
            src="https://w7.pngwing.com/pngs/598/909/png-transparent-makemytrip-flight-travel-hotel-india-travel-thumbnail.png" 
            alt='logo'  
            className="h-12 w-12 rounded-full" 
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
      <div className="bg-blue-900 text-white py-8 flex justify-center">
        <div className="text-center">
          <label htmlFor="city" className="block mb-2 text-lg">City, Area or Property</label>
          <Dropdown 
            id="city" 
            value={selectedCity} 
            options={cityOptions} 
            onChange={(e) => setSelectedCity(e.value)} 
            placeholder="Select a City" 
            className="p-dropdown-sm w-64 mb-3" 
          />
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md transform transition-transform duration-300 hover:scale-105" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="bg-sky-100 text-black py-4 flex justify-center">
        <div className="text-center">
        <span className="px-4 py-2">Sort By:</span>
          <span className={`px-4 py-2 cursor-pointer ${sortOption === 'rating' ? 'border-b-2 border-black' : ''}`} onClick={() => handleSortChange('rating')}>
            User Rating
          </span>
          <span className={`px-4 py-2 cursor-pointer ${sortOption === 'priceHigh' ? 'border-b-2 border-black' : ''}`} onClick={() => handleSortChange('priceHigh')}>
            Price (Highest First)
          </span>
          <span className={`px-4 py-2 cursor-pointer ${sortOption === 'priceLow' ? 'border-b-2 border-black' : ''}`} onClick={() => handleSortChange('priceLow')}>
            Price (Lowest First)
          </span>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotels.length === 0 ? (
            <p className="text-center text-gray-600">No results to show for {selectedCity}</p>
          ) : (
            hotels.map((hotel) => (
              <HotelCard key={hotel._id} hotel={hotel} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Hotels;


