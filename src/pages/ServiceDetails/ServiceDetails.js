import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData} from "react-router-dom";
import ReviewsDisplay from "../../components/ReviewsDisplay";
import { AuthContext } from "../../contexts/UserContext";

const ServiceDetails = () => {
   const service = useLoaderData();
   const { _id, name, price, description, picture } = service;
   const {user} = useContext(AuthContext);
   const [users, setUsers] = useState([]);

   useEffect(() => {
      fetch("https://service-review-app-server-side.vercel.app/users")
         .then((res) => res.json())
         .then((data) => {
            setUsers(data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, [])

   const handleReviewSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const review = form.review.value;
      var username, photoUrl;

      if(user?.displayName === null){
         const currentUser = users.filter(usr => usr.email === user.email);
         console.log(currentUser);
         username = currentUser[0].name;
         photoUrl = currentUser[0].photoUrl;
      }
      else{
         username = user.displayName;
         photoUrl = user.photoURL;
      }

      const addReview = {
         name: username,
         photoUrl,
         email: user.email,
         review,
         serviceName: name,
         serviceId : _id
      }

      fetch("https://service-review-app-server-side.vercel.app/reviews", {
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
         <Helmet>
            <title>{name} | Scheme CTG</title>
         </Helmet>
         <h1 className="text-5xl font-bold my-12">{name}</h1>
         <div className="grid grid-cols-1 gap-8 justify-items-center px-8">
            <img src={picture} alt={name} className="" />
            <div className="px-32 grid grid-cols-1 gap-4 pb-32">
               <div className="border-2 p-8">
                  <p>{description}</p>
                  <p className="pt-4 font-bold">Price: {price} lacs</p>
               </div>
               <ReviewsDisplay serviceId={_id}></ReviewsDisplay>
               {
                  user?.uid ?
                     <>
                        <form className="flex" onSubmit={handleReviewSubmit}>
                           <input
                              name="review"
                              type="text"
                              placeholder="Type here..."
                              className="input input-bordered w-4/5 mr-4 rounded-none"
                           />
                           <input type="submit" className="btn" value="Add Review" />
                        </form>
                     </>
                  :
                     <p className="font-bold">Please <Link className="text-blue-500 hover:text-blue-100" to='/login'>Login</Link> to Add Review</p>
               }
            </div>
         </div>
      </div>
   );
};

export default ServiceDetails;
