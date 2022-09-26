import React, { Component } from "react";
import Booklist from "./components/useContextComponents/Booklist";
import Navbar from "./components/useContextComponents/Navbar";
import ThemeToggle from "./components/useContextComponents/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";
import ThemeContextProvider from "./contexts/ThemeContext";

class Context extends Component {
	render() {
		return (
			<div>
				<ThemeContextProvider>
					<AuthContextProvider>
						<Navbar />
                        <BookContextProvider>
						    <Booklist />
                        </BookContextProvider>
						<ThemeToggle />
					</AuthContextProvider>
        </ThemeContextProvider>
			</div>
		);
	}
}

export default Context;
