import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Context from "./Context";
import Hooks from "./Hooks";
import UseContext from "./UseContext";
import ContextHooks from "./components/ContextHooks";
import ReadingList from "./ReadingList";






const AppRoutes = ()=>{
    return(
        <div>
        <Routes>
          <Route path='reading-list' element={<ReadingList/>}/>
            <Route path='context&hooks' element={<ContextHooks/>}>
              <Route path='context' element={<Context/>} />
              <Route path='hooks' element={<Hooks/>} />
              <Route path='usecontext' element={<UseContext/>} />
            </Route>
          </Routes>
        </div>
    )
}

export default AppRoutes;