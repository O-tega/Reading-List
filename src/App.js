import React, {Component } from "react";
import AppRoutes from "./AppRoutes";

import Home from "./components/Home";

class App extends Component {
	render() {
		return (
			<div className='flex flex-col h-screen items-center'>
				<Home />
				<div className='w-3/4 '>
					<AppRoutes />
				</div>
			</div>
		);
	}
}

export default App;
