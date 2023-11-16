import React from 'react'
import HeMessage from './Message/HeMessage/HeMessage'
import YouMessage from './Message/YouMessage/YouMessage'
import BodyPriceBar from './BodyPriceBar/BodyPriceBar'
import SendMessage from './Message/SendMessage/SendMessage'

function PhoneBody() {
    return (
        <div>
            <HeMessage />
            <YouMessage />
            <BodyPriceBar />
            <SendMessage />
        </div>
    )
}

export default PhoneBody
