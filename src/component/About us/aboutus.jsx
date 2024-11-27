import React from "react";

const AboutUs = () => {
    return (
        <div className="bg-gray-50 p-10">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
                <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                    At Urban Maintenance Notifier, our mission is to empower residents by providing timely information about urban maintenance issues, including street repairs, waste management, park maintenance, and more. We aim to create a responsive and proactive approach to urban upkeep, ensuring that every community member has a voice in the maintenance of their surroundings.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                    <img
                        src="https://tse3.mm.bing.net/th?id=OIP.-dFaXq42LkJQfSYxFvsuvAHaE6&pid=Api&P=0&h=180" // Placeholder for Walmart building image
                        alt="Our Business"
                        className="w-full h-96 object-cover rounded-lg shadow-lg" 
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-white text-xl font-bold">Our Business</h2> 
                    </div>
                </div>
                <div className="relative">
                    <img
                        src="https://thumbs.dreamstime.com/b/broken-traffic-lights-post-near-road-179759490.jpg" // Placeholder for location facts image
                        alt="Location Facts"
                        className="w-full h-96 object-cover rounded-lg shadow-lg" 
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-white text-xl font-bold">Location Facts</h2> {/* Reduced text size */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
