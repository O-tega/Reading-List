import React, {
	useContext,
} from "react";
import { BookContext } from "../../contexts/BookContextRl";
import BookDetail from "./BookDetails";

const BookListRl = () => {
	const { books } = useContext(BookContext);
	return (
		<div className=' flex justify-center '>
			<div className='w-10/12 md:w-8/12 bg-[#8f548f] h-[640px] md:h-96 flex flex-col pt-8 px-2 md:px-10'>
				{books.length? books.map(
					({ title, author, id }) => {
						return (
							<div key={id}>
                                <BookDetail title={title} id={id} author={author}/>
                            </div>
						);
					}
				):
            <div className="text-white text-center bg-[#6d3d6d] rounded-lg mx-0 py-10 md:py-10 md:mx-10 ">
                <p className="text-xs md:text-lg md:font-bold">No Books to read</p>
                <p className="text-md md:text-3xl md:font-bold">Hello free time 🕺💃</p>
        </div> }
			</div>

		</div>
	)
};

export default BookListRl;
