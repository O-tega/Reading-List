import React, {createContext, useState} from 'react'

export const BookContext = createContext();


const BookContextProvider =(props)=>{
    const [books, setBooks] = useState([
        {id: 1, title: 'Name of the wind', author: 'Patrick Rothfuss'},
        {id: 2, title: 'The final empire', author: 'Brandon Sanderson'}
    ])

    const addBook = (title, author)=>{
        const newId = books.length + 1
        setBooks([...books, {title, author, id:newId}])
    }

    const removeBook = (id)=>{
        setBooks(books.filter(book=>book.id !== id));
    }

    return(
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;