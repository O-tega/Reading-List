import React, {useContext} from 'react';
import { BookContext } from '../../contexts/BookContextRl';


const BookDetail =({title, author, id})=>{

    const{dispatch} = useContext(BookContext)

    return(
        <div onClick={()=>dispatch({type: 'REMOVE_BOOK', booK : id})}
            className=' text-center text-white text-sm rounded bg-[#6d3d6d] mb-5 p-3 hover:line-through cursor-pointer hover:opacity-80'>
            <p className="flex justify-between">
                <span className="font-medium">{title}</span>
                <span>-</span>
                <span className="text-xs">{author}</span>
            </p>
		</div>

    )
}

export default BookDetail