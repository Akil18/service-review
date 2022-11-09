import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Gallery from "../../components/Gallery";
import ServiceCard from "../../components/ServiceCard";
import WorkPhases from "../../components/WorkPhases";

const Home = () => {
   const [services, setServices] = useState([]);

   useEffect(() => {
      fetch(`https://service-review-app-server-side.vercel.app/servicesinHome`)
         .then((res) => res.json())
         .then((data) => setServices(data));
   }, []);

   return (
      <div>
         <div className="flex justify-evenly text-4xl font-bold px-44 py-8">
            <h1>MODERN</h1>
            <h1>.</h1>
            <h1>ERGONOMIC</h1>
            <h1>.</h1>
            <h1>DESIGN</h1>
         </div>
         <div className="flex justify-center px-8">
            <img
               className="w-full h-screen"
               src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
               alt="banner-img"
            />
         </div>
         <div className="bg-gray-200 mt-16 pt-2 pb-8 px-8">
            <div className="grid grid-cols-3 justify-between gap-4 py-8">
               {services.map((service) => (
                  <ServiceCard key={service._id} service={service}></ServiceCard>
               ))}
            </div>
            <Link to="/services">
               <button className="btn btn-outline rounded-none w-72">See All</button>
            </Link>
         </div>
         <WorkPhases></WorkPhases>
         <Gallery></Gallery>
      </div>
   );
};

export default Home;
