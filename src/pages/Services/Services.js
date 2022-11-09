import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ServiceCard from "../../components/ServiceCard";

const Services = () => {
   const [services, setServices] = useState([]);

   useEffect(() => {
      fetch(`https://service-review-app-server-side.vercel.app/services`)
         .then((res) => res.json())
         .then((data) => setServices(data));
   }, []);

   return (
      <div>
         <Helmet>
            <title>Services | Scheme CTG</title>
         </Helmet>
         <h1 className="text-5xl font-bold mt-12">Services</h1>
         <div className="grid grid-cols-3 justify-between gap-4 my-6">
            {services.map((service) => (
               <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
         </div>
      </div>
   );
};

export default Services;
