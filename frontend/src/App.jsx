import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import PropertyCategories from "./components/PropertySections";
import PropertyDealsCarousel from "./components/PropertyDealsCarousel";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Listings from "./components/Listings";
import Members from "./components/Members";
import Blog from "./components/Blogs";
import LoginForm from "./pages/LoginForm";
// import LocationDetail from "./components/LocationDetail";
import Noida from "./pages/Noida";
import Dholera from "./pages/Dholera";
import Vrindavan from "./pages/Vrindavan";
import Mumbai from "./pages/Mumbai";
import DelhiNCR from "./pages/DelhiNCR";

function App() {
    return (
        <Router>
            <div className="font-sans bg-green-100 min-h-screen">
                <Navbar />
                <Routes>
                    {/* Home page with multiple components */}
                    <Route path="/" element={
                        <>
                            <HeroSection />
                            <SearchBar />
                            <PropertyDealsCarousel />
                            <PropertyCategories />

                        </>
                    } />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/listings" element={<Listings />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/login" element={<LoginForm />} />
                    {/* For the location */}
                    <Route path="/" element={<PropertyCategories />} />
                    {/* <Route path="/location/:location" element={<LocationDetail />} /> */}
                    <Route path="/location/noida" element={<Noida />} />
                    <Route path="/location/dholera" element={<Dholera />} />
                    <Route path="/location/vrindavan" element={<Vrindavan />} />
                    <Route path="/location/mumbai" element={<Mumbai />} />
                    <Route path="/location/delhincr" element={<DelhiNCR />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
