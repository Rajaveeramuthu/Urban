import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react'; // Adjust if using a different icon library
import Contacting from '../../assets/Contact us.gif';

export default function Contact() {
  return (
    <div className="bg-white p-4 md:p-8">
      
      <div className="flex flex-col lg:flex-row justify-center items-center">
        {/* Left Side - Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
          <img
            src={Contacting}
            alt="Contact Us"
            className="w-8/12 lg:w-10/12 h-auto"
          />
        </div>

        {/* Right Side - Contact Details */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6 pl-4 lg:pl-10">
         

          <div className="space-y-10">
            {/* Address */}
            <div className="flex items-start space-x-4 ">
              <MapPin className="text-blue-600 w-6 h-6" />
              <div>
                <h3 className="text-2xl font-medium ">Address</h3>
                <p className="text-sm text-gray-600">
                  Vasuki Street Number 1, Brough Rd, Chennai, Tamil Nadu 638001
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <Phone className="text-blue-600 w-6 h-6" />
              <div>
                <h3 className="text-2xl font-medium">Phone</h3>
                <p className="text-sm text-gray-600">+91-9876543211</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <Mail className="text-blue-600 w-6 h-6" />
              <div>
                <h3 className="text-2xl font-medium">Email</h3>
                <p className="text-sm text-gray-600">abcd123@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
