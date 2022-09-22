import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {
    static contextType = ThemeContext
	state = {};

	render() {
        console.log(this.context)
        const {isLightTheme, light, dark} = this.context
        // using a tenary operator to check the condition of isLightTheme and action
        const theme = isLightTheme ? light : dark
		return (
			<div style={{background: theme.ui, color: theme.syntax}} className='py-10 mt-10'>
				<div className='text-center font-bold text-2xl '>
					Context App
				</div>
				<nav className='flex justify-center list-none pt-2'>
					<li className='nav'>Home</li>
					<li className='nav'>About</li>
					<li className='nav'>FAQ</li>
				</nav>
			</div>
		);
	}
}

export default Navbar;
