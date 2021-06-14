

export function AccountReducer(state: any, action: any) {

    switch (action.type) {
        case 'ADD_NAME':
            return { ...state, name: action.name }
        case 'ADD_ID':
            return { ...state, id: action.id }
        case 'ADD_ADDRESS':
            return { ...state, address: action.address }
        case 'ADD_CONTENT':
            return { ...state, content: action.content }
        default:
            return state
    }




}
