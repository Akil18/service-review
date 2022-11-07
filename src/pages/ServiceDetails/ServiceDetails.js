import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
   const service = useLoaderData();
   const { name, price, description, picture } = service;

   const handleReviewSubmit = (event) => {
      event.preventDefault();
      const review = event.target.review.value;
      console.log(review);
   };

   return (
      <div>
         <h1 className="text-5xl font-bold mt-12">{name}</h1>
         <div className="flex justify-between">
            <img src={picture} alt={name} className="" />
            <div>
               <p>{description}</p>
               <p>Price: {price} lacs</p>
               {
                  <form onSubmit={handleReviewSubmit}>
                     <input
                        name="review"
                        type="text"
                        placeholder="Type here..."
                        className="input input-bordered w-full max-w-xs"
                     />
                     <input type="submit" className="btn" value="Add Review" />
                  </form>
               }
            </div>
         </div>
      </div>
   );
};

export default ServiceDetails;
