// Filters.jsx
import React from 'react';
 
const Filters = ({
  selectedCrop,
  setSelectedCrop,
  selectedLocation,
  setSelectedLocation,
  cropQuality,
  setCropQuality,
  gdpChecked,
  setGdpChecked,
  realTimePriceChecked,
  setRealTimePriceChecked,
  logisticsChecked,
  setLogisticsChecked,
  storageAvailabilityChecked,
  setStorageAvailabilityChecked,
  
}) => {


  return (
    <div className="bg-gray-400 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Commodity Filter</h2>

      {/* Crop selection */}
      <div className="mb-4 mt-4">
        <label htmlFor="dropdownOption">
          Crops
          <select
            id="dropdownOption"
            className="ml-2 px-2 py-1 border border-gray-300"
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
          >
            <option value="Ginger">Ginger</option>
            <option value="Tumeric">Tumeric</option>
            <option value="Maize">Maize</option>
            <option value="Cocoa">Cocoa</option>
            <option value="Millet">Millet</option>
          </select>
        </label>
      </div>

      {/* Location selection */}
      <div className="mb-4 mt-4">
        <label htmlFor="locationDropdown">
          Location
          <select
            id="locationDropdown"
            className="ml-2 px-2 py-1 border border-gray-300"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="North Central">North Central</option>
            <option value="North East">North East</option>
            <option value="North West">North West</option>
            <option value="South West">South West</option>
            {/* Add more options as needed */}
          </select>
        </label>
      </div>

      {/* Crop Quality slider */}
      <div className="mb-4 mt-4">
        <label htmlFor="slider1">Crop Quality</label>
        <input
          id="slider1"
          type="range"
          min="0"
          max="100"
          step="1"
          className="w-full"
          value={cropQuality}
          onChange={(e) => setCropQuality(e.target.value)}
        />
        <div className="flex justify-between mt-1">
          <span className="text-xs text-gray-500">Min</span>
          <span className="text-xs text-gray-500">Median</span>
          <span className="text-xs text-gray-500">Max</span>
        </div>
      </div>

      {/* Checkbox options */}
      <div className="mb-4">
        <label htmlFor="gdpCheckbox">
          <input
            type="checkbox"
            id="gdpCheckbox"
            className="mr-2"
            checked={gdpChecked}
            onChange={() => setGdpChecked(!gdpChecked)}
          />
          GDP
        </label>
      </div>

      <div className="mb-4">
        <label htmlFor="realTimePriceCheckbox">
          <input
            type="checkbox"
            id="realTimePriceCheckbox"
            className="mr-2"
            checked={realTimePriceChecked}
            onChange={() => setRealTimePriceChecked(!realTimePriceChecked)}
          />
          Real-Time Price
        </label>
      </div>

      <div className="mb-4">
        <label htmlFor="logisticsCheckbox">
          <input
            type="checkbox"
            id="logisticsCheckbox"
            className="mr-2"
            checked={logisticsChecked}
            onChange={() => setLogisticsChecked(!logisticsChecked)}
          />
          Logistics
        </label>
      </div>

      <div className="mb-4">
        <label htmlFor="storageAvailabilityCheckbox">
          <input
            type="checkbox"
            id="storageAvailabilityCheckbox"
            className="mr-2"
            checked={storageAvailabilityChecked}
            onChange={() => setStorageAvailabilityChecked(!storageAvailabilityChecked)}
          />
          Storage Availability
        </label>
      </div>
    </div>
  );
};

export default Filters;
