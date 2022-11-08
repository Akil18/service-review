import React, { createContext, useEffect, useState } from "react";
import {
   getAuth,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithPopup,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
   const [user, setUser] = useState([]);
   const [loading, setLoading] = useState(true);

   const googleProvider = new GoogleAuthProvider();

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
         console.log(currentUser);
      });

      return () => unsubscribe();
   }, []);

   const authInfo = {
      user,
      loading,
      createUser,
      signInWithGoogle,
      signIn,
      logOut,
   };

   return (
      <div>
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
      </div>
   );
};

export default UserContext;
