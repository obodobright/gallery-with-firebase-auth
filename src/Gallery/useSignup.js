import { fireAuth } from "./firebase";
import { useState } from "react";
import { useHistory } from "react-router";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignUp = (email, password, displayName) => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const signUp = async() => {
        setError(null);
        setIsPending(true);
        try {
            const res = await createUserWithEmailAndPassword(fireAuth, email, password);
            if (!res) {
                throw Error("There was an error signing up");
            }
            // updateProfile(res.user, { displayName });
            // history.push("/galleryCard");
        } catch (error) {
            console.log(error.message);
            setError(error.message);
            setIsPending(false);
        }
    };
    return { signUp, error, isPending };
};