import React, { useContext, useEffect, useState } from "react";
import ReviewCard from "../../components/ReviewCard";
import { AuthContext } from "../../contexts/UserContext";

const MyReviews = ({handleBtnClick}) => {
   const {user} = useContext(AuthContext);
   const [reviews, setReviews] = useState([]);

   useEffect(() => {
      fetch(`http://localhost:5000/reviews?email=${user.email}`)
         .then((res) => res.json())
         .then((data) => {
            setReviews(data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, [user?.email, reviews]);
   
   return (
      <div>
         {
            reviews ?
            <>
               <h1 className="text-5xl font-bold my-12">Reviews given</h1>
               <div className="grid grid-cols-3 justify-between gap-4 my-6">
                  {reviews.map((givenReview) => (
                     <ReviewCard key={givenReview._id} givenReview={givenReview} handleBtnClick={handleBtnClick}></ReviewCard>
                  ))}
               </div>
            </>
            :
               <h1 className="text-5xl font-bold my-12">No Reviews given</h1>
         }
      </div>
   );
};

export default MyReviews;
