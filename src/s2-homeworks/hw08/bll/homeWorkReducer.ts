import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedUser = [...state]
            if (action.payload === 'up') {
                sortedUser.sort((a, b) => a.name.localeCompare(b.name))
            }
            if (action.payload === "down") {
                sortedUser.sort((a, b) => b.name.localeCompare(a.name))
            }

            return sortedUser // need to fix
        }
        case 'check': {

            return state.filter(user => user.age >= 18) // need to fix
        }
        default:
            return state
    }
}
