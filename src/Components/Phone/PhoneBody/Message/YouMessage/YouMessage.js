import React from 'react'
import "./YouMessage.css"
function YouMessage() {
    return (
        <div className='YouMessage'>
            <div className='img-bar'>
                <img src={process.env.PUBLIC_URL + "/assets/dog-image-1.jpg"} alt='.png' />
                <img src={process.env.PUBLIC_URL + "/assets/dog-image-2.jpg"} alt='.png' />
                <img src={process.env.PUBLIC_URL + "/assets/dog-image-3.jpg"} alt='.png' />
            </div>
            <div className='span-bar'>
                <span>Here are a few pictures. She's a happy girl!</span>
                <span>Can you make it?</span>
            </div>
        </div>
    )
}

export default YouMessage
