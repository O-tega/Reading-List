import React, {createContext, useReducer} from 'react'
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();


const BookContextProvider =(props)=>{
    const [books, dispatch] = useReducer(bookReducer, [
        {id: 1, title: 'Name of the wind', author: 'Patrick Rothfuss'},
        {id: 2, title: 'The final empire', author: 'Brandon Sanderson'}
    ])


    return(
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;