import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Listen to auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => setUser(null))
            .finally(() => setLoading(false));
    };

    // ✅ Update user profile (real-time refresh)
    const updateUserProfile = async (name, photoURL) => {
        if (auth.currentUser) {
            await updateProfile(auth.currentUser, { displayName: name, photoURL });
            setUser({ ...auth.currentUser }); // refresh context user immediately
        }
    };

    const authInfo = {
        user,
        loading,
        logOut,
        updateUserProfile, // export the function
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
