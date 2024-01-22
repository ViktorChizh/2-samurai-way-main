import React, {FC} from 'react';
import s from '../Dialogs.module.css';

export type MessageType = {
    id: number
    message: string
}

export const Message: FC<MessageType> = ({id, message}) => {
    return <div className={s.message} key={id}>{message}</div>
}