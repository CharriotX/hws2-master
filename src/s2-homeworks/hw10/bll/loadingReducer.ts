const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): State => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING': {
            const newState = state.isLoading === false ? true : false
            return { ...state, isLoading: newState }
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

type State = {
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
