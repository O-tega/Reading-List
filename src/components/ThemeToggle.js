import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {Link} from 'react-router-dom'

class ThemeToggle extends Component {
    static contextType = ThemeContext
	state = {};

render() {
        const {toogleTheme} = this.context
        return (
                <div className="flex justify-center py-7 mr-5 ">
                    <button onClick={toogleTheme} className=" rounded-lg shadow-lg bg-slate-400 text-white font-medium px-4 py-1">Toogle</button>
                </div>

            
            )
    }
}

export default ThemeToggle;
