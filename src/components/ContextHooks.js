import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'


class ContextHooks extends Component{

    render(){

        return (
					<div className='flex w-full  bg-white h-screen rounded-t-3xl'>
						<div className='py-5 px-5 mt-6 flex flex-col items-center'>
							<Link to='context'>
								<div className=' text-center rounded-lg text-slate-500 shadow-lg bg-slate-200 hover:bg-slate-400 transition hover:text-white  font-medium px-2 py-1'>
									context
								</div>
							</Link>
							<Link to='hooks'>
								<div className=' text-center rounded-lg shadow-lg bg-slate-400 text-white hover:bg-slate-200 transition hover:text-slate-500 font-medium px-2 py-1 my-5'>
									Hooks
								</div>
							</Link>
							<Link to='usecontext'>
								<div className=' text-center rounded-lg text-slate-500 shadow-lg bg-slate-200 hover:bg-slate-400 transition hover:text-white  font-medium px-1 py-1'>
									usecontext
								</div>
							</Link>
						</div>
						<div className='w-full'>
							<Outlet />
						</div>
					</div>
				);
    }
}

export default ContextHooks