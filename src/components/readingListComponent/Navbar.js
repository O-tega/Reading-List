import React, { useContext } from 'react'
import { BookContext } from '../../contexts/BookContextRl'


const Navbar = ()=>{
    const{books} = useContext(BookContext)

    return(
        <div className='flex justify-center pt-10'>
            <div className='w-8/12 rounded-t-lg flex flex-col items-center py-5 bg-[#6d3d6d]'>
            <h1 className="font-bold text-2xl text-center text-white">My Reading List</h1>
            <p className='text-center text-white pt-2 text-sm'>Currently you have <span className='font-bold px-2  border-white border rounded-full'>{books.length}</span> books to get through...</p>
            </div>
        </div>
    )
}


export default Navbar