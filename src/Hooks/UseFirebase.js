import { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getIdToken,
  signOut,
  updateProfile,
} from "firebase/auth";
import initializeAuthentication from "../Pages/Firebase/firebase.init";

// Initialize Firebase App
initializeAuthentication();

const UseFireBase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // API base URL - replace localhost with your deployed server link if available
  const baseUrl =
    "https://your-server-site-name.vercel.app" || "http://localhost:7000";

  // 1. Sign in with Google
  const signUsingGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const destination = location?.state?.from || "/";
        saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // 2. Register User with Email/Password
  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        const newUser = { email, displayName: name };
        setUser(newUser);

        // Save user to the database
        saveUser(email, name, "POST");

        // Update profile in Firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        }).catch((error) => setAuthError(error.message));

        setAuthError("");
        navigate("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // 3. Login User with Email/Password
  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const destination = location?.state?.from || "/";
        setAuthError("");
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // 4. Observer User State
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]); // Dependency added to fix warning

  // 5. Admin Status Check
  useEffect(() => {
    if (user.email) {
      fetch(`${baseUrl}/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => setAdmin(data.admin))
        .catch((err) => console.log("Admin check error:", err));
    }
  }, [user.email, baseUrl]);

  // 6. Log Out
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // 7. Save User to Database
  const saveUser = (email, displayName, method) => {
    const userData = { email, displayName };
    fetch(`${baseUrl}/users`, {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    }).catch((err) => console.log("Save user error:", err));
  };

  return {
    user,
    token,
    admin,
    isLoading,
    authError,
    signUsingGoogle,
    registerUser,
    loginUser,
    logout,
  };
};

export default UseFireBase;
