import React from "react";
import { useLocation } from "react-router-dom";

const ServiceCard = ({ service }) => {
   const { _id, name, price, description, picture } = service;
   const location = useLocation();

   const shortDescription = description.slice(0, 100) + "...";

   console.log(name);
   return (
      <div className="card bg-base-100 shadow-xl">
         <figure className="px-10 pt-10">
            <img src={picture} alt={name} className="w-full h-64" />
         </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>Price: {price} lacs</p>
            <p>
               {location.pathname !== "/services"
                  ? shortDescription
                  : description}
            </p>
            <div className="card-actions">
               <button className="btn btn-primary">View Details</button>
            </div>
         </div>
      </div>
   );
};

export default ServiceCard;
