import React, {
	Component,
} from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import Context from "./Context"
import Hooks from "./Hooks";

class App extends Component {

	render() {
		return (
			<div className='flex flex-col h-screen items-center'>
				<div className='w-3/4 bg-white h-screen px-10'>
              <Home/>
              <Routes>
                <Route path='context' element={<Context/>} />
                <Route path='hooks' element={<Hooks/>} />
              </Routes>
            
				</div>
			</div>
		);
	}
}

export default App;
