import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://service-review-app-server-side.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                const imagesArray = data.map(service => service.picture);
                console.log(imagesArray, data);
                setImages(imagesArray);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="bg-gray-700 py-16 mb-8">
            <h1 className="text-5xl font-bold mb-12 text-gray-50">Gallery</h1>
            <div className="carousel">
                {
                images.map((image, idx) => {
                    return (
                        <div key={idx} className="carousel-item">
                            <img className="w-full h-72 mx-4 border-2" src={image} alt="service-img" />
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
};

export default Gallery; 