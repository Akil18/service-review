import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const ServiceDetails = () => {
   const service = useLoaderData();
   const { _id, name, price, description, picture } = service;
   const {user} = useContext(AuthContext)

   const handleReviewSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const review = form.review.value;

      const addReview = {
         user: user.email,
         review,
         serviceId : _id
      }

      fetch("http://localhost:5000/reviews", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(addReview),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if(data.acknowledged){
               alert("Review Added Successfully");
               form.reset();
            }
         })
         .catch((error) => {
            console.log(error);
         });

   };

   return (
      <div>
         <h1 className="text-5xl font-bold my-12">{name}</h1>
         <div className="grid grid-cols-1 gap-8 justify-items-center px-8">
            <img src={picture} alt={name} className="" />
            <div className="px-32 grid grid-cols-1 gap-4 pb-32">
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
