import React, {Component } from "react";
import AppRoutes from "./AppRoutes";

import Home from "./components/Home";

class App extends Component {
	render() {
		return (
			<div className='flex flex-col h-screen items-center'>
				<Home />
				<div className='w-3/4 bg-white h-screen rounded-t-3xl '>
					<AppRoutes />
				</div>
			</div>
		);
	}
}

export default App;
