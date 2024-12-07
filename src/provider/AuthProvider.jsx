import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();

    const auth = getAuth(app);

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const [email, setEmail] = useState('')

    console.log(user);


    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        setLoading(true);
        signOut(auth);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleAuth = () => {
        return signInWithPopup(auth, provider);
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
            .finally(() => setLoading(false));
    };

    const [theme, setTheme] = React.useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    // initially set the theme and "listen" for changes to apply them to the HTML tag
    React.useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);


    const authValues = {
        user,
        setUser,
        signUp,
        logout,
        signIn,
        googleAuth,
        loading,
        updateUser,
        resetPassword,
        email,
        setEmail,
        theme,
        toggleTheme
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
    }, []);

    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider; 