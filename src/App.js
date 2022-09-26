import React, {
	Component,
} from "react";
import {Routes, Route} from 'react-router-dom'
import ContextHooks from "./components/ContextHooks";
import Home from "./components/Home";
import Context from "./Context"
import Hooks from "./Hooks";
import UseContext from './UseContext'

class App extends Component {

	render() {
		return (
			<div className='flex flex-col h-screen items-center'>
      <Home/>
				<div className='w-3/4 bg-white h-screen rounded-t-3xl '>
          <Routes>
            <Route path='context&hooks' element={<ContextHooks/>}>
              <Route path='context' element={<Context/>} />
              <Route path='hooks' element={<Hooks/>} />
              <Route path='usecontext' element={<UseContext/>} />
            </Route>
          </Routes>
          </div>
				</div>
		);
	}
}

export default App;
