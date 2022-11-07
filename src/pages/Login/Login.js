import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event.target.email.value, event.target.password.value);
   };
   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
               <div className="text-center">
                  <h1 className="text-5xl font-bold">Login</h1>
               </div>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleSubmit} className="card-body">
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
                        <label className="label"></label>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                     </div>
                     <p>
                        Don't have an account{" "}
                        <Link to="/register" className="text-blue-500">
                           Register
                        </Link>
                     </p>
                  </form>
                  <button className="btn btn-outline btn-success m-2">
                     Google
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
