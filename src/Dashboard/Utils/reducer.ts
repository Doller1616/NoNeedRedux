

export function DashboardReducer(state: any, action: any) {

    switch (action.type) {
        case 'ADD_NAME':
            return { ...state, name: action.name }
        case 'ADD_ID':
            return { ...state, id: action.id }
        case 'ADD_ADDRESS':
            return { ...state, address: action.address }
        default:
            return state
    }




}
