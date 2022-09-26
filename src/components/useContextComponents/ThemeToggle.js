import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";


const ThemeToggle =()=>{
    const {toogleTheme} = useContext(ThemeContext)
    return(
        <div className="flex justify-center py-7 mr-5 ">
                    <button onClick={toogleTheme} className=" rounded-lg shadow-lg bg-slate-400 text-white font-medium px-4 py-1">Toogle</button>
                </div>
    )
}

export default ThemeToggle;
