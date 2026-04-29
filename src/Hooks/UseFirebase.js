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
import { BASE_URL } from "../utils/constants";

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
    if (user?.email && BASE_URL) {
      fetch(`${BASE_URL}/users/${user.email}`)
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((data) => {
          // যদি data.admin না থাকে তবে ফলব্যাক হিসেবে false সেট হবে
          setAdmin(!!data.admin);
        })
        .catch((err) => {
          console.error("Admin check error:", err);
          setAdmin(false); // এরর হলে সেফটি হিসেবে অ্যাডমিন ফলস রাখা ভালো
        });
    }
  }, [user?.email]);
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
    fetch(`${BASE_URL}/users`, {
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
