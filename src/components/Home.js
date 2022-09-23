import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Home extends Component{

    render(){
        return (
					<div className='flex justify-center py-5'>
						<Link to='/context'>
							<div className='w-52 text-center rounded-lg text-slate-500 shadow-lg bg-slate-200 hover:bg-slate-400 transition hover:text-white  font-medium px-4 py-1 mr-5'>
								Context
							</div>
						</Link>
						<Link to='/hooks'>
							<div className='w-52 text-center rounded-lg shadow-lg bg-slate-400 text-white hover:bg-slate-200 transition hover:text-slate-500 font-medium px-4 py-1 ml-5'>
								Hooks
							</div>
						</Link>
					</div>
				);
    }
}

export default Home