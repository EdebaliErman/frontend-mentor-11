import React from 'react'
import HeMessage from './Message/HeMessage/HeMessage'
import YouMessage from './Message/YouMessage/YouMessage'
import BodyPriceBar from './BodyPriceBar/BodyPriceBar'
import SendMessage from './Message/SendMessage/SendMessage'
import Header from '../Header/Header'

function PhoneBody() {
    return (
        <div className='bg-[#f5f3f8] rounded-3xl  flex flex-col '>
            <Header />
            <div className='p-2'>
                <HeMessage />
                <YouMessage />
                <BodyPriceBar />
                <SendMessage />
            </div>
        </div>
    )
}

export default PhoneBody
