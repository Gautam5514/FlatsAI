import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import PropertyCategories from "./components/PropertySections";
import PropertyDealsCarousel from "./components/PropertyDealsCarousel";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Listings from "./components/Listings";
import Members from "./components/Members";
import Blog from "./components/Blogs";



function App() {
    return (
        <div className="font-sans bg-green-100 min-h-screen">
            <Navbar />
            <HeroSection />
            <SearchBar />
            <PropertyCategories />
            <PropertyDealsCarousel />
            <ContactUs />
            <Blog />
            <Footer />
            <AboutUs />
            <Services />
            <Listings />
            <Members />
        </div>
    );
}

export default App;
