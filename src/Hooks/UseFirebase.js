import { useEffect, useState } from "react";

import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword,getIdToken, signOut, updateProfile } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import initializeAuthentication from "../Pages/Firebase/firebase.init";


// initialize firebase app
initializeAuthentication()

const UseFireBase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin,  setAdmin] = useState(false);
    const [token, setToken] = useState('');
    let navigate = useNavigate();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // This is for sign in with Google
    const signUsingGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                navigate(destination)
                setAuthError('');
                const user = result.user
                console.log(user)
                saveUser(user.email, user.displayName, 'PUT')
                console.log(saveUser)
                // setUser(user);
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // Email Pass log In and Reg

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = { email, displayName: name }
                console.log(newUser)
                setUser(newUser);
                console.log(setUser)
                // save use to the database
                saveUser(email, name, 'POST');
                console.log(saveUser)
                //send name to firebase after creation

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                navigate('/')
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                console.log(destination);
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

useEffect(()=>{
fetch(`http://localhost:7000/users/${user.email}`)
.then(res => res.json())
.then(data => setAdmin(data.admin))

},[user.email])

    // this is using for Log Out
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                setAuthError(error);
            }).finally(() => setIsLoading(false));
    }
    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                .then(idToken => {
                    setToken(idToken);
                })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        console.log(user)
        fetch('http://localhost:7000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'

              
            },
            body: JSON.stringify(user)
        })
            .then()
    //         res => res.json())
    //         .then(data => {
    //             console.log('data inside useToken',data)
    //             const accessToken = data.token;
    //             setToken(accessToken);
    // }
    }
    return {
        user,
        token,
        signUsingGoogle,
        registerUser,
        admin,
        logout,
        loginUser,
        isLoading,
        authError
    }
};
export default UseFireBase;