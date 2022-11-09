import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
   const { signIn, signInWithGoogle } = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from || "/";

   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, { replace: true });
         })
         .catch((error) => {
            console.log(error);
         });
      };
      
      const handleGoogleSignIn = () => {
         signInWithGoogle()
         .then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
            console.log(user);
         })
         .catch((error) => {
            console.log(error);
         });
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
                        <button className="btn btn-primary rounded-none">Login</button>
                     </div>
                     <p>
                        Don't have an account{" "}
                        <Link to="/register" className="text-blue-500 hover:text-blue-200">
                           Register
                        </Link>
                     </p>
                  </form>
                  <button
                     onClick={handleGoogleSignIn}
                     className="btn btn-outline rounded-none btn-success m-4"
                  >
                     Google
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
