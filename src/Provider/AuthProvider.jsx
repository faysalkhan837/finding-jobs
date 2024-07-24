import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);


    const creatUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, curentUser =>{
            setUser(curentUser)
            setLoading(false);
        })
        return ()=> {
            unSubscribe()
            // setLoading(false)
        }
    },[auth])


    const userInfu = {
        user,
        loading,
        creatUser,
        signInUser,
        googleSignIn,
        updateUserProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfu}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;