import React from 'react'
import "./Header.css"
function Header() {
    return (
        <div className='Header'>
            <svg className=' 
            absolute top-0  mx-8   
            w-[62%] h-6
            rounded-full rounded-t-none  
            bg-white'>

            </svg>
            <div className='header-left'>
                <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' className='rotate-180' height="1em" viewBox="0 0 320 512"><style></style><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                <div className='header-left-profile'>
                    <img src={process.env.PUBLIC_URL + "/assets/avatar.jpg"} alt='png' />
                    <div>
                        <h1>Samuel Green</h1>
                        <p>Available to Walk</p>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
        </div>
    )
}

export default Header
