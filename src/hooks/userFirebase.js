import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [error, seterror] = useState('');
    const auth = getAuth();
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
            if (user) {
                setuser(user)
            }
            else {
                setuser({})
            }
        })
    }, [])
    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;