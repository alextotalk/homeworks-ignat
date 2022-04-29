import React from 'react'
import m from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={m.message}>
            <div className={m.item}>
                <div className={m.ava}>
                    <img
                        src={props.avatar}
                        alt=""/>
                </div>
                <div className={m.blockMessageWrapper}>
                    <div className={m.tail}></div>
                    <div className={m.blockMessage}>
                        <div className={m.blockMessageItem}>
                            <div className={m.blockMessageName}>{props.name}</div>
                            <div className={m.blockMessageText}>{props.message}</div>
                        </div>
                        <div className={m.blockMessageTime}>{props.time}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Message
