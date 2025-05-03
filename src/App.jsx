import { createRoot } from "react-dom/client";
import React from "react";
import "./App.css";
import Nav from './Components/Nav.jsx';
import Hero from './sections/Hero';
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import CustomersReviews from "./sections/CustomersReviews";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="relative">
      <Nav/>
      <Hero/>
      <section className="padding mt-5 "> <PopularProducts/> </section>
      <section className="padding">  <SuperQuality/> </section>
      <section className=""> <Services/> </section>
      <section className="padding"> <SpecialOffer/> </section>
      <section className='bg-gray-300 padding'> <CustomersReviews/> </section>
      <section className="padding-x sm:py-32 py-16"> <Subscribe/> </section>
      <section className="padding-x bg-black pb-8 text-amber-50 padding-t"> <Footer/> </section>
    </main>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
