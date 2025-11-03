import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase";
import { useEffect, useState } from "react";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     console.log("has current user", currentUser);
  //   } else {
  //     console.log("current user", currentUser);
  //   }
  // });

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("inside useEffect on auth state change", currentUser);

      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    singInUser,
    singOutUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
}

export default AuthProvider;
