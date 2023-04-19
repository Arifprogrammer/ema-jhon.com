import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loggedUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.error("You've signed out successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => console.log(error.message));
  };
  const authInfo = {
    user,
    createUser,
    loggedUser,
    logOut,
    loading,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
      <ToastContainer />
    </>
  );
};

export default AuthProvider;
