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
import Noida from "./pages/Noida";
import Dholera from "./pages/Dholera";
import Vrindavan from "./pages/Vrindavan";
import Mumbai from "./pages/Mumbai";
import DelhiNCR from "./pages/DelhiNCR";
import RealEstateServices from "./components/MaterialAdd";
import ResidentialRentals from "./pages/ResidentialRental";
import PropertyPurchase from "./pages/PropertyPurchase";
import BuilderPartnerships from "./pages/BuilderPartner";
import InteriorDesign from "./pages/InteriorDesign";
import InsightsTools from "./components/Insight";
import EMICalculator from "./pages/Emi";
import AreaConverter from "./pages/AreaConverter";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

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
                            <PropertyCategories />
                            <PropertyDealsCarousel />
                            <RealEstateServices />
                            <InsightsTools />


                        </>
                    } />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/listings" element={<Listings />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />}/>
                    {/* For the location */}
                    <Route path="/" element={<PropertyCategories />} />
                    {/* <Route path="/location/:location" element={<LocationDetail />} /> */}
                    <Route path="/location/noida" element={<Noida />} />
                    <Route path="/location/dholera" element={<Dholera />} />
                    <Route path="/location/vrindavan" element={<Vrindavan />} />
                    <Route path="/location/mumbai" element={<Mumbai />} />
                    <Route path="/location/delhincr" element={<DelhiNCR />} />

                    <Route path="/" element={<RealEstateServices />} />
                    {/* Individual Service Routes */}
                    <Route path="/residential-rentals" element={<ResidentialRentals />} />
                    <Route path="/property-purchase" element={<PropertyPurchase />} />
                    <Route path="/builder-partnerships" element={<BuilderPartnerships />} />
                    <Route path="/interior-design" element={<InteriorDesign />} />

                    <Route path="/emi" element={< EMICalculator />}/>
                    <Route path="/area-converter" element={<AreaConverter />}/>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
