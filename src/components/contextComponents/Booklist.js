import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';


const Booklist =()=>{
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return(
        <div style={{background: theme.bg, color: theme.syntax}} className='px-10'>
                <ul className='text-center py-10 '>
                    <li className='title' style ={{background: theme.ui, color: theme.syntax}}>The way of Kings</li>
                    <li className='title' style ={{background: theme.ui, color: theme.syntax}}>The name of the wind</li>
                    <li className='title' style ={{background: theme.ui, color: theme.syntax}}>The final empire</li>
                </ul>
            </div>
    )
}


export default Booklist