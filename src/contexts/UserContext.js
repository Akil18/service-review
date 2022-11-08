import React, { createContext, useEffect, useState } from "react";
import {
   getAuth,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithPopup,
   signInWithEmailAndPassword,
   onAuthStateChanged,
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

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         console.log(currentUser);
      });

      return () => unsubscribe();
   }, []);

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
