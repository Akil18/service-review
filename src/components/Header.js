import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Header = () => {
   const { user, logOut } = useContext(AuthContext);
   const navigate = useNavigate();

   const handleLogOut = () => {
      logOut()
         .then(() => {
            navigate("/");
         })
         .catch((error) => {
            console.error(error);
         });
   };

   return (
      <div>
         <div className="navbar bg-base-100 border-b-2 px-8">
            <div className="navbar-start">
               <img className="w-12 mr-1" src="logo.png" alt="scheme-ctg" />
               <Link
                  to="/"
                  className="btn btn-ghost normal-case rounded-none text-xl"
               >
                  SCHEME CTG
               </Link>
            </div>
            <div className="navbar-end">
               <ul className="menu menu-horizontal px-2 gap-2">
                  <li>
                     <Link to="blogs">BLOGS</Link>
                  </li>
                  {user?.uid && (
                     <>
                        <li>
                           <Link to="myreviews">MY REVIEWS</Link>
                        </li>
                        <li>
                           <Link to="addservice">ADD SERVICE</Link>
                        </li>
                        <Link onClick={handleLogOut} className="btn">
                           Log Out
                        </Link>
                     </>
                  )}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Header;
