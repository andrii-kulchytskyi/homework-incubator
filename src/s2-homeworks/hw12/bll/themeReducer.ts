export type InitStateType = {
    themeId: number,
}
const initState = {
    themeId: 1,
}

export const themeReducer = (state: InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}


type ActionType = ReturnType<typeof changeThemeId>

type ChangeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}
export const changeThemeId = (id: number): ChangeThemeIdType => ({type: 'SET_THEME_ID', id}) as const// fix any
