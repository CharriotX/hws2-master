import { AppStoreType } from "../../hw10/bll/store"

const initState = {
    themeId: 1,
}

type StateType = typeof initState

export const themeReducer = (state = initState, action: Actions): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return { ...state, themeId: action.payload }
        }
        default:
            return state
    }
}

type Actions = ReturnType<typeof changeThemeId>

type ActionType<T> = {
    type: string,
    payload: T
}

export const changeThemeId = (id: number): ActionType<number> => ({ type: 'SET_THEME_ID' as const, payload: id }) // fix any

export const selectTheme = (state: AppStoreType) => state.theme
