import React from 'react'

const Button = ({color, text,handleClick}) => {
    // const handleClick = () => {
    //     console.log("click");
    // }
    return (
        <div>
            <button style={{backgroundColor:color}} className='btn' onClick={handleClick}>
            {text}
            </button>
        </div>
    )
}

export default Button
