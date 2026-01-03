import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log("User", user);
        if (user) {
          setUser(user);
          setLoading(false);
        }
        // ...
      } else {
        setLoading(false);
        setUser(null);
        // User is signed out
        // ...
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    // Implement logout functionality here
    console.log("Logout clicked");
    signOut(auth)
      .then(() => {
        setUser(null);
        // Sign-out successful.
        console.log("User signed out");
      })
      .catch((error) => {
        // An error happened.
        console.log("Error signing out:", error);
      });
  };

  return (
    <div>
      <AuthContext
        value={{
          user,
          loading: loading,
          handleLogout,
        }}
      >
        {children}
      </AuthContext>
    </div>
  );
};

export default AuthProvider;
