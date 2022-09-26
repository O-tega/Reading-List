import React, {createContext, useState} from 'react'

export const BookContext = createContext()

const BookContextProvider = (props)=>{

    const [books, setBooks] = useState([
			{ id: 1, title: "Name of the winds" },
			{ id: 2, title: "The way of kings" },
			{ id: 3, title: "The final empire" },
		]);

    return(
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider