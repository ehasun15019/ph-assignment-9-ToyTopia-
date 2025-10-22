import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create a user functionality
  const createUser = async (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).then(
      (newUser) => {
        const verifiedUser = newUser.user;

        sendEmailVerification(verifiedUser)
          .then(() => {
            alert("Verification email send! Please check your email");
          })
          .catch((error) => {
            console.error("Error sending verification email:", error);
          });

        return verifiedUser;
      }
    );
  };

  /* SignIn with Google Functionality start */
  const signInWithGoogle = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  /* SignIn with Google Functionality end */

  /* get Current User functionality start */
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("in the auth", currentUser), setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  /* get Current User functionality end */

  const authInfo = {
    user,
    loading,
    createUser: createUser,
    signInWithGoogle: signInWithGoogle,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
