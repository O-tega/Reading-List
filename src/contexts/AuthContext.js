import React, { useState } from 'react';

export const AuthContext = React.createContext({});


const AuthContextProvider = (props)=>{
const [auth, setAuth] = useState({
	isAuthenticated: false,
});

const toggleAuth =()=>{
    setAuth({isAuthenticated: !auth.isAuthenticated})
}

    return(
        <AuthContext.Provider value={{...auth, toggleAuth: toggleAuth}}>
                {props.children}
            </AuthContext.Provider>
    )
}

export default AuthContextProvider