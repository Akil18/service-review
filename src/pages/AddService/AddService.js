import React from "react";

const AddService = ({handleBtnClick}) => {
   
   const handleNewServiceSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const newService = {
         name: form.name.value,
         description: form.description.value,
         picture: form.picture.value,
         price: form.price.value
      }
      fetch("https://service-review-app-server-side.vercel.app/services", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(newService),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if(data.acknowledged){
               handleBtnClick("Service Added Successfully");
               form.reset();
            }
         })
         .catch((error) => {
            console.log(error);
         });
   }

   return (
      <div>
         <h1 className="text-5xl font-bold my-12">Add A New Service</h1>
         <form className="pl-16 py-4 text-left" onSubmit={handleNewServiceSubmit}>
            <div className="flex flex-col">
               <label htmlFor="name">Service Name</label>
               <input className="border-2 p-2 w-3/5 mb-4" type="text" name="name" id="name" placeholder="Enter Service Name" required/>
            </div>
            <div className="flex flex-col">
               <label htmlFor="price">Price</label>
               <input className="border-2 p-2 w-3/5 mb-4" type="number" step="0.1" name="price" id="price" placeholder="Enter Price" required/>
            </div>
            <div className="flex flex-col">
               <label htmlFor="description">Description</label>
               <textarea className="border-2 p-2 w-3/5 mb-4" name="description" id="description" cols="30" rows="5" placeholder="Enter Description" required></textarea>
            </div>
            <div className="flex flex-col">
               <label htmlFor="picture">Picture</label>
               <input className="border-2 p-2 w-3/5 mb-4" type="text" name="picture" id="picture" placeholder="Enter Picture URL" required/>
            </div>
            <input type="submit" className="btn btn-primary" value="Add Service" />
         </form>
      </div>
   );
};

export default AddService;
