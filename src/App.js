import React, {
	Component,
} from "react";
import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import ThemeContextProvider from "./contexts/ThemeContext";

class App extends Component {
	state = {};

	render() {
		return (
			<div className='flex flex-col h-screen items-center'>
				<div className='w-3/4 bg-white h-screen px-10'>
					<ThemeContextProvider>
						<Navbar />
						<Booklist />
            <ThemeToggle />
					</ThemeContextProvider>
				</div>
			</div>
		);
	}
}

export default App;
