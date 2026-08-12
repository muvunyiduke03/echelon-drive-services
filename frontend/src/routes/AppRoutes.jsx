import {BrowserRouter, Routes, Route} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Services from "../pages/Services";
import AirportServices from "../pages/AirportServices";
import CorporateServices from "../pages/CorporateServices";
import DailyDriver from "../pages/DailyDriver";
import NightServices from "../pages/NightServices";

function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/airport-services" element={<AirportServices />}/>
          <Route path="services/corporate-services" element={<CorporateServices />}/>
          <Route path="/services/daily-driver" element={<DailyDriver />}/>
          <Route path="/services/night-services" element={<NightServices />}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;