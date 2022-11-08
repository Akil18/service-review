import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Register = () => {
   const { createUser } = useContext(AuthContext);

   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const fullName = form.fullName.value;
      const photoUrl = form.photoUrl.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(fullName, photoUrl, email, password);

      createUser(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
         })
         .catch((error) => {
            console.error(error);
         });
   };

   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
               <div className="text-center">
                  <h1 className="text-5xl font-bold">Register</h1>
               </div>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleSubmit} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Full Name</span>
                        </label>
                        <input
                           type="text"
                           name="fullName"
                           placeholder="Full Name"
                           className="input input-bordered"
                           required
                        />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Photo URL</span>
                        </label>
                        <input
                           type="text"
                           name="photoUrl"
                           placeholder="Photo URL"
                           className="input input-bordered"
                           required
                        />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input
                           type="email"
                           name="email"
                           placeholder="email"
                           className="input input-bordered"
                           required
                        />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input
                           type="password"
                           name="password"
                           placeholder="password"
                           className="input input-bordered"
                           required
                        />
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                     </div>
                     <p>
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-500">
                           Log In
                        </Link>
                     </p>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;
