import React from 'react';

const ReviewCard = ({givenReview, handleBtnClick}) => {
    const { _id, review, serviceName } = givenReview;

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                handleBtnClick("Deleted Successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="card bg-base-100 shadow-xl p-8">
            <h1 className="text-2xl font-semibold py-4">{serviceName}</h1>
            <p>{review}</p>
            <div className="flex justify-center gap-4 mt-4">
                <button className="btn btn-primary w-32">Edit</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-error w-32">Delete</button>
            </div>
         </div>
    );
};

export default ReviewCard;