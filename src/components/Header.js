import React from 'react'
import Button from './Button.js'

const Header = () => {
     const handleClick = () => {
        console.log("click");
    }
    return (
        <header className='header'>
           <h1>TASK TRACKER</h1>
           <Button color="purple" text="Show Add Text Bar" handleClick ={handleClick} />
        </header>
    )
}

export default Header
