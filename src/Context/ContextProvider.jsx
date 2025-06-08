import React, { Children, createContext } from 'react';
import { getAuth } from "firebase/auth";
import { app } from '../Firebase/FIrebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const ContextProvider = ({ Children }) => {




    // adding user with email and password








    const contextValue = {

    }


    return (
        <div>
            <AuthContext.Provider value={contextValue}>
                {Children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextProvider;