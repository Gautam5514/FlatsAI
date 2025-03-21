import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-green-300 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl text-black font-bold mb-4">Real Estate Co.</h3>
                        <p className="text-red-700">
                            Your trusted partner in finding the perfect home. We specialize in residential, commercial, and rental properties.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-lg text-black font-semibold mb-4">Quick Links</h4>
                        <ul className="text-red-700">
                            <li className="mb-2"><a href="/about" className="hover:text-white">About Us</a></li>
                            <li className="mb-2"><a href="/listings" className="hover:text-white">Listings</a></li>
                            <li className="mb-2"><a href="/services" className="hover:text-white">Services</a></li>
                            <li className="mb-2"><a href="/contact" className="hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-lg text-black font-semibold mb-4">Contact Info</h4>
                        <ul className="text-red-700">
                            <li className="mb-2"> Sector 2, Greater Noida West, Uttar Pradesh, India</li>
                            <li className="mb-2">Phone: +91 9031036321</li>
                            <li className="mb-2">Email: info@realestateco.com</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-lg text-black font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="text-blue-400 hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com" className="text-blue-500 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://instagram.com" className="text-red-400 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://linkedin.com" className="text-blue-700 hover:text-white">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t text-black border-gray-700 mt-8 pt-8 text-center ">
                    <p>&copy; {new Date().getFullYear()} FlatsAI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;