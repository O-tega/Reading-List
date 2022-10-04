import React, {useContext, useState} from 'react'
import { BookContext } from '../../contexts/BookContextRl'

const BookForm = () =>{

    const { dispatch } = useContext(BookContext)
    const [showForm, setShowForm] = useState(false)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch({type: 'ADD_BOOK', book:{
            title, author
        }})
        setShowForm(false)
        setTitle('')
        setAuthor('')
    }
 
    const classname =
			title && author
				? " text-center rounded-lg md:rounded-l-none mb-2 md:border-l-zinc-300 bg-[#502850] shadow-lg  transition text-white  font-medium px-4 py-1 mr-5 w-52 md:w-fit"
				: " text-center rounded-lg md:rounded-l-none mb-2 shadow-lg bg-[#6d3d6d] transition delay-75 text-[#502850]  font-medium px-4 py-1 mr-5 w-52 md:w-fit";

    return (
			<div>
				<div className='w-full flex flex-col items-center md:mt-10'>
					{showForm ? (
						<div className='p-2 ml-5 absolute inset-x-0 bottom-24  '>
							<div className=''>
								<form
									onSubmit={
										handleSubmit
									}>
									<div className='md:mt-10 flex flex-col items-center md:flex-row md:justify-center '>
										<input
											onChange={(e) =>
												setTitle(
													e.target.value
												)
											}
											type='text'
											placeholder='Book Title'
											className='text-white w-52 py-1 md:w-36 bg-[#502850]  rounded-lg pl-3 mr-5 md:mr-1 mb-2'
										/>
										<input
											onChange={(e) =>
												setAuthor(
													e.target.value
												)
											}
											type='text'
											placeholder='Book Author'
											className='text-white bg-[#502850] w-52 py-1  md:w-36 rounded-lg md:rounded-r-none  pl-3 mr-5 md:mr-0 mb-2'
										/>
										<input
											type='submit'
											className={`${classname}`}
										/>
									</div>
								</form>
							</div>
						</div>
					) : null}

					<div className='absolute flex justify-center  inset-x-0 bottom-16'>
						<button
							onClick={() =>
								setShowForm(true)
							}
							className='w-36 text-center rounded-lg shadow-lg bg-[#6d3d6d] hover:bg-[#290e29] transition hover:text-white  font-medium px-2 py-1 mr-1 md:mr-5'>
							Add New Book
						</button>
					</div>
				</div>
			</div>
		);
}

export default BookForm