import {PostType} from '../components/profile/myPosts/post/Post';
import {DialogItemProps} from '../components/dialogs/dialogItem/DialogItem';
import {MessageType} from '../components/dialogs/message/Message';
import ava from '../assets/postAvatar.jpg';
import {ProfifeReducer, ProfifeReducerActionType} from './Profile-reducer';
import {DialogReducer, DialogReducerActionType} from './Dialog-reducer';

export type StateType = {
    profile: {
        posts: PostType[]
        newPostText: string
    }
    dialog: {
        dialogs: DialogItemProps[]
        newDialogText: string
        messages: MessageType[]
        newMessageText: string
    }
}

export type StoreActionType = ProfifeReducerActionType | DialogReducerActionType

export type StoreType = {
    _state: StateType
    _callSubscriber: (s: StoreType)=>void

    getState: ()=> StateType
    subscriber: (observer: (s: StoreType)=>void)=>void

    dispatch: (action: StoreActionType) => void
}

export const store: StoreType = {
    _state: {
        profile: {
            posts: [
                {
                    id: 1,
                    message: 'Hi, how are you?',
                    likesCount: 5,
                    avatar: ava
                },
                {
                    id: 2,
                    message: "It's my first post",
                    likesCount: 7,
                    avatar: ava
                }
            ],
            newPostText: ''
        },
        dialog: {
            dialogs: [
                {id: 1, name: 'User1'},
                {id: 2, name: 'User2'},
                {id: 3, name: 'User3'},
                {id: 4, name: 'User4'},
                {id: 5, name: 'User5'},
                {id: 6, name: 'User6'},
                {id: 7, name: 'User7'}
            ],
            newDialogText: '',
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yow'},
                {id: 3, message: 'Hello'},
            ],
            newMessageText: ''
        }
    },
    _callSubscriber(this) {
        // stub function: временная пустая функция заглушка - нужна, чтобы всё скомпилилось при запуске
    },

    getState(){return this._state},
    subscriber(observer) {
        this._callSubscriber = observer
    },

    dispatch (action: StoreActionType) {
        this._state.profile = ProfifeReducer(this._state.profile, action)
        this._state.dialog = DialogReducer(this._state.dialog, action)

        this._callSubscriber(this)
    }
}

//@ts-ignore
window.store=store