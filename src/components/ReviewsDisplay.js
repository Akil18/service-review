import React, { useEffect, useState } from 'react';

const ReviewsDisplay = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {
                reviews.map(rev => 
                    <div key={rev._id} className="flex p-4 items-center gap-4">
                        <div className="bg-base-300 w-4/5 rounded-box py-4">{rev.review}</div>
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={rev.photoUrl} alt={rev.name} />
                            </div>
                        </div>
                        <span>{rev.name}</span>
                    </div> 
                )
            }
        </div>
    );
};

export default ReviewsDisplay;