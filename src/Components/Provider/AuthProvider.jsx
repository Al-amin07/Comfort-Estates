import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {  GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../Firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

 export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true);
    const [photo, setPhoto] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const handleRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const [viewData, setViewData] = useState({})

    const handleProperty = (data) => {
       
        if(data){
            setViewData(data)
        }
    }

    //  useEffect(() => {
    //      if(user){
    //          setName(user.displayName);
    //          setPhoto(user.photoURL);
    //          console.log('User Changed', name, photo)
    //      }
    //  }, [user])

    

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('On Auth Is Called!!', currentUser)
            if(currentUser){
                setName(currentUser.displayName);
                setPhoto(currentUser.photoURL);
                console.log(user.displayName, user.photoURL)
            }
            setLoading(false)
        });

        return () => {
            unSubscribe()
        }
    }, [user]);

    // const name = user?.displayName;
    
    const authInfo = {user, setUser, handleRegister, handleLogin, logOut, googleLogin, githubLogin, handleProperty, viewData, loading, name, setName, photo, setPhoto}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;