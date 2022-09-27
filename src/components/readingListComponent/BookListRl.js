import React, {
	useContext,
} from "react";
import { BookContext } from "../../contexts/BookContextRl";
import BookDetail from "./BookDetails";

const BookListRl = () => {
	const { books } = useContext(
		BookContext
	);
	return (
		<div className=' flex justify-center '>
			<div className='w-8/12 bg-[#8f548f] h-96 flex flex-col justify-center px-10'>
				{books.length? books.map(
					({ title, author, id }) => {
						return (
							<div>
                                <BookDetail title={title} id={id} author={author}/>
                            </div>
						);
					}
				):
            <div className="text-white text-center bg-[#6d3d6d] rounded-lg py-24 mx-20 ">
                <p className="text-lg font-bold">No Books to read</p>
                <p className="text-3xl font-bold">Hello free time 🕺💃</p>
        </div> }
			</div>
		</div>
	)
};

export default BookListRl;
