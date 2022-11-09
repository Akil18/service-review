import React from 'react';

const ReviewCard = ({givenReview, handleBtnClick}) => {
    const { _id, review, serviceName } = givenReview;

    const handleDelete = (id) => {
        fetch(`https://service-review-app-server-side.vercel.app/reviews/${id}`, {
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

    const handleUpdate = (id) => {
        const updatedReview = prompt("Enter your updated review");
        fetch(`https://service-review-app-server-side.vercel.app/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ review: updatedReview }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                handleBtnClick("Updated Successfully");
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
                <button onClick={() => handleUpdate(_id)} className="btn btn-primary w-32">Edit</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-error w-32">Delete</button>
            </div>
         </div>
    );
};

export default ReviewCard;