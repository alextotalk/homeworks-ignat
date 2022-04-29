import React from 'react'
import m from "./Message.module.css";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function AlternativeMessage() {
    return (
        <div className={m.message}>
            <div className={m.item}>
                <div className={m.ava}>
                    <img
                        src={messageData.avatar}
                        alt=""/>
                </div>
                <div className={m.blockMessageWrapper}>
                    <div className={m.tail}></div>
                    <div className={m.blockMessage}>
                        <div className={m.blockMessageItem}>
                            <div className={m.blockMessageName}>{messageData.name}</div>
                            <div className={m.blockMessageText}>{messageData.message}</div>
                        </div>
                        <div className={m.blockMessageTime}>{messageData.time}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AlternativeMessage
