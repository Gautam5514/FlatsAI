import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
    const [selectedType, setSelectedType] = useState('Type');
    const [keywords, setKeywords] = useState('');
    const [showTypeDropdown, setShowTypeDropdown] = useState(false);

    const propertyTypes = [
        'Type',
        'Apartment',
        'House',
        'Villa',
        'Condo',
        'Office',
        'Land'
    ];

    const handleSearch = () => {
        console.log('Searching for:', { type: selectedType, keywords });
        // Add your search logic here
    };

    return (
        <div className="w-full bg-green-200 py-4 px-2 sm:px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-full shadow-md flex flex-wrap sm:flex-nowrap items-center justify-between p-2">
                {/* Type Dropdown */}
                <div className="relative w-full sm:w-auto">
                    <button
                        onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                        className="px-4 py-2 text-gray-700 flex items-center justify-between w-full sm:w-[120px] rounded-lg border border-gray-300 bg-white"
                    >
                        <span>{selectedType}</span>
                        <svg
                            className="ml-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    {showTypeDropdown && (
                        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-full sm:w-[120px]">
                            {propertyTypes.map((type) => (
                                <div
                                    key={type}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                                    onClick={() => {
                                        setSelectedType(type);
                                        setShowTypeDropdown(false);
                                    }}
                                >
                                    {type}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Divider (Hidden on Small Screens) */}
                <div className="hidden sm:block h-6 w-px bg-gray-300 mx-2" />

                {/* Keywords Input */}
                <input
                    type="text"
                    placeholder="Enter Keywords"
                    className="flex-grow px-4 py-2 focus:outline-none text-gray-700 rounded-lg border border-gray-300 w-full sm:w-auto mt-2 sm:mt-0"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                />

                {/* Filters Button (Hidden on Small Screens) */}
                <button className="hidden sm:block px-6 py-2 text-gray-700 hover:text-gray-900 font-medium mr-1">
                    Filters
                </button>

                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center w-full sm:w-auto mt-2 sm:mt-0"
                >
                    <Search className="mr-2 w-5 h-5" />
                    <span>Search</span>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;



















// import React, { useState, useEffect, useRef } from 'react';
// import { Search, Mic, MapPin } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const SearchBar = () => {
//     const [selectedType, setSelectedType] = useState('Type');
//     const [keywords, setKeywords] = useState('');
//     const [showTypeDropdown, setShowTypeDropdown] = useState(false);
//     const [location, setLocation] = useState('');
//     const [previousSearches, setPreviousSearches] = useState([]);
//     const dropdownRef = useRef(null);

//     const propertyTypes = [
//         'Type', 'Apartment', 'House', 'Villa', 'Condo', 'Office', 'Land'
//     ];

//     // Voice Search
//     const startVoiceInput = () => {
//         if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
//             const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//             const recognition = new SpeechRecognition();
//             recognition.lang = 'en-US';
//             recognition.start();

//             recognition.onresult = (event) => {
//                 const voiceText = event.results[0][0].transcript;
//                 setKeywords(voiceText);
//             };
//         } else {
//             alert("Speech Recognition not supported on this browser.");
//         }
//     };

//     // Get Current Location
//     const getCurrentLocation = () => {
//         if ('geolocation' in navigator) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const { latitude, longitude } = position.coords;
//                     setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
//                 },
//                 (error) => alert("Location access denied.")
//             );
//         } else {
//             alert("Geolocation not supported by your browser.");
//         }
//     };

//     const handleSearch = () => {
//         const searchData = { type: selectedType, keywords, location };
//         console.log('Smart searching for:', searchData);

//         const history = [...previousSearches, searchData];
//         setPreviousSearches(history.slice(-5)); // Keep last 5
//         // Add your search logic here
//     };

//     // Close dropdown when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setShowTypeDropdown(false);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     return (
//         <div className="w-full bg-green-100 py-4 px-3 sm:px-6 md:px-8">
//             <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-4 md:p-6 flex flex-col sm:flex-row items-stretch gap-4">
                
//                 {/* Type Dropdown */}
//                 <div className="relative sm:w-1/4" ref={dropdownRef}>
//                     <button
//                         onClick={() => setShowTypeDropdown(!showTypeDropdown)}
//                         className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg flex justify-between items-center"
//                         aria-haspopup="true"
//                         aria-expanded={showTypeDropdown}
//                     >
//                         <span className="truncate">{selectedType}</span>
//                         <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                         </svg>
//                     </button>

//                     <AnimatePresence>
//                         {showTypeDropdown && (
//                             <motion.div
//                                 initial={{ opacity: 0, y: -10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -10 }}
//                                 className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10"
//                             >
//                                 {propertyTypes.map((type) => (
//                                     <div
//                                         key={type}
//                                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
//                                         onClick={() => {
//                                             setSelectedType(type);
//                                             setShowTypeDropdown(false);
//                                         }}
//                                     >
//                                         {type}
//                                     </div>
//                                 ))}
//                             </motion.div>
//                         )}
//                     </AnimatePresence>
//                 </div>

//                 {/* Keywords Input + Voice */}
//                 <div className="flex flex-grow relative">
//                     <input
//                         type="text"
//                         placeholder="Search keywords"
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
//                         value={keywords}
//                         onChange={(e) => setKeywords(e.target.value)}
//                     />
//                     <button
//                         onClick={startVoiceInput}
//                         className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-blue-600"
//                         title="Voice Search"
//                     >
//                         <Mic className="w-5 h-5" />
//                     </button>
//                 </div>

//                 {/* Location Button */}
//                 <button
//                     onClick={getCurrentLocation}
//                     className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex items-center justify-center"
//                     title="Use Current Location"
//                 >
//                     <MapPin className="w-5 h-5 mr-1" />
//                     Location
//                 </button>

//                 {/* Search Button */}
//                 <button
//                     onClick={handleSearch}
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center whitespace-nowrap"
//                 >
//                     <Search className="mr-2 w-5 h-5" />
//                     <span className="text-sm font-semibold">Search</span>
//                 </button>
//             </div>

//             {/* Previous Searches */}
//             {previousSearches.length > 0 && (
//                 <div className="max-w-5xl mx-auto mt-3 px-2 text-sm text-gray-600">
//                     <strong>Previous Searches:</strong>
//                     <ul className="list-disc list-inside">
//                         {previousSearches.map((item, idx) => (
//                             <li key={idx}>
//                                 {item.type} — {item.keywords} {item.location && `— ${item.location}`}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SearchBar;
