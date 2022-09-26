import React, { Component } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';


class Booklist extends Component{
    static contextType = ThemeContext

    state = {}

    render(){
        const { isLightTheme, light, dark } = this.context
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
}


export default Booklist