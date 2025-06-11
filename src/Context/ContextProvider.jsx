import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/FIrebase.config';
import Swal from 'sweetalert2';


export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const ContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);



    // login with google popup

    const googleLogin = () => {

        return signInWithPopup(auth, provider)
            .then((user) => {

                const currentUser = user.user
                // setUser(currentUser)
                

                return currentUser

            })
            .catch((error) => {
                if (error) {

                    Swal.fire({
                        position: "middle",
                        icon: "warning",
                        title: "Unable to Login",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })

    }




    // creating user with email and password

    const register = (email, password, name, photo) => {

        return createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                const currentUser = user.user
                updateProfile(currentUser, {
                    displayName: name,
                    photoURL: photo
                })

                return currentUser


            })
            .catch((error) => {
                if (error) {
                    Swal.fire({
                        position: "middle",
                        icon: "warning",
                        title: "Unable to Register",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    // login existing user 

    const login = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
            .then((user) => {

                return user.user

            })
            .catch((error) => {
                console.log(error)
            })

    }




    // setting observer to track user 

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
        })


        return () => unsubscribe()


    }, [])


    // logout

    const logout = () => {
        signOut(auth)
            .then(() => {

                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "Logout Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
            .catch((error) => {

                if (error) {
                    Swal.fire({
                        position: "middle",
                        icon: "warning",
                        title: "Unable to Logout",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
    }







    const contextValue = {

        register,
        user,
        login,
        logout,
        googleLogin

    }


    return (
        <div>
            <AuthContext.Provider value={contextValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextProvider;