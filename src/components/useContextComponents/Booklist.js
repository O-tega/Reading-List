import React, { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';
import { ThemeContext } from '../../contexts/ThemeContext';


const Booklist =()=>{
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const {books} = useContext(BookContext)
    const theme = isLightTheme ? light : dark
    return(
        <div style={{background: theme.bg, color: theme.syntax}} className='px-10'>
                <ul className='text-center py-10 '>
                    {books.map(({title, id})=>{
                        return(
                            <li key={id} className='title' style ={{background: theme.ui, color: theme.syntax}} >{title}</li>
                        )
                    })}
                </ul>
            </div>
    )
}


export default Booklist