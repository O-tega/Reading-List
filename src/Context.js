import React, { Component } from "react";
import Booklist from "./components/contextComoponents/Booklist";
import Navbar from "./components/contextComoponents/Navbar";
import ThemeToggle from "./components/contextComoponents/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeContextProvider from "./contexts/ThemeContext";

class Context extends Component {
	render() {
		return (
			<div className="w-full flex flex-col items-center">
				<div className="w-full px-10">
					<ThemeContextProvider>
						<AuthContextProvider>
							<Navbar />
							<Booklist />
							<ThemeToggle />
						</AuthContextProvider>
					</ThemeContextProvider>
				</div>
			</div>
		);
	}
}

export default Context;
