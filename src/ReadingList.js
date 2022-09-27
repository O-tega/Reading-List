import React from 'react'
import BookListRl from './components/readingListComponent/BookListRl';
import Navbar from './components/readingListComponent/Navbar';
import BookContextProvider from './contexts/BookContextRl';


const ReadingList = ()=>{
    return (
			<div className=' h-screen rounded-t-3xl bg-[#4c2a4c]'>
				<BookContextProvider>
					<Navbar />
                    <BookListRl/>
				</BookContextProvider>
			</div>
		);
}


export default ReadingList;