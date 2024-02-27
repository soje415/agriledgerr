// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    
    <div>
      <div className="p-7">
      <h1 className="text-5xl font-semibold">Real <br />Commodity <br /> Prices on <br /><span className="text-purple">Solana</span></h1>
      <h2 className="text-sm font-semibold">Optimizing Commodity <br />trade flow by using <br />Blockchain and <br />Satellite data</h2>

      </div>

           <div class="map-container bg-gray-200  mt-0 top-0 center-0 w-20rem h-70vh mx-auto" style={{ maxWidth: '500px', maxHeight: '500px' }}>
            <iframe
              title="Your Map"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://your-map-url.com"
            ></iframe>
          </div>

           

      {/* Filters Section */}
      <div className="container items-start mx-auto fixed mt-0 p-10 top-8 flex justify-end">
        <div className="bg-gray-400 p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Commodity Filter</h2>

          

        <div className="mb-4 mt-4">
            <label htmlFor="dropdownOption">
              Crops
              <select id="dropdownOption" className="ml-2 px-2 py-1 border border-gray-300">
                <option value="option1">Ginger</option>
                <option value="option2">Tumeric</option>
                <option value="option3">Maize</option>
                <option value="option3">Cocoa</option>
                <option value="option3">Millet</option>
              </select>
            </label>
          </div>

    {/* Location dropdown */}
    <div className="mb-4 mt-4">
      <label htmlFor="dropdownOption">
        Location
        <select id="dropdownOption" className="ml-2 px-2 py-1 border border-gray-300">
          <option value="option1">North Central</option>
          <option value="option2">North East</option>
          <option value="option3">North West</option>
          <option value="option3">South West</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
    </div>

    <div className="mb-4 mt-4">
  <label htmlFor="slider1">Crop Quality</label>
  <input
    id="slider1"
    type="range"
    min="0"
    max="100"
    step="1"
    className="w-full"
  />
  <div className="flex justify-between mt-1">
    <span className="text-xs text-gray-500">Min</span>
    <span className="text-xs text-gray-500">Median</span>
    <span className="text-xs text-gray-500">Max</span>
  </div>
</div>


<div className="mb-4">
            <label htmlFor="checkboxOption1">
             <input type="checkbox" id="checkboxOption1" className="mr-2" />
               GDP
              </label>
            </div>

            <div className="mb-4">
            <label htmlFor="checkboxOption1">
             <input type="checkbox" id="checkboxOption1" className="mr-2" />
               Real-Time Price
              </label>
            </div>

            <div className="mb-4">
            <label htmlFor="checkboxOption1">
             <input type="checkbox" id="checkboxOption1" className="mr-2" />
               Logistics
              </label>
            </div>

            <div className="mb-4">
            <label htmlFor="checkboxOption1">
             <input type="checkbox" id="checkboxOption1" className="mr-2" />
               Storage Availability
              </label>
            </div>

    

    {/* Add more filters as needed */}

    {/* Button to navigate to another page */}
    <Link to="/bookmark">
      <button className="bg-purple px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 mr-2">
        Bookmark
      </button>
    </Link>
  </div>
</div>

    </div>
  );
};

export default HomePage;
