/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext();
const AuthProvider = ({routes,children}) => {

    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();

    const handleRegister = (email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
    }
    const handleLogin = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
    }
    const handleGoogleLogin = ()=>{
        signInWithPopup(auth, googleProvider)
    }
    const handleLogout = ()=>{
        signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogout,
    }
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {/* {routes} */}
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;