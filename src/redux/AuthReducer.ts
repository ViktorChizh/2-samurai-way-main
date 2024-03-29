import defaultAvatar from '../assets/avatar.webp'

let initialState: AuthReducerType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    ownUserAvatar: null
}

export const authReducer = (state: AuthReducerType = initialState, action: AuthReducerActionType): AuthReducerType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {...state,
                ...action.payload.data,
                isAuth: true,
                ownUserAvatar: action.payload.ownUserAvatar || defaultAvatar}
        default:
            return state
    }
}
//types
export type AuthReducerType = AuthType & { isAuth: boolean, ownUserAvatar: string | null}
export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
}
export type AuthReducerActionType = ReturnType<typeof setAuthUserData>
//actions
export const setAuthUserData = (data: AuthType, ownUserAvatar: string | null) =>
    ({type: 'SET_USER_DATA' as const, payload: {data, ownUserAvatar}})
