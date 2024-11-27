import React, { useState } from 'react';
import { MapPin, Upload, ChevronDown } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function ReportIssueForm() {
  const [category, setCategory] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [photo, setPhoto] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // EmailJS configuration
    const serviceId = 'service_pyi0c1q'; // Correct Service ID
    const templateId = 'template_h70q8te'; // Correct Template ID
    const userId = 'we7SLFkrAGL-xRQ9l'; // Correct Public Key / User ID
    
    const formData = {
      category,
      description,
      location,
      photo: photo ? photo.name : 'No photo uploaded',
    };

    emailjs.send(serviceId, templateId, formData, userId)
      .then(() => {
        setIsSubmitted(true);  // Show success message after submission
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className="mt-24 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-1">Report an Issue</h1>
      <p className="text-sm text-gray-600 mb-6">
        Help us maintain our city by reporting maintenance issues.
      </p>

      {!isSubmitted ? (
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Issue Category */}
          <div className="space-y-2">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Issue Category
            </label>
            <div className="relative">
              <button
                type="button"
                className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {category || 'Select a category'}
                <ChevronDown className="h-5 w-5 text-gray-400 absolute right-2 top-2" />
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto sm:text-sm">
                  {['Roads', 'Parks', 'Buildings', 'Lighting', 'Waste'].map((option) => (
                    <div
                      key={option}
                      className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-blue-100"
                      onClick={() => handleCategoryChange(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Please describe the issue in detail..."
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location Address
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 pl-10 pr-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter the nearest address or landmark"
              />
            </div>
          </div>

          {/* Upload Photo */}
          <div className="space-y-2">
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
              Upload Photo
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="photo"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="photo"
                      name="photo"
                      type="file"
                      className="sr-only"
                      onChange={(e) => setPhoto(e.target.files[0])}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Report
          </button>
        </form>
      ) : (
        <div className="text-center text-green-600">
          <h2 className="text-2xl font-semibold mb-4">Thank you!</h2>
          <p>Your issue has been reported successfully.</p>
        </div>
      )}
    </div>
  );
}
