import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [error, seterror] = useState('');
    const auth = getAuth();
    const [isloading, setisloading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    //signin using google
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    //log out
    const logOut = () => {
        signOut(auth)
            .then(() => setuser({}))
            .catch(error => seterror(error))
    }
    //user observer
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setisloading(true);
            if (user) {
                getIdToken(user)
                    .then(idToken => localStorage.setItem('token', idToken));
                setuser(user);
            }
            else {
                setuser({})
            }
            setisloading(false);
        })
    }, [])

    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        isloading
    }
}
export default useFirebase;