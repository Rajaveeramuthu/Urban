import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../../../assets/u5.png'
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                src={Logo}
                                alt="logo"
                                className="h-12 w-auto" // Adjust the height as needed
                            />
                        </div>

                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="/" className="px-3 py-2 rounded-md text-xl font-medium hover:bg-gray-700">Home</a>
                            <a href="/aboutus" className="px-3 py-2 rounded-md text-xl font-medium hover:bg-gray-700">About us</a>
                            <a href="/report" className="px-3 py-2 rounded-md text-xl font-medium hover:bg-gray-700">Report</a>
                            <a href="/contactus" className="px-3 py-2 rounded-md text-xl font-medium hover:bg-gray-700">Contact Us</a>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</a>
                        <a href="/aboutus" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About Us</a>
                        <a href="report" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Report</a>
                        <a href="contactus" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact Us</a>
                    </div>
                </div>
            )}
        </nav>
    )
}