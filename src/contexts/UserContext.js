import React, { createContext, useState } from "react";
import {
   getAuth,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithPopup,
   signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
   const [user, setUser] = useState([]);

   const googleProvider = new GoogleAuthProvider();

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);
   };

   const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const authInfo = { user, createUser, signInWithGoogle, signIn };

   return (
      <div>
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
      </div>
   );
};

export default UserContext;
