import React, {  useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";

// We wil use the theme.ContextConsumer to consume the context rather than calling static

const Navbar =()=>{
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const {isAuthenticated, toggleAuth} = useContext(AuthContext);
    const theme = isLightTheme ? light : dark
    return(
        <div style={{background: theme.ui, color: theme.syntax}} className='py-10 mt-10 rounded-tr-2xl'>
                            <div className='text-center font-bold text-2xl '>
                                useContext App
                            </div>
                            <div onClick={toggleAuth}>
                                {isAuthenticated ? <div className="text-green-500 text-center">Logged in</div> : <div className="text-red-500 text-center">Logged out</div>}
                            </div>
                            <nav className='flex justify-center list-none pt-2'>
                                <li className='nav'>Home</li>
                                <li className='nav'>About</li>
                                <li className='nav'>FAQ</li>
                            </nav>
                        </div>
    )
}

export default Navbar;
